const { generateCommonJsBundleForNode } = require("@jsenv/bundling")
const { generateImportMapForProjectPackage } = require("@jsenv/node-module-import-map")
const { projectPath } = require("../../jsenv.config.js")

// this is to avoid generating importMap for devDependencies
const importMapRelativePath = "/dist/importMap.json"

generateImportMapForProjectPackage({
  projectPath,
  includeDevDependencies: false,
  importMapFileRelativePath: importMapRelativePath,
  importMapFile: true,
}).then(() => {
  return generateCommonJsBundleForNode({
    projectPath,
    importMapRelativePath,
  })
})
