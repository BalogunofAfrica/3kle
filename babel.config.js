function getAliasesFromTsConfig() {
  const tsConfig = require("./tsconfig.json");
  const paths = tsConfig.compilerOptions.paths;
  let alias = {};
  Object.keys(paths).forEach((key) => {
    alias[key.replace(/\/\*$/, "")] = `./${paths[key][0].replace(/\/\*$/, "")}`;
  });

  return alias;
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".ts",
            ".tsx",
            ".json",
            ".svg",
          ],
          alias: getAliasesFromTsConfig(),
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
