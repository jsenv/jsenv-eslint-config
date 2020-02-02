'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var module$1 = require('module');
var url$1 = require('url');
var fs = require('fs');
require('crypto');
require('path');
var util = require('util');

/* global require, __filename */
const nodeRequire = require;
const filenameContainsBackSlashes = __filename.indexOf("\\") > -1;
const url = filenameContainsBackSlashes ? `file:///${__filename.replace(/\\/g, "/")}` : `file://${__filename}`;

const ensureUrlTrailingSlash = url => {
  return url.endsWith("/") ? url : `${url}/`;
};

const isFileSystemPath = value => {
  if (typeof value !== "string") {
    throw new TypeError(`isFileSystemPath first arg must be a string, got ${value}`);
  }

  if (value[0] === "/") return true;
  return startsWithWindowsDriveLetter(value);
};

const startsWithWindowsDriveLetter = string => {
  const firstChar = string[0];
  if (!/[a-zA-Z]/.test(firstChar)) return false;
  const secondChar = string[1];
  if (secondChar !== ":") return false;
  return true;
};

const fileSystemPathToUrl = value => {
  if (!isFileSystemPath(value)) {
    throw new Error(`received an invalid value for fileSystemPath: ${value}`);
  }

  return String(url$1.pathToFileURL(value));
};

const assertAndNormalizeDirectoryUrl = value => {
  let urlString;

  if (value instanceof URL) {
    urlString = value.href;
  } else if (typeof value === "string") {
    if (isFileSystemPath(value)) {
      urlString = fileSystemPathToUrl(value);
    } else {
      try {
        urlString = String(new URL(value));
      } catch (e) {
        throw new TypeError(`directoryUrl must be a valid url, received ${value}`);
      }
    }
  } else {
    throw new TypeError(`directoryUrl must be a string or an url, received ${value}`);
  }

  if (!urlString.startsWith("file://")) {
    throw new Error(`directoryUrl must starts with file://, received ${value}`);
  }

  return ensureUrlTrailingSlash(urlString);
};

const urlToFileSystemPath = fileUrl => {
  if (fileUrl[fileUrl.length - 1] === "/") {
    // remove trailing / so that nodejs path becomes predictable otherwise it logs
    // the trailing slash on linux but does not on windows
    fileUrl = fileUrl.slice(0, -1);
  }

  const fileSystemPath = url$1.fileURLToPath(fileUrl);
  return fileSystemPath;
};

const isWindows = process.platform === "win32";

const resolveUrl = (specifier, baseUrl) => {
  if (typeof baseUrl === "undefined") {
    throw new TypeError(`baseUrl missing to resolve ${specifier}`);
  }

  return String(new URL(specifier, baseUrl));
};

const isWindows$1 = process.platform === "win32";
const baseUrlFallback = fileSystemPathToUrl(process.cwd());

const isWindows$2 = process.platform === "win32";

const readFilePromisified = util.promisify(fs.readFile);

const isWindows$3 = process.platform === "win32";

/* eslint-disable import/max-dependencies */
const isLinux = process.platform === "linux"; // linux does not support recursive option

// see https://github.com/prettier/eslint-config-prettier/blob/master/index.js
const eslintRulesHandledByPrettier = ["arrow-parens", "arrow-spacing", "brace-style", "comma-dangle", "comma-style", "computed-property-spacing", "curly", "dot-location", "eol-last", "generator-star-spacing", "indent", "jsx-quotes", "key-spacing", "keyword-spacing", "max-len", "no-extra-semi", "no-floating-decimal", "no-mixed-spaces-and-tabs", "no-multi-spaces", "no-multi-str", "no-multiple-empty-lines", "no-trailing-spaces", "no-unexpected-multiline", "no-whitespace-before-property", "object-curly-spacing", "one-var-declaration-per-line", "operator-linebreak", "padded-blocks", "quote", "quote-props", "semi", "semi-spacing", "space-before-blocks", "space-before-function-paren", "space-in-parens", "space-infix-ops", "template-curly-spacing", "wrap-iife", "yield-star-spacing"];

