const { createEslintConfig } = require("./dist/commonjs/main.cjs")

const config = createEslintConfig({
  projectDirectoryUrl: __dirname,
  importResolutionMethod: "import-map",
  importMapFileRelativeUrl: "./import-map.importmap",
  jsx: true,
  react: true,
})

module.exports = config
