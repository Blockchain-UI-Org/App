"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePackageURL = exports.validateGraph = void 0;
const graphlib = require("../graphlib");
const packageurl_js_1 = require("packageurl-js");
const errors_1 = require("./errors");
function assert(condition, msg) {
    if (!condition) {
        throw new errors_1.ValidationError(msg);
    }
}
function validateGraph(graph, rootNodeId, pkgs, pkgNodes) {
    assert((graph.predecessors(rootNodeId) || []).length === 0, `"${rootNodeId}" is not really the root`);
    const reachableFromRoot = graphlib.alg.postorder(graph, [rootNodeId]);
    const nodeIds = graph.nodes();
    assert(JSON.stringify(nodeIds.sort()) === JSON.stringify(reachableFromRoot.sort()), 'not all graph nodes are reachable from root');
    const pkgIds = Object.keys(pkgs);
    const pkgsWithoutInstances = pkgIds.filter((pkgId) => !pkgNodes[pkgId] || pkgNodes[pkgId].size === 0);
    assert(pkgsWithoutInstances.length === 0, 'not all pkgs have instance nodes');
    for (const pkgId in pkgs) {
        try {
            validatePackageURL(pkgs[pkgId]);
        }
        catch (e) {
            throw new errors_1.ValidationError(`invalid pkg ${pkgId}: ${e}`);
        }
    }
}
exports.validateGraph = validateGraph;
function validatePackageURL(pkg) {
    if (!pkg.purl) {
        return;
    }
    try {
        const purlPkg = packageurl_js_1.PackageURL.fromString(pkg.purl);
        switch (purlPkg.type) {
            // Within Snyk, maven packages use <namespace>:<name> as their *name*, but
            // we expect those to be separated correctly in the PackageURL.
            case 'maven':
                assert(pkg.name === purlPkg.namespace + ':' + purlPkg.name, `name and packageURL name do not match`);
                break;
            default:
                assert(pkg.name === purlPkg.name, `name and packageURL name do not match`);
        }
        assert(pkg.version === purlPkg.version, `version and packageURL version do not match`);
    }
    catch (e) {
        throw new errors_1.ValidationError(`packageURL validation failed: ${e}`);
    }
}
exports.validatePackageURL = validatePackageURL;
//# sourceMappingURL=validate-graph.js.map