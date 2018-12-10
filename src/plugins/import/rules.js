export const defaultRule = {
  name: "import/default",
}

export const noUnresolved = {
  name: "import/no-unresolved",
  options: [
    {
      commonjs: true,
      amd: false,
      caseSensitive: false,
    },
  ],
}

export const named = {
  name: "import/named",
}

export const namespace = {
  name: "import/namespace",
  options: [
    {
      allowComputed: true,
    },
  ],
}

export const noAbsolutePath = {
  name: "import/no-absolute-path",
}

export const noDynamicRequire = {
  name: "import/no-dynamic-require",
}

export const exportRule = {
  name: "import/export",
}

export const noNamedAsDefault = {
  name: "import/no-named-as-default",
  severity: "warn",
}

export const first = {
  name: "import/first",
  severity: "warn",
}

export const noDuplicate = {
  name: "import/no-duplicates",
  severity: "warn",
}

export const newLineAfterImport = {
  name: "import/newline-after-import",
  severity: "warn",
}

export const maxDependency = {
  name: "import/max-dependencies",
  severity: "warn",
  options: [
    {
      max: 10,
    },
  ],
}

export const noAnonymousDefaultExport = {
  name: "import/no-anonymous-default-export",
  options: [
    {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: true,
      allowObject: true,
    },
  ],
}

export const rules = [
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
  noAnonymousDefaultExport,
]
