const { createEslintConfig } = require("@jsenv/eslint-config")
const jsenvConfig = require("./jsenv.config.js")

const config = createEslintConfig({
  ...jsenvConfig,
  importResolutionMethod: "import-map",
  jsx: true,
  react: true,
})

module.exports = config