// https://eslint.org/docs/rules/
const jsenvEslintRuleMap = {
  "accessor-pairs": {},
  "array-bracket-spacing": {
    options: ["never"]
  },
  "array-callback-return": {},
  "arrow-parens": {
    options: ["as-needed"]
  },
  "arrow-spacing": {
    options: [{
      before: true,
      after: true
    }]
  },
  "block-scoped-var": {},
  "brace-style": {
    options: ["stroustrup"]
  },
  "camelcase": {
    options: [{
      properties: "always"
    }]
  },
  "comma-dangle": {
    options: [{
      arrays: "only-multiline",
      objects: "only-multiline",
      imports: "only-multiline",
      exports: "only-multiline",
      functions: "only-multiline"
    }]
  },
  "comma-spacing": {
    options: [{
      before: false,
      after: true
    }]
  },
  "comma-style": {
    options: ["last"]
  },
  "computed-property-spacing": {
    options: ["never"]
  },
  "consistent-return": {},
  "constructor-super": {},
  "curly": {},
  "default-case": {},
  "dot-location": {
    options: ["property"]
  },
  "dot-notation": {},
  "eol-last": {
    disabled: true
  },
  "eqeqeq": {},
  "generator-star-spacing": {
    options: ["both"]
  },
  "getter-return": {},
  "grouped-accessor-pairs": {},
  "guard-for-in": {},
  "handle-callback-err": {
    severity: "warn"
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
    options: [2, {
      SwitchCase: 1
    }]
  },
  "jsx-quotes": {},
  "key-spacing": {
    options: [{
      beforeColon: false,
      afterColon: true
    }]
  },
  "keyword-spacing": {},
  "linebreak-style": {
    options: ["unix"],
    // disabled otherwise fails when eslint is runned on windows
    // after a git clone
    disabled: true
  },
  "max-len": {
    options: [120, 4, {
      ignoreComments: true,
      ignoreUrls: true,
      ignorePattern: "^\\s*var\\s.+=\\s.+\\/.*?\\/;$"
    }],
    severity: "warn"
  },
  "max-nested-callbacks": {
    options: [4],
    severity: "warn"
  },
  "new-cap": {
    options: [{
      newIsCap: true,
      capIsNew: true
    }]
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
    disabled: true
  },
  "no-eval": {// Because every one knows eval is a bad idea
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
    disabled: true
  },
  "no-mixed-requires": {
    options: [{
      grouping: true,
      allowCall: true
    }]
  },
  "no-mixed-spaces-and-tabs": {},
  "no-multi-spaces": {},
  "no-multi-str": {},
  "no-multiple-empty-lines": {
    options: [{
      max: 1
    }],
    disabled: true
  },
  "no-native-reassign": {},
  "no-negated-condition": {},
  "no-negated-in-lhs": {
    // disabled because deprecated in favor of no-unsafe-negation
    // https://eslint.org/docs/rules/no-negated-in-lhs
    disabled: true
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
    options: ["domain", "freelist", "smalloc", "sys", "colors"]
  },
  "no-restricted-modules": {
    options: ["domain", "freelist", "smalloc", "sys", "colors"]
  },
  "no-restricted-syntax": {
    options: ["WithStatement"]
  },
  "no-return-assign": {
    options: ["always"]
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
    options: [{
      typeof: true
    }]
  },
  "no-undef-init": {},
  "no-undefined": {
    disabled: true
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
    disabled: true
  },
  "no-useless-call": {},
  "no-useless-concat": {},
  "no-useless-constructor": {},
  "no-void": {},
  "no-warning-comments": {
    disabled: true
  },
  "no-whitespace-before-property": {},
  "no-with": {},
  "object-curly-spacing": {
    options: ["always"]
  },
  "object-shorthand": {
    options: ["always"],
    severity: "warn"
  },
  "one-var": {
    options: ["never"]
  },
  "one-var-declaration-per-line": {},
  "operator-assignment": {
    options: ["always"]
  },
  "operator-linebreak": {
    options: ["after", {
      overrides: {
        "?": "ignore",
        ":": "ignore"
      }
    }]
  },
  "padded-blocks": {
    options: ["never"]
  },
  "prefer-const": {
    options: [{
      destructuring: "all",
      ignoreReadBeforeAssign: true
    }]
  },
  "prefer-exponentiation-operator": {
    // Math.pow is cool, why being so strict ?
    disabled: true
  },
  "prefer-rest-params": {
    severity: "warn"
  },
  "prefer-spread": {
    severity: "warn"
  },
  "prefer-template": {
    severity: "warn"
  },
  "quote": {
    options: ["double" // double because closer to .json, this it increase compatibility between .js and .json
    // also because ' are often used in english and '' would lead to 'I\'m' VS "I'm"
    ],
    // disabled because it becomes painfull when switching between "" and `` (template literals)
    disabled: true
  },
  "quote-props": {
    options: ["as-needed", {
      keywords: false,
      numbers: true,
      // unnecessary: false so that when you fall into edge cases
      // you can use the quoting style you want
      unnecessary: false
    }]
  },
  "semi": {
    options: ["never" // code is more readable without semicolon and eslint will help
    // you for the only exotic use case where semi colon are required
    ]
  },
  "semi-spacing": {
    options: [{
      before: false,
      after: true
    }]
  },
  "space-before-blocks": {
    options: ["always"]
  },
  "space-before-function-paren": {
    options: ["never"]
  },
  "space-in-parens": {
    options: ["never"]
  },
  "space-infix-ops": {},
  "space-unary-ops": {},
  "spaced-comment": {
    options: ["always", {
      markers: ["!"]
    }]
  },
  "template-curly-spacing": {},
  "use-isnan": {},
  "valid-jsdoc": {
    options: [{
      requireReturn: false,
      prefer: {
        returns: "return"
      }
    }]
  },
  "valid-typeof": {},
  "wrap-iife": {
    options: ["inside"]
  },
  "yield-star-spacing": {
    options: ["both"]
  },
  "yoda": {}
};

