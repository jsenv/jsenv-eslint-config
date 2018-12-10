import {
  defaultRule,
  noUnresolved,
  named,
  namespace,
  noAbsolutePath,
  noDynamicRequire,
  exportRule,
  noNamedAsDefault,
  first,
  noDuplicate,
  newLineAfterImport,
  maxDependency,
} from "./rules.js"

export const enabledArray = [
  defaultRule,
  noUnresolved,
  named,
  namespace,
  noAbsolutePath,
  noDynamicRequire,
  exportRule,
  noNamedAsDefault,
  first,
  noDuplicate,
  newLineAfterImport,
  maxDependency,
]
