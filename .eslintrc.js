const { createConfig } = require("@jsenv/eslint-config")

const config = createConfig({
  projectDirectoryPath: __dirname,
  importResolutionMethod: "import-map",
  jsxEnabled: true,
  reactPluginEnabled: true,
})

module.exports = config