const jsenvEslintRuleMapForImport = {
  "import/default": {},
  "import/no-unresolved": {
    options: [{
      commonjs: true,
      amd: false,
      caseSensitive: false
    }]
  },
  "import/named": {},
  "import/namespace": {
    options: [{
      allowComputed: true
    }]
  },
  "import/no-absolute-path": {
    disabled: true
  },
  "import/no-dynamic-require": {},
  "import/export": {},
  "import/no-named-as-default": {
    severity: "warn"
  },
  "import/first": {
    severity: "warn"
  },
  "import/no-duplicates": {
    severity: "warn"
  },
  "import/newline-after-import": {
    severity: "warn"
  },
  "import/max-dependencies": {
    options: [{
      max: 10
    }],
    severity: "warn"
  },
  "import/no-anonymous-default-export": {
    options: [{
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: true,
      allowObject: true
    }],
    disabled: true
  }
};

const jsenvEslintRuleMapForReact = {
  "react/display-name": {},
  "react/jsx-key": {},
  "react/jsx-no-comment-textnodes": {},
  "react/jsx-no-duplicate-props": {},
  "react/jsx-no-target-blank": {
    disabled: true
  },
  "react/jsx-no-undef": {},
  "react/jsx-uses-react": {},
  "react/jsx-uses-vars": {},
  "react/no-children-prop": {},
  "react/no-danger-with-children": {},
  "react/no-deprecated": {},
  "react/no-direct-mutation-state": {},
  "react/no-find-dom-node": {},
  "react/no-is-mounted": {},
  "react/no-render-return-value": {},
  "react/no-string-refs": {},
  "react/no-unescaped-entities": {},
  "react/no-unknown-property": {},
  "react/no-unsafe": {
    disabled: true
  },
  "react/prop-types": {
    disabled: true
  },
  "react/react-in-jsx-scope": {},
  "react/require-render-return": {
    disabled: true
  }
};

let importResolverFilePathFallback;
let jsenvEslintConfigDirectoryUrl; // we are being executed from dist/commonjs/main.cjs (certainly node < 13)

if (typeof require === "function") {
  importResolverFilePathFallback = require.resolve("@jsenv/importmap-eslint-resolver");
  jsenvEslintConfigDirectoryUrl = resolveUrl( // remove dist/commonjs/
  "../../", url);
} else {
  importResolverFilePathFallback = module$1.createRequire(url).resolve("@jsenv/importmap-eslint-resolver");
  jsenvEslintConfigDirectoryUrl = resolveUrl( // remove src/
  "../", url);
}

