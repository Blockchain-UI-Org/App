module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        bugfixes: true,
        modules: false,
        targets: {
          node: "current",
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "blockchain-ui": "./src",
        },
      },
    ],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    ["babel-plugin-styled-components"],
  ],
  ignore: [/@babel[\\|/]runtime/, /(\.test|\.spec|\.stories)\.(js|ts|tsx)$/], // Fix a Windows issue.
};
