const syntaxDynamicImport = require("@babel/plugin-syntax-dynamic-import")
const syntaxImportMeta = require("@babel/plugin-syntax-import-meta")
const syntaxJSX = require("@babel/plugin-syntax-jsx")

module.exports = {
  parserOpts: {
    allowAwaitOutsideFunction: true,
  },
  plugins: [syntaxDynamicImport, syntaxImportMeta, syntaxJSX],
}