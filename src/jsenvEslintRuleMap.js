// https://eslint.org/docs/rules/

export const jsenvEslintRuleMap = {
  "accessor-pairs": {},
  "array-bracket-spacing": {
    options: ["never"],
  },
  "array-callback-return": {},
  "arrow-parens": {
    options: ["as-needed"],
  },
  "arrow-spacing": {
    options: [
      {
        before: true,
        after: true,
      },
    ],
  },
  "block-scoped-var": {},
  "brace-style": {
    options: ["stroustrup"],
  },
  "camelcase": {
    options: [
      {
        properties: "always",
      },
    ],
  },
  "comma-dangle": {
    options: [
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline",
      },
    ],
  },
  "comma-spacing": {
    options: [
      {
        before: false,
        after: true,
      },
    ],
  },
  "comma-style": {
    options: ["last"],
  },
  "computed-property-spacing": {
    options: ["never"],
  },
  "consistent-return": {},
  "constructor-super": {},
  "curly": {},
  "default-case": {},
  "dot-location": {
    options: ["property"],
  },
  "dot-notation": {},
  "eol-last": {
    disabled: true,
  },
  "eqeqeq": {},
  "generator-star-spacing": {
    options: ["both"],
  },
  "getter-return": {},
  "grouped-accessor-pairs": {},
  "guard-for-in": {},
  "handle-callback-err": {
    severity: "warn",
  },
  "indent": {
    /**
     * "tab" is theorically a better option so that people can choose identation width.
     * Because it allow them to decide how much space a tab char takes (2, 4, 100) in their environment
     * But it comes with several issue:
     * - By default github will render a tab with 8 spaces
     * (can be fixed thank to an .editorconfig at the root of the github project (see http://stackoverflow.com/a/33831598)
     * - A user cannot globally defined how much space a tab should take
     * In a perfect world it would be an operating system setting that browser
     * would follow.
     *
     * In practice spaces cause less troubles.
     */
    options: [2, { SwitchCase: 1 }],
  },
  "jsx-quotes": {},
  "key-spacing": {
    options: [
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
  },
  "keyword-spacing": {},
  "linebreak-style": {
    options: ["unix"],
    // disabled otherwise fails when eslint is runned on windows
    // after a git clone
    disabled: true,
  },
  "max-len": {
    options: [
      120,
      4,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignorePattern: "^\\s*var\\s.+=\\s.+\\/.*?\\/;$",
      },
    ],
    severity: "warn",
  },
  "max-nested-callbacks": {
    options: [4],
    severity: "warn",
  },
  "new-cap": {
    options: [
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
  },
  "new-parens": {},
  "no-alert": {},
  "no-array-constructor": {},
  "no-caller": {},
  "no-case-declarations": {},
  "no-class-assign": {},
  "no-cond-assign": {},
  "no-const-assign": {},
  "no-constant-condition": {},
  "no-constructor-return": {},
  "no-control-regex": {},
  "no-debugger": {},
  "no-delete-var": {},
  "no-div-regex": {},
  "no-dupe-args": {},
  "no-duplicate-case": {},
  "no-dupe-class-members": {},
  "no-dupe-else-if": {},
  "no-dupe-keys": {},
  "no-else-return": {},
  "no-empty-character-class": {},
  "no-empty-pattern": {},
  "no-eq-null": {},
  "no-extend-native": {},
  "no-ex-assign": {},
  "no-extra-bind": {},
  "no-extra-boolean-cast": {},
  "no-extra-label": {},
  "no-extra-semi": {
    disabled: true,
  },
  "no-eval": {
    // Because every one knows eval is a bad idea
    // so when it's used it's always for a good reason
    // disabled: true
    // but in fact it's better to disabled the rule locally using
    // eslint-disable-next-line no-eval
    // in that case
  },
  "no-fallthrough": {},
  "no-floating-decimal": {},
  "no-func-assign": {},
  "no-inner-declarations": {},
  "no-invalid-regexp": {},
  "no-implicit-coercion": {},
  "no-implicit-globals": {},
  "no-implied-eval": {},
  "no-irregular-whitespace": {},
  "no-iterator": {},
  "no-label-var": {},
  "no-labels": {},
  "no-lone-blocks": {},
  "no-lonely-if": {},
  "no-loop-func": {},
  "no-magic-numbers": {
    disabled: true,
  },
  "no-mixed-requires": {
    options: [
      {
        grouping: true,
        allowCall: true,
      },
    ],
  },
  "no-mixed-spaces-and-tabs": {},
  "no-multi-spaces": {},
  "no-multi-str": {},
  "no-multiple-empty-lines": {
    options: [
      {
        max: 1,
      },
    ],
    disabled: true,
  },
  "no-native-reassign": {},
  "no-negated-condition": {},
  "no-negated-in-lhs": {
    // disabled because deprecated in favor of no-unsafe-negation
    // https://eslint.org/docs/rules/no-negated-in-lhs
    disabled: true,
  },
  "no-nested-ternary": {},
  "no-new": {},
  "no-new-func": {},
  "no-new-require": {},
  "no-new-object": {},
  "no-new-symbol": {},
  "no-new-wrappers": {},
  "no-obj-calls": {},
  "no-octal": {},
  "no-octal-escape": {},
  "no-path-concat": {},
  "no-proto": {},
  "no-redeclare": {},
  "no-regex-spaces": {},
  "no-restricted-imports": {
    options: ["domain", "freelist", "smalloc", "sys", "colors"],
  },
  "no-restricted-modules": {
    options: ["domain", "freelist", "smalloc", "sys", "colors"],
  },
  "no-restricted-syntax": {
    options: ["WithStatement"],
  },
  "no-return-assign": {
    options: ["always"],
  },
  "no-setter-return": {},
  "no-script-url": {},
  "no-self-assign": {},
  "no-self-compare": {},
  "no-sequences": {},
  "no-shadow-restricted-names": {},
  "no-spaced-func": {},
  "no-sparse-arrays": {},
  "no-this-before-super": {},
  "no-throw-literal": {},
  "no-trailing-spaces": {},
  "no-undef": {
    options: [
      {
        typeof: true,
      },
    ],
  },
  "no-undef-init": {},
  "no-undefined": {
    disabled: true,
  },
  "no-unexpected-multiline": {},
  "no-unmodified-loop-condition": {},
  "no-unneeded-ternary": {},
  "no-unreachable": {},
  "no-unused-expressions": {},
  "no-unused-labels": {},
  "no-unused-vars": {},
  "no-use-before-define": {
    options: ["nofunc"],
    // this rule is bad, too much false positive, annoying
    disabled: true,
  },
  "no-useless-call": {},
  "no-useless-concat": {},
  "no-useless-constructor": {},
  "no-void": {},
  "no-warning-comments": {
    disabled: true,
  },
  "no-whitespace-before-property": {},
  "no-with": {},
  "object-curly-spacing": {
    options: ["always"],
  },
  "object-shorthand": {
    options: ["always"],
    severity: "warn",
  },
  "one-var": {
    options: ["never"],
  },
  "one-var-declaration-per-line": {},
  "operator-assignment": {
    options: ["always"],
  },
  "operator-linebreak": {
    options: [
      "after",
      {
        overrides: { "?": "ignore", ":": "ignore" },
      },
    ],
  },
  "padded-blocks": {
    options: ["never"],
  },
  "prefer-const": {
    options: [{ destructuring: "all", ignoreReadBeforeAssign: true }],
  },
  "prefer-exponentiation-operator": {
    // Math.pow is cool, why being so strict ?
    disabled: true,
  },
  "prefer-rest-params": {
    severity: "warn",
  },
  "prefer-spread": {
    severity: "warn",
  },
  "prefer-template": {
    severity: "warn",
  },
  "quote": {
    options: [
      "double",
      // double because closer to .json, this it increase compatibility between .js and .json
      // also because ' are often used in english and '' would lead to 'I\'m' VS "I'm"
    ],
    // disabled because it becomes painfull when switching between "" and `` (template literals)
    disabled: true,
  },
  "quote-props": {
    options: [
      "as-needed",
      {
        keywords: false,
        numbers: true,
        // unnecessary: false so that when you fall into edge cases
        // you can use the quoting style you want
        unnecessary: false,
      },
    ],
  },
  "semi": {
    options: [
      "never",
      // code is more readable without semicolon and eslint will help
      // you for the only exotic use case where semi colon are required
    ],
  },
  "semi-spacing": {
    options: [
      {
        before: false,
        after: true,
      },
    ],
  },
  "space-before-blocks": {
    options: ["always"],
  },
  "space-before-function-paren": {
    options: ["never"],
  },
  "space-in-parens": {
    options: ["never"],
  },
  "space-infix-ops": {},
  "space-unary-ops": {},
  "spaced-comment": {
    options: [
      "always",
      {
        markers: ["!"],
      },
    ],
  },
  "template-curly-spacing": {},
  "use-isnan": {},
  "valid-jsdoc": {
    options: [
      {
        requireReturn: false,
        prefer: {
          returns: "return",
        },
      },
    ],
  },
  "valid-typeof": {},
  "wrap-iife": {
    options: ["inside"],
  },
  "yield-star-spacing": {
    options: ["both"],
  },
  "yoda": {},
}
