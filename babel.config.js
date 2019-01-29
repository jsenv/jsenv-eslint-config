const syntaxDynamicImport = require("@babel/plugin-syntax-dynamic-import")
const syntaxImportMeta = require("@babel/plugin-syntax-import-meta")

module.exports = {
  plugins: [syntaxDynamicImport, syntaxImportMeta],
}
