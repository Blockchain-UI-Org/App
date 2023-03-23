const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const packageJson = require("./package.json");

const webpackCommonConfig = {
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({})],
    extensions: [".tsx", ".ts", ".js"],
  },
};

/**
 * Base directory configuration..
 */
const baseConfig = {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "index.js",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new GeneratePackageJsonPlugin({
      "name": packageJson.name,
      "version": packageJson.version,
      "main": "./index.js",
      "engines": {
        "node": ">= 14"
      }
    })
  ],
  ...webpackCommonConfig,
};

/**
 * Component directory configuration..
 */
const componentsDir = "./src/components";
const components = fs
  .readdirSync(componentsDir)
  .filter((item) => fs.statSync(path.join(componentsDir, item)).isDirectory());

// Create an entry point for each component folder
const componentConfigReducer = components.reduce((acc, component) => {
  acc[component] = `./src/components/${component}/index.ts`;
  return acc;
}, {});

// Configuration for component folder.. Adding common config for loaders..
const componentConfig = {
  entry: componentConfigReducer,
  output: {
    filename: "[name]/index.js",
    libraryTarget: "umd",
    library: ["blockchain-ui", "components", "[name]"],
    path: path.resolve(__dirname, "dist/components"),
  },
  ...webpackCommonConfig,
};

const config = merge(componentConfig);

module.exports = [baseConfig, config];

// const webpackComponentsConfig = {
//   entry: {
//     component1: "./src/components/component1/index.js",
//     component2: "./src/components/component2/index.js",
//     component3: "./src/components/component3/index.js",
//   },
// };
// module.exports = {
//   entry: "./src/components/**/*.ts",
//   mode: "production",
//   output: {
//     path: resolve(__dirname, "dist/components"),
//     filename: "[name]/index.js",
//     libraryTarget: "umd",
//     library: ["myLibrary", "components", "[name]"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(tsx|ts)?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.svg$/,
//         loader: "svg-inline-loader",
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//     ],
//   },
//   resolve: {
//     plugins: [new TsconfigPathsPlugin({})],
//     extensions: [".tsx", ".ts", ".js"],
//   },
// };

// const path = require("path");

// module.exports = {
//   entry: "./src/components/**/*.ts",
//   mode: "production",
//   output: {
//     path: resolve(__dirname, "dist/components"),
//     filename: "[name]/index.js",
//     libraryTarget: "umd",
//     library: ["myLibrary", "components", "[name]"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(tsx|ts)?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
// };
