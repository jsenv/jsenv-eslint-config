export const importPluginRuleMap = {
  "import/default": {},
  "import/no-unresolved": {
    options: [
      {
        commonjs: true,
        amd: false,
        caseSensitive: false,
      },
    ],
  },
  "import/named": {},
  "import/namespace": {
    options: [
      {
        allowComputed: true,
      },
    ],
  },
  "import/no-absolute-path": {
    disabled: true,
  },
  "import/no-dynamic-require": {},
  "import/export": {},
  "import/no-named-as-default": {
    severity: "warn",
  },
  "import/first": {
    severity: "warn",
  },
  "import/no-duplicates": {
    severity: "warn",
  },
  "import/newline-after-import": {
    severity: "warn",
  },
  "import/max-dependencies": {
    options: [
      {
        max: 10,
      },
    ],
    severity: "warn",
  },
  "import/no-anonymous-default-export": {
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
    disabled: true,
  },
}
