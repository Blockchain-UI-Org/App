import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import { getFolders } from "./scripts/buildUtils";
import generatePackageJson from "rollup-plugin-generate-package-json";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import autoprefixer from "autoprefixer";
const fs = require("fs");

const glob = require("glob");
const path = require("path");

const packageJson = require("./package.json");

const bundleCss = () => {
  var config = [];
  var files = glob.sync(path.resolve(__dirname, "**/*.css"));
  console.log("files are .. ", files);
  files.forEach((file) => {
    var filename = file.substr(file.lastIndexOf("/") + 1, file.length).toLowerCase();
    console.log("filename is ", filename);
    config.push(
      postcss({
        include: file,
        extract: path.resolve(`dist/${filename}`),
        minimize: true,
      })
    );
  });
  return config;
};

const plugins = [
  peerDepsExternal(),
  resolve(),
  replace({
    preventAssignment: true,
    __IS_DEV__: process.env.NODE_ENV === "development",
  }),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.json",
    useTsconfigDeclarationDir: true,
    tsconfigOverride: {
      exclude: [
        "src/_mock/*",
        "src/components/_mock/*",
      ]
    }
  }),
  // ...bundleCss(),
  // css(),
  postcss({
    extract: true,
    minimize: true,
    plugins: [autoprefixer()],
    writeDefinitions: true,
    module: true,
    extensions: [".css"],
  }),
  // cssBundle(),
  image(),
  copy({
    targets: [
      {
        src: "src/components/tailwind.css",
        dest: "dist/components",
      },
      {
        src: "src/index.css",
        dest: "dist/",
      },
    ],
  }),
  // copy()
  terser(),
];
const subfolderPlugins = (folderName, subFolder, copyCSS = false) => [
  ...plugins,
  // postcss({
  //   include:  subFolder ? `src/${subFolder}/${folderName}/style.css` : `src/${folderName}/style.css`,
  //   extract: resolve(subFolder ? `dist/${subFolder}/${folderName}/style.css` : `dist/${folderName}/style.css`,)
  // }),
  ...(copyCSS
    ? [
        copy({
          targets: [
            {
              src: subFolder ? `src/${subFolder}/${folderName}/style.css` : `src/${folderName}/style.css`,
              dest: subFolder ? `dist/${subFolder}/${folderName}/` : `dist/${folderName}/`,
            },
          ],
        }),
      ]
    : []),
  generatePackageJson({
    baseContents: {
      name: subFolder ? `${packageJson.name}/${subFolder}/${folderName}` : `${packageJson.name}/${folderName}`,
      private: true,
      main: "../cjs/index.js",
      module: "./index.js",
      types: "./index.d.ts",
    },
  }),
];
const folderBuilds = (subFolder = "") =>
  getFolders(`./src${subFolder ? `/${subFolder}` : ""}`).map((folder) => {
    if (fs.existsSync(subFolder ? `src/${subFolder}/${folder}/style.css` : `src/${folder}/style.css`)) {
      return {
        input: subFolder ? `src/${subFolder}/${folder}/index.ts` : `src/${folder}/index.ts`,
        output: {
          file: subFolder ? `dist/${subFolder}/${folder}/index.js` : `dist/${folder}/index.js`,
          sourcemap: true,
          exports: "named",
          format: "esm",
        },
        plugins: subfolderPlugins(folder, subFolder, true),
        external: ["react", "react-dom", /\.css$/u],
      };
    }
    return {
      input: subFolder ? `src/${subFolder}/${folder}/index.ts` : `src/${folder}/index.ts`,
      output: {
        file: subFolder ? `dist/${subFolder}/${folder}/index.js` : `dist/${folder}/index.js`,
        sourcemap: true,
        exports: "named",
        format: "esm",
      },
      plugins: subfolderPlugins(folder, subFolder, false),
      external: ["react", "react-dom", /\.css$/u],
    };
  });

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins,
    external: ["react", "react-dom", /\.css$/u],
  },
  ...folderBuilds(""),
  ...folderBuilds("components"),
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      ...plugins,
    ],
    external: ["react", "react-dom", /\.css$/u],
  },
];
