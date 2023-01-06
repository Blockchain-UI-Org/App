"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYarnWorkspaces = exports.createDepTreeDepFromDep = exports.getTopLevelDeps = exports.parseManifestFile = exports.LockfileType = exports.Scope = void 0;
const errors_1 = require("../errors");
var Scope;
(function (Scope) {
    Scope["prod"] = "prod";
    Scope["dev"] = "dev";
})(Scope = exports.Scope || (exports.Scope = {}));
var LockfileType;
(function (LockfileType) {
    LockfileType["npm"] = "npm";
    LockfileType["npm7"] = "npm7";
    LockfileType["yarn"] = "yarn";
    LockfileType["yarn2"] = "yarn2";
})(LockfileType = exports.LockfileType || (exports.LockfileType = {}));
function parseManifestFile(manifestFileContents) {
    try {
        return JSON.parse(manifestFileContents);
    }
    catch (e) {
        throw new errors_1.InvalidUserInputError('package.json parsing failed with error ' + e.message);
    }
}
exports.parseManifestFile = parseManifestFile;
function getTopLevelDeps({ targetFile, includeDev, includePeerDeps = false, applyYarn2Resolutions = false, }) {
    var _a, _b;
    let dependencies = [];
    const dependenciesIterator = Object.entries(Object.assign(Object.assign(Object.assign({}, targetFile.dependencies), (includeDev ? targetFile.devDependencies : null)), (targetFile.optionalDependencies || {})));
    for (const [name, version] of dependenciesIterator) {
        dependencies.push({
            dev: includeDev && targetFile.devDependencies
                ? !!targetFile.devDependencies[name]
                : false,
            name,
            version,
        });
    }
    if (includePeerDeps && targetFile.peerDependencies) {
        for (const [name, version] of Object.entries(targetFile.peerDependencies)) {
            if ((_b = (_a = targetFile === null || targetFile === void 0 ? void 0 : targetFile.peerDependenciesMeta) === null || _a === void 0 ? void 0 : _a[name]) === null || _b === void 0 ? void 0 : _b.optional) {
                continue;
            }
            dependencies.push({
                name,
                version,
            });
        }
    }
    if (applyYarn2Resolutions && targetFile.resolutions) {
        const resMap = new Map(Object.entries(targetFile.resolutions).map(([resName, resVersion]) => [
            resName.replace(`${targetFile.name}/`, ''),
            resVersion,
        ]));
        dependencies = dependencies.map((dep) => resMap.has(dep.name) ? Object.assign(Object.assign({}, dep), { version: resMap.get(dep.name) }) : dep);
    }
    return dependencies;
}
exports.getTopLevelDeps = getTopLevelDeps;
function createDepTreeDepFromDep(dep) {
    return {
        labels: {
            scope: dep.dev ? Scope.dev : Scope.prod,
        },
        name: dep.name,
        version: dep.version,
    };
}
exports.createDepTreeDepFromDep = createDepTreeDepFromDep;
function getYarnWorkspaces(targetFile) {
    try {
        const packageJson = parseManifestFile(targetFile);
        if (!!packageJson.workspaces && !!packageJson.private) {
            if (Array.isArray(packageJson.workspaces)) {
                return packageJson.workspaces;
            }
            if ('packages' in packageJson.workspaces &&
                Array.isArray(packageJson.workspaces.packages)) {
                return packageJson.workspaces.packages;
            }
        }
        return false;
    }
    catch (e) {
        throw new errors_1.InvalidUserInputError('package.json parsing failed with ' + `error ${e.message}`);
    }
}
exports.getYarnWorkspaces = getYarnWorkspaces;
//# sourceMappingURL=index.js.map