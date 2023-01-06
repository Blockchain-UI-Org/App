import { structUtils } from '@yarnpkg/core';
import { NormalisedPkgs } from '../types';
import { PkgNode } from '../util';
export declare type ParseDescriptor = typeof structUtils.parseDescriptor;
export declare type ParseRange = typeof structUtils.parseRange;
export declare type YarnLockFileKeyNormalizer = (fullDescriptor: string) => Set<string>;
export declare const yarnLockFileKeyNormalizer: (parseDescriptor: ParseDescriptor, parseRange: ParseRange) => YarnLockFileKeyNormalizer;
export declare const getYarnLockV2ChildNode: (name: string, depInfo: {
    version: string;
    isDev: boolean;
}, pkgs: NormalisedPkgs, strictOutOfSync: boolean, includeOptionalDeps: boolean, resolutions: Record<string, string>, parentNode: PkgNode) => {
    id: string;
    name: string;
    version: string;
    dependencies: {
        [x: string]: {
            version: string;
            isDev: boolean;
        };
    };
    isDev: boolean;
    missingLockFileEntry?: undefined;
} | {
    id: string;
    name: string;
    version: string;
    dependencies: {};
    isDev: boolean;
    missingLockFileEntry: boolean;
};