const babelConfigFileUrl = resolveUrl("babel.config.cjs", jsenvEslintConfigDirectoryUrl);
const babelConfigFilePath = urlToFileSystemPath(babelConfigFileUrl);
const createEslintConfig = ({
  projectDirectoryUrl,
  importResolutionMethod,
  importMapFileRelativeUrl,
  importResolverFilePath = importResolverFilePathFallback,
  importResolverOptions = {},
  browser = true,
  node = true,
  prettier = true,
  react = false,
  reactPluginSettings = {},
  jsx = react,
  eslintRuleMap = jsenvEslintRuleMap,
  eslintRuleMapForImport = jsenvEslintRuleMapForImport,
  eslintRuleMapForReact = jsenvEslintRuleMapForReact
}) => {
  // it depends, what if this file is executed from its current location ?
  const parserOptions = {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      spread: true,
      restParams: true,
      defaultParams: true,
      destructuring: true,
      objectLiteralShorthandMethods: true
    },
    requireConfigFile: false,
    // https://babeljs.io/docs/en/options#parseropts
    allowAwaitOutsideFunction: true,
    babelOptions: {
      configFile: babelConfigFilePath
    }
  };
  const rules = ruleMapToStandardRuleMap(eslintRuleMap);
  const settings = {
    extensions: [".js"]
  };
  const plugins = [];

  if (importResolutionMethod) {
    plugins.push("import");
    Object.assign(rules, ruleMapToStandardRuleMap(eslintRuleMapForImport));

    if (importResolutionMethod === "import-map") {
      projectDirectoryUrl = assertAndNormalizeDirectoryUrl(projectDirectoryUrl);
      Object.assign(settings, {
        "import/resolver": {
          [importResolverFilePath]: {
            projectDirectoryUrl,
            importMapFileRelativeUrl,
            insideProjectAssertion: true,
            browser,
            node,
            ...importResolverOptions
          }
        }
      });
    } else if (importResolutionMethod === "node") {
      Object.assign(settings, {
        "import/resolver": {
          node: {}
        }
      });
    } else {
      throw new Error(`unexpected importResolutionMethod, got ${importResolutionMethod}`);
    }
  }

  if (react) {
    plugins.push("react");
    settings.react = {
      version: "detect",
      ...reactPluginSettings
    };
    Object.assign(rules, ruleMapToStandardRuleMap(eslintRuleMapForReact));
  }

  if (jsx) {
    parserOptions.ecmaFeatures.jsx = true;
    settings.extensions.push(".jsx");
  }

  if (prettier) {
    eslintRulesHandledByPrettier.forEach(ruleName => {
      if (!ruleName in rules) {
        throw new Error(`unknow rule name ${ruleName}`);
      }

      rules[ruleName][0] = "off";
    });
  }

  return {
    parser: "babel-eslint",
    parserOptions,
    env: {
      browser,
      node,
      es6: true
    },
    // some globals are misleading and prevent eslint to catch bugs.
    // it's better to explicitely write window.close and have eslint tell you
    // if you got an undefined variable named `close`
    // https://github.com/eslint/eslint/blob/00d2c5be9a89efd90135c4368a9589f33df3f7ba/conf/environments.js#L1
    // https://github.com/sindresorhus/globals/blob/a1d32c7f76e4d1ac3c8883acf075db11bd4d44f9/globals.json#L1
    globals: {
      alert: "off",
      atob: "off",
      blur: "off",
      btoa: "off",
      caches: "off",
      close: "off",
      closed: "off",
      crypto: "off",
      defaultstatus: "off",
      defaultStatus: "off",
      escape: "off",
      event: "off",
      external: "off",
      focus: "off",
      find: "off",
      frames: "off",
      history: "off",
      length: "off",
      location: "off",
      menubar: "off",
      name: "off",
      navigator: "off",
      open: "off",
      origin: "off",
      print: "off",
      screen: "off",
      scroll: "off",
      self: "off",
      status: "off",
      stop: "off",
      top: "off",
      unescape: "off",
      valueOf: "off"
    },
    settings,
    rules,
    plugins
  };
};

const ruleMapToStandardRuleMap = ruleMap => {
  const standardRuleMap = {};
  Object.keys(ruleMap).forEach(name => {
    const rule = ruleMap[name];
    const {
      severity = "error",
      disabled = false,
      options = [],
      ...rest
    } = rule;

    if (severity !== "error" && severity !== "warn") {
      throw new Error(`rule severity must be "error" or "warn", got ${severity} for ${name}`);
    }

    const extraProperties = Object.keys(rest);

    if (extraProperties.length > 0) {
      throw new Error(`unexpected rule properties: ${extraProperties} on ${name}`);
    }

    standardRuleMap[name] = [disabled ? "off" : severity, ...options];
  });
  return standardRuleMap;
};

exports.createEslintConfig = createEslintConfig;
exports.jsenvEslintRuleMap = jsenvEslintRuleMap;
exports.jsenvEslintRuleMapForImport = jsenvEslintRuleMapForImport;
exports.jsenvEslintRuleMapForReact = jsenvEslintRuleMapForReact;
//# sourceMappingURL=main.cjs.map
