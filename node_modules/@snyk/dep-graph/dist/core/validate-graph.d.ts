import * as graphlib from '../graphlib';
import * as types from './types';
export declare function validateGraph(graph: graphlib.Graph, rootNodeId: string, pkgs: {
    [pkgId: string]: any;
}, pkgNodes: {
    [nodeId: string]: Set<string>;
}): void;
export declare function validatePackageURL(pkg: types.PkgInfo): void;
