'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var importMap = {
  "imports": {
    "@babel/plugin-syntax-dynamic-import": "./node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js",
    "@babel/plugin-syntax-import-meta": "./node_modules/@babel/plugin-syntax-import-meta/lib/index.js",
    "@jsenv/eslint-import-resolver": "./node_modules/@jsenv/eslint-import-resolver/index.js",
    "@jsenv/node-module-import-map": "./node_modules/@jsenv/node-module-import-map/index.js",
    "@jsenv/prettier-check-project": "./node_modules/@jsenv/prettier-check-project/index.js",
    "@babel/plugin-syntax-jsx": "./node_modules/@babel/plugin-syntax-jsx/lib/index.js",
    "@jsenv/prettier-config": "./node_modules/@jsenv/prettier-config/index.js",
    "@jsenv/codecov-upload": "./node_modules/@jsenv/codecov-upload/index.js",
    "@jsenv/eslint-config": "./node_modules/@jsenv/eslint-config/index.js",
    "@jsenv/node-launcher": "./node_modules/@jsenv/node-launcher/index.js",
    "eslint-plugin-import": "./node_modules/eslint-plugin-import/lib/index.js",
    "@jsenv/auto-publish": "./node_modules/@jsenv/auto-publish/index.js",
    "eslint-plugin-react": "./node_modules/eslint-plugin-react/index.js",
    "@jsenv/execution": "./node_modules/@jsenv/execution/index.js",
    "@jsenv/bundling": "./node_modules/@jsenv/bundling/index.js",
    "@jsenv/testing/": "./node_modules/@jsenv/testing/",
    "@jsenv/testing": "./node_modules/@jsenv/testing/index.js",
    "babel-eslint": "./node_modules/babel-eslint/lib/index.js",
    "@babel/core": "./node_modules/@babel/core/lib/index.js",
    "prettier": "./node_modules/prettier/index.js",
    "eslint": "./node_modules/eslint/lib/api.js",
    "rimraf": "./node_modules/rimraf/rimraf.js",
    "react": "./node_modules/react/index.js"
  },
  "scopes": {
    "./node_modules/@jsenv/compile-server/node_modules/@jsenv/url-meta/node_modules/@jsenv/import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/url-meta/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/url-meta/node_modules/@jsenv/import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/url-meta/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/core/node_modules/@jsenv/url-meta/node_modules/@jsenv/import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/core/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href": "./node_modules/@jsenv/core/node_modules/@jsenv/url-meta/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/node-module-import-map/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/node-module-import-map/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/error-stack-sourcemap/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/error-stack-sourcemap/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/compile-server/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/eslint-config/node_modules/@jsenv/eslint-import-resolver/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/import-map": "./node_modules/@jsenv/eslint-config/node_modules/@jsenv/import-map/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/logger/index.js",
      "@jsenv/href": "./node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/auto-publish/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/auto-publish/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/eslint-import-resolver/node_modules/@jsenv/import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/eslint-import-resolver/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href/": "./node_modules/@jsenv/eslint-import-resolver/node_modules/@jsenv/href/",
      "@jsenv/href": "./node_modules/@jsenv/eslint-import-resolver/node_modules/@jsenv/href/index.js"
    },
    "./node_modules/@jsenv/node-module-import-map/node_modules/@jsenv/import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/node-module-import-map/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href": "./node_modules/@jsenv/node-module-import-map/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/import-map/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/import-map/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/execution/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/execution/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/bundling/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/bundling/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@babel/helper-builder-binary-assignment-operator-visitor/": {
      "@babel/helper-explode-assignable-expression": "./node_modules/@babel/helper-explode-assignable-expression/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@jsenv/testing/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/testing/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/core/node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/core/node_modules/@jsenv/operating-system-path/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/eslint-config/node_modules/eslint-plugin-react/": {
      "object.fromentries": "./node_modules/object.fromentries/index.js",
      "array-includes": "./node_modules/array-includes/index.js",
      "object.entries": "./node_modules/object.entries/index.js",
      "jsx-ast-utils": "./node_modules/jsx-ast-utils/lib/index.js",
      "object.values": "./node_modules/object.values/index.js",
      "prop-types": "./node_modules/prop-types/index.js",
      "doctrine": "./node_modules/@jsenv/eslint-config/node_modules/doctrine/lib/doctrine.js",
      "resolve": "./node_modules/resolve/index.js",
      "eslint": "./node_modules/eslint/lib/api.js",
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/@jsenv/eslint-config/node_modules/@jsenv/import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href": "./node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/compile-server/node_modules/@jsenv/url-meta/": {
      "@jsenv/import-map": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/url-meta/node_modules/@jsenv/import-map/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/url-meta/": {
      "@jsenv/import-map": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/url-meta/node_modules/@jsenv/import-map/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/babel-plugin-map/node_modules/@babel/core/": {
      "convert-source-map": "./node_modules/convert-source-map/index.js",
      "@babel/code-frame": "./node_modules/@babel/code-frame/lib/index.js",
      "@babel/generator": "./node_modules/@babel/generator/lib/index.js",
      "@babel/template": "./node_modules/@babel/template/lib/index.js",
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/helpers": "./node_modules/@babel/helpers/lib/index.js",
      "@babel/parser": "./node_modules/@babel/parser/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js",
      "source-map": "./node_modules/source-map/source-map.js",
      "resolve": "./node_modules/resolve/index.js",
      "lodash": "./node_modules/lodash/lodash.js",
      "semver": "./node_modules/semver/semver.js",
      "debug": "./node_modules/debug/src/index.js",
      "json5": "./node_modules/json5/dist/index.mjs"
    },
    "./node_modules/@jsenv/node-launcher/node_modules/@babel/helpers/": {
      "@babel/template": "./node_modules/@babel/template/lib/index.js",
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-exponentiation-operator/": {
      "@babel/helper-builder-binary-assignment-operator-visitor": "./node_modules/@babel/helper-builder-binary-assignment-operator-visitor/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/istanbul-lib-report/node_modules/supports-color/": {
      "has-flag": "./node_modules/istanbul-lib-report/node_modules/has-flag/index.js"
    },
    "./node_modules/@babel/plugin-transform-block-scoped-functions/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@jsenv/url-meta/node_modules/@jsenv/import-map/": {
      "@jsenv/href": "./node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/eslint-import-resolver-node/node_modules/debug/": {
      "ms": "./node_modules/eslint-import-resolver-node/node_modules/ms/index.js"
    },
    "./node_modules/@babel/plugin-proposal-optional-catch-binding/": {
      "@babel/plugin-syntax-optional-catch-binding": "./node_modules/@babel/plugin-syntax-optional-catch-binding/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-proposal-unicode-property-regex/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/helper-regex": "./node_modules/@babel/helper-regex/lib/index.js",
      "regexpu-core": "./node_modules/regexpu-core/rewrite-pattern.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/core/": {
      "@babel/plugin-transform-modules-systemjs": "./node_modules/@babel/plugin-transform-modules-systemjs/lib/index.js",
      "@babel/plugin-syntax-dynamic-import": "./node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js",
      "@babel/plugin-syntax-import-meta": "./node_modules/@babel/plugin-syntax-import-meta/lib/index.js",
      "babel-plugin-transform-commonjs": "./node_modules/babel-plugin-transform-commonjs/dist/index.js",
      "@babel/helper-hoist-variables": "./node_modules/@babel/helper-hoist-variables/lib/index.js",
      "@jsenv/operating-system-path": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/operating-system-path/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@jsenv/babel-plugin-map": "./node_modules/@jsenv/babel-plugin-map/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "regenerator-runtime": "./node_modules/regenerator-runtime/runtime.js",
      "@jsenv/import-map/": "./node_modules/@jsenv/import-map/",
      "@jsenv/import-map": "./node_modules/@jsenv/import-map/index.js",
      "@jsenv/url-meta": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/url-meta/index.js",
      "proper-lockfile": "./node_modules/proper-lockfile/index.js",
      "@babel/helpers": "./node_modules/@jsenv/node-launcher/node_modules/@babel/helpers/lib/index.js",
      "@dmail/helper": "./node_modules/@dmail/helper/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/logger/index.js",
      "@jsenv/href/": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/href/",
      "ansi-to-html": "./node_modules/ansi-to-html/lib/ansi_to_html.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js",
      "@jsenv/href": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/href/index.js",
      "rimraf": "./node_modules/rimraf/rimraf.js"
    },
    "./node_modules/@jsenv/testing/node_modules/@jsenv/import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/testing/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href": "./node_modules/@jsenv/testing/node_modules/@jsenv/import-map/node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/@babel/helper-member-expression-to-functions/": {
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-shorthand-properties/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/helper-explode-assignable-expression/": {
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/plugin-syntax-optional-catch-binding/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-computed-properties/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@jsenv/testing/node_modules/@jsenv/url-meta/": {
      "@jsenv/import-map": "./node_modules/@jsenv/testing/node_modules/@jsenv/import-map/index.js",
      "/": "/"
    },
    "./node_modules/object.fromentries/node_modules/es-abstract/": {
      "string.prototype.trimright": "./node_modules/string.prototype.trimright/index.js",
      "string.prototype.trimleft": "./node_modules/string.prototype.trimleft/index.js",
      "es-to-primitive": "./node_modules/es-to-primitive/index.js",
      "object-inspect": "./node_modules/object-inspect/index.js",
      "function-bind": "./node_modules/function-bind/index.js",
      "has-symbols": "./node_modules/has-symbols/index.js",
      "is-callable": "./node_modules/is-callable/index.js",
      "object-keys": "./node_modules/object-keys/index.js",
      "is-regex": "./node_modules/is-regex/index.js",
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/@jsenv/eslint-config/node_modules/doctrine/": {
      "esutils": "./node_modules/esutils/lib/utils.js"
    },
    "./node_modules/@babel/plugin-proposal-object-rest-spread/": {
      "@babel/plugin-syntax-object-rest-spread": "./node_modules/@babel/plugin-syntax-object-rest-spread/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-template-literals/": {
      "@babel/helper-annotate-as-pure": "./node_modules/@babel/helper-annotate-as-pure/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/eslint-plugin-react/node_modules/doctrine/": {
      "esutils": "./node_modules/esutils/lib/utils.js"
    },
    "./node_modules/@babel/plugin-transform-modules-systemjs/": {
      "babel-plugin-dynamic-import-node": "./node_modules/babel-plugin-dynamic-import-node/lib/index.js",
      "@babel/helper-hoist-variables": "./node_modules/@babel/helper-hoist-variables/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@jsenv/core/node_modules/@jsenv/url-meta/": {
      "@jsenv/import-map": "./node_modules/@jsenv/core/node_modules/@jsenv/url-meta/node_modules/@jsenv/import-map/index.js",
      "/": "/"
    },
    "./node_modules/@babel/plugin-syntax-object-rest-spread/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-arrow-functions/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@jsenv/core/node_modules/@babel/helpers/": {
      "@babel/template": "./node_modules/@babel/template/lib/index.js",
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/eslint-plugin-import/node_modules/debug/": {
      "ms": "./node_modules/eslint-plugin-import/node_modules/ms/index.js"
    },
    "./node_modules/@babel/helper-optimise-call-expression/": {
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/helper-split-export-declaration/": {
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-duplicate-keys/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/eslint-module-utils/node_modules/debug/": {
      "ms": "./node_modules/eslint-module-utils/node_modules/ms/index.js"
    },
    "./node_modules/@babel/plugin-transform-block-scoping/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js",
      "lodash": "./node_modules/lodash/lodash.js"
    },
    "./node_modules/@babel/plugin-transform-destructuring/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-function-name/": {
      "@babel/helper-function-name": "./node_modules/@babel/helper-function-name/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-typeof-symbol/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-unicode-regex/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/helper-regex": "./node_modules/@babel/helper-regex/lib/index.js",
      "regexpu-core": "./node_modules/regexpu-core/rewrite-pattern.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-dotall-regex/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/helper-regex": "./node_modules/@babel/helper-regex/lib/index.js",
      "regexpu-core": "./node_modules/regexpu-core/rewrite-pattern.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-object-super/": {
      "@babel/helper-replace-supers": "./node_modules/@babel/helper-replace-supers/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-sticky-regex/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/helper-regex": "./node_modules/@babel/helper-regex/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/https-proxy-agent/node_modules/debug/": {
      "ms": "./node_modules/ms/index.js"
    },
    "./node_modules/string-width/node_modules/strip-ansi/": {
      "ansi-regex": "./node_modules/ansi-regex/index.js"
    },
    "./node_modules/@babel/plugin-proposal-json-strings/": {
      "@babel/plugin-syntax-json-strings": "./node_modules/@babel/plugin-syntax-json-strings/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-syntax-dynamic-import/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-regenerator/": {
      "regenerator-transform": "./node_modules/regenerator-transform/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-new-target/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-parameters/": {
      "@babel/helper-get-function-arity": "./node_modules/@babel/helper-get-function-arity/lib/index.js",
      "@babel/helper-call-delegate": "./node_modules/@babel/helper-call-delegate/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-syntax-json-strings/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/unicode-match-property-ecmascript/": {
      "unicode-canonical-property-names-ecmascript": "./node_modules/unicode-canonical-property-names-ecmascript/index.js",
      "unicode-property-aliases-ecmascript": "./node_modules/unicode-property-aliases-ecmascript/index.js"
    },
    "./node_modules/@babel/helper-get-function-arity/": {
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/plugin-syntax-import-meta/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-literals/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/babel-plugin-dynamic-import-node/": {
      "object.assign": "./node_modules/object.assign/index.js"
    },
    "./node_modules/eslint/node_modules/eslint-scope/": {
      "estraverse": "./node_modules/estraverse/estraverse.js",
      "esrecurse": "./node_modules/esrecurse/esrecurse.js"
    },
    "./node_modules/@babel/plugin-transform-classes/": {
      "@babel/helper-optimise-call-expression": "./node_modules/@babel/helper-optimise-call-expression/lib/index.js",
      "@babel/helper-split-export-declaration": "./node_modules/@babel/helper-split-export-declaration/lib/index.js",
      "@babel/helper-annotate-as-pure": "./node_modules/@babel/helper-annotate-as-pure/lib/index.js",
      "@babel/helper-replace-supers": "./node_modules/@babel/helper-replace-supers/lib/index.js",
      "@babel/helper-function-name": "./node_modules/@babel/helper-function-name/lib/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/helper-define-map": "./node_modules/@babel/helper-define-map/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js",
      "globals": "./node_modules/globals/index.js"
    },
    "./node_modules/babel-plugin-transform-commonjs/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/table/node_modules/string-width/": {
      "is-fullwidth-code-point": "./node_modules/is-fullwidth-code-point/index.js",
      "emoji-regex": "./node_modules/emoji-regex/index.js",
      "strip-ansi": "./node_modules/strip-ansi/index.js"
    },
    "./node_modules/@babel/helper-annotate-as-pure/": {
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-for-of/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@babel/plugin-transform-spread/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/flat-cache/node_modules/rimraf/": {
      "glob": "./node_modules/glob/glob.js"
    },
    "./node_modules/@babel/helper-hoist-variables/": {
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@jsenv/eslint-import-resolver/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/eslint-import-resolver/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/import-map/": "./node_modules/@jsenv/eslint-import-resolver/node_modules/@jsenv/import-map/",
      "@jsenv/import-map": "./node_modules/@jsenv/eslint-import-resolver/node_modules/@jsenv/import-map/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/eslint-import-resolver/node_modules/@jsenv/logger/index.js"
    },
    "./node_modules/@jsenv/node-module-import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/node-module-import-map/node_modules/@jsenv/operating-system-path/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@jsenv/import-map": "./node_modules/@jsenv/node-module-import-map/node_modules/@jsenv/import-map/index.js",
      "@dmail/helper": "./node_modules/@dmail/helper/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/logger/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/prettier-check-project/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/operating-system-path/index.js",
      "@dmail/filesystem-matching": "./node_modules/@dmail/filesystem-matching/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@jsenv/url-meta": "./node_modules/@jsenv/url-meta/index.js",
      "prettier": "./node_modules/prettier/index.js"
    },
    "./node_modules/regenerate-unicode-properties/": {
      "regenerate": "./node_modules/regenerate/regenerate.js"
    },
    "./node_modules/@babel/helper-module-imports/": {
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/helper-replace-supers/": {
      "@babel/helper-member-expression-to-functions": "./node_modules/@babel/helper-member-expression-to-functions/lib/index.js",
      "@babel/helper-optimise-call-expression": "./node_modules/@babel/helper-optimise-call-expression/lib/index.js",
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@jsenv/error-stack-sourcemap/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/error-stack-sourcemap/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href/": "./node_modules/@jsenv/error-stack-sourcemap/node_modules/@jsenv/href/",
      "@jsenv/href": "./node_modules/@jsenv/error-stack-sourcemap/node_modules/@jsenv/href/index.js",
      "source-map": "./node_modules/@jsenv/error-stack-sourcemap/node_modules/source-map/source-map.js"
    },
    "./node_modules/@jsenv/operating-system-path/": {
      "@jsenv/href": "./node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/eslint/node_modules/doctrine/": {
      "esutils": "./node_modules/esutils/lib/utils.js"
    },
    "./node_modules/validate-npm-package-license/": {
      "spdx-expression-parse": "./node_modules/spdx-expression-parse/index.js",
      "spdx-correct": "./node_modules/spdx-correct/index.js"
    },
    "./node_modules/@babel/helper-call-delegate/": {
      "@babel/helper-hoist-variables": "./node_modules/@babel/helper-hoist-variables/lib/index.js",
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/helper-function-name/": {
      "@babel/helper-get-function-arity": "./node_modules/@babel/helper-get-function-arity/lib/index.js",
      "@babel/template": "./node_modules/@babel/template/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/eslint-import-resolver-node/": {
      "resolve": "./node_modules/resolve/index.js",
      "debug": "./node_modules/eslint-import-resolver-node/node_modules/debug/src/index.js"
    },
    "./node_modules/@dmail/filesystem-matching/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/operating-system-path/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@jsenv/url-meta": "./node_modules/@jsenv/url-meta/index.js"
    },
    "./node_modules/string.prototype.trimright/": {
      "define-properties": "./node_modules/define-properties/index.js",
      "function-bind": "./node_modules/function-bind/index.js"
    },
    "./node_modules/string.prototype.trimleft/": {
      "define-properties": "./node_modules/define-properties/index.js",
      "function-bind": "./node_modules/function-bind/index.js"
    },
    "./node_modules/@babel/helper-define-map/": {
      "@babel/helper-function-name": "./node_modules/@babel/helper-function-name/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js",
      "lodash": "./node_modules/lodash/lodash.js"
    },
    "./node_modules/@babel/plugin-syntax-jsx/": {
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@dmail/filesystem-watch/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/operating-system-path/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@jsenv/url-meta": "./node_modules/@jsenv/url-meta/index.js"
    },
    "./node_modules/@jsenv/babel-plugin-map/": {
      "@babel/plugin-transform-exponentiation-operator": "./node_modules/@babel/plugin-transform-exponentiation-operator/lib/index.js",
      "@babel/plugin-transform-block-scoped-functions": "./node_modules/@babel/plugin-transform-block-scoped-functions/lib/index.js",
      "@babel/plugin-proposal-optional-catch-binding": "./node_modules/@babel/plugin-proposal-optional-catch-binding/lib/index.js",
      "@babel/plugin-proposal-unicode-property-regex": "./node_modules/@babel/plugin-proposal-unicode-property-regex/lib/index.js",
      "@babel/plugin-transform-shorthand-properties": "./node_modules/@babel/plugin-transform-shorthand-properties/lib/index.js",
      "@babel/plugin-syntax-optional-catch-binding": "./node_modules/@babel/plugin-syntax-optional-catch-binding/lib/index.js",
      "@babel/plugin-transform-computed-properties": "./node_modules/@babel/plugin-transform-computed-properties/lib/index.js",
      "@babel/plugin-proposal-object-rest-spread": "./node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js",
      "@babel/plugin-transform-template-literals": "./node_modules/@babel/plugin-transform-template-literals/lib/index.js",
      "babel-plugin-transform-async-to-promises": "./node_modules/babel-plugin-transform-async-to-promises/async-to-promises.js",
      "@babel/plugin-syntax-object-rest-spread": "./node_modules/@babel/plugin-syntax-object-rest-spread/lib/index.js",
      "@babel/plugin-transform-arrow-functions": "./node_modules/@babel/plugin-transform-arrow-functions/lib/index.js",
      "@babel/plugin-transform-duplicate-keys": "./node_modules/@babel/plugin-transform-duplicate-keys/lib/index.js",
      "@babel/plugin-transform-block-scoping": "./node_modules/@babel/plugin-transform-block-scoping/lib/index.js",
      "@babel/plugin-transform-destructuring": "./node_modules/@babel/plugin-transform-destructuring/lib/index.js",
      "@babel/plugin-transform-function-name": "./node_modules/@babel/plugin-transform-function-name/lib/index.js",
      "@babel/plugin-transform-typeof-symbol": "./node_modules/@babel/plugin-transform-typeof-symbol/lib/index.js",
      "@babel/plugin-transform-unicode-regex": "./node_modules/@babel/plugin-transform-unicode-regex/lib/index.js",
      "@babel/plugin-transform-dotall-regex": "./node_modules/@babel/plugin-transform-dotall-regex/lib/index.js",
      "@babel/plugin-transform-object-super": "./node_modules/@babel/plugin-transform-object-super/lib/index.js",
      "@babel/plugin-transform-sticky-regex": "./node_modules/@babel/plugin-transform-sticky-regex/lib/index.js",
      "@babel/plugin-proposal-json-strings": "./node_modules/@babel/plugin-proposal-json-strings/lib/index.js",
      "@babel/plugin-transform-regenerator": "./node_modules/@babel/plugin-transform-regenerator/lib/index.js",
      "@babel/plugin-transform-new-target": "./node_modules/@babel/plugin-transform-new-target/lib/index.js",
      "@babel/plugin-transform-parameters": "./node_modules/@babel/plugin-transform-parameters/lib/index.js",
      "@babel/plugin-transform-literals": "./node_modules/@babel/plugin-transform-literals/lib/index.js",
      "@babel/plugin-transform-classes": "./node_modules/@babel/plugin-transform-classes/lib/index.js",
      "@babel/plugin-transform-for-of": "./node_modules/@babel/plugin-transform-for-of/lib/index.js",
      "@babel/plugin-transform-spread": "./node_modules/@babel/plugin-transform-spread/lib/index.js",
      "@babel/core": "./node_modules/@jsenv/babel-plugin-map/node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/istanbul-lib-instrument/": {
      "istanbul-lib-coverage": "./node_modules/istanbul-lib-instrument/node_modules/istanbul-lib-coverage/index.js",
      "@babel/generator": "./node_modules/@babel/generator/lib/index.js",
      "@babel/template": "./node_modules/@babel/template/lib/index.js",
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/parser": "./node_modules/@babel/parser/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js",
      "semver": "./node_modules/istanbul-lib-instrument/node_modules/semver/semver.js"
    },
    "./node_modules/@dmail/process-signals/": {
      "@dmail/helper": "./node_modules/@dmail/helper/index.js"
    },
    "./node_modules/normalize-package-data/": {
      "validate-npm-package-license": "./node_modules/validate-npm-package-license/index.js",
      "hosted-git-info": "./node_modules/hosted-git-info/index.js",
      "resolve": "./node_modules/resolve/index.js",
      "semver": "./node_modules/semver/semver.js"
    },
    "./node_modules/@jsenv/codecov-upload/": {
      "codecov": "./node_modules/codecov/index.js"
    },
    "./node_modules/@jsenv/compile-server/": {
      "@jsenv/node-module-import-map": "./node_modules/@jsenv/node-module-import-map/index.js",
      "@jsenv/operating-system-path": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/operating-system-path/index.js",
      "@dmail/filesystem-watch": "./node_modules/@dmail/filesystem-watch/index.js",
      "@jsenv/babel-plugin-map": "./node_modules/@jsenv/babel-plugin-map/index.js",
      "@dmail/process-signals": "./node_modules/@dmail/process-signals/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@jsenv/import-map/": "./node_modules/@jsenv/import-map/",
      "@jsenv/import-map": "./node_modules/@jsenv/import-map/index.js",
      "abort-controller": "./node_modules/abort-controller/dist/abort-controller.js",
      "@jsenv/bundling": "./node_modules/@jsenv/bundling/index.js",
      "@jsenv/url-meta": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/url-meta/index.js",
      "@dmail/helper": "./node_modules/@dmail/helper/index.js",
      "@dmail/server": "./node_modules/@dmail/server/index.js",
      "@dmail/uneval": "./node_modules/@dmail/uneval/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/logger/index.js",
      "@jsenv/core/": "./node_modules/@jsenv/core/",
      "@jsenv/href/": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/href/",
      "@jsenv/core": "./node_modules/@jsenv/core/index.js",
      "@jsenv/href": "./node_modules/@jsenv/compile-server/node_modules/@jsenv/href/index.js",
      "eventsource": "./node_modules/eventsource/lib/eventsource.js",
      "node-fetch": "./node_modules/node-fetch/lib/index.mjs",
      "systemjs": "./node_modules/systemjs/index.js",
      "/": "/"
    },
    "./node_modules/regenerator-transform/": {
      "private": "./node_modules/private/private.js"
    },
    "./node_modules/spdx-expression-parse/": {
      "spdx-license-ids": "./node_modules/spdx-license-ids/index.json",
      "spdx-exceptions": "./node_modules/spdx-exceptions/index.json"
    },
    "./node_modules/@jsenv/eslint-config/": {
      "@babel/plugin-syntax-dynamic-import": "./node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js",
      "@babel/plugin-syntax-import-meta": "./node_modules/@babel/plugin-syntax-import-meta/lib/index.js",
      "@jsenv/eslint-import-resolver": "./node_modules/@jsenv/eslint-config/node_modules/@jsenv/eslint-import-resolver/index.js",
      "@babel/plugin-syntax-jsx": "./node_modules/@babel/plugin-syntax-jsx/lib/index.js",
      "eslint-plugin-import": "./node_modules/eslint-plugin-import/lib/index.js",
      "eslint-plugin-react": "./node_modules/@jsenv/eslint-config/node_modules/eslint-plugin-react/index.js",
      "babel-eslint": "./node_modules/babel-eslint/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js"
    },
    "./node_modules/@jsenv/node-launcher/": {
      "@jsenv/error-stack-sourcemap/": "./node_modules/@jsenv/error-stack-sourcemap/",
      "@jsenv/node-module-import-map": "./node_modules/@jsenv/node-module-import-map/index.js",
      "@jsenv/error-stack-sourcemap": "./node_modules/@jsenv/error-stack-sourcemap/index.js",
      "@jsenv/operating-system-path": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/babel-plugin-map": "./node_modules/@jsenv/babel-plugin-map/index.js",
      "@dmail/process-signals": "./node_modules/@dmail/process-signals/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@jsenv/import-map/": "./node_modules/@jsenv/import-map/",
      "@jsenv/import-map": "./node_modules/@jsenv/import-map/index.js",
      "abort-controller": "./node_modules/abort-controller/dist/abort-controller.js",
      "@jsenv/bundling": "./node_modules/@jsenv/bundling/index.js",
      "@dmail/server": "./node_modules/@dmail/server/index.js",
      "@dmail/uneval": "./node_modules/@dmail/uneval/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/logger/index.js",
      "@jsenv/core/": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/core/",
      "@jsenv/href/": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/href/",
      "@jsenv/core": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/core/index.js",
      "@jsenv/href": "./node_modules/@jsenv/node-launcher/node_modules/@jsenv/href/index.js",
      "node-fetch": "./node_modules/node-fetch/lib/index.mjs",
      "source-map": "./node_modules/@jsenv/node-launcher/node_modules/source-map/source-map.js",
      "/": "/"
    },
    "./node_modules/eslint-plugin-import/": {
      "eslint-import-resolver-node": "./node_modules/eslint-import-resolver-node/index.js",
      "eslint-module-utils": "./node_modules/eslint-module-utils/index.js",
      "array-includes": "./node_modules/array-includes/index.js",
      "contains-path": "./node_modules/contains-path/index.js",
      "object.values": "./node_modules/object.values/index.js",
      "read-pkg-up": "./node_modules/read-pkg-up/index.js",
      "minimatch": "./node_modules/minimatch/minimatch.js",
      "doctrine": "./node_modules/doctrine/lib/doctrine.js",
      "resolve": "./node_modules/resolve/index.js",
      "eslint": "./node_modules/eslint/lib/api.js",
      "debug": "./node_modules/eslint-plugin-import/node_modules/debug/src/index.js",
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/@babel/helper-regex/": {
      "lodash": "./node_modules/lodash/lodash.js"
    },
    "./node_modules/@jsenv/auto-publish/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/auto-publish/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/auto-publish/node_modules/@jsenv/logger/index.js",
      "@jsenv/href/": "./node_modules/@jsenv/auto-publish/node_modules/@jsenv/href/",
      "@jsenv/href": "./node_modules/@jsenv/auto-publish/node_modules/@jsenv/href/index.js",
      "node-fetch": "./node_modules/node-fetch/lib/index.mjs"
    },
    "./node_modules/eslint-module-utils/": {
      "pkg-dir": "./node_modules/pkg-dir/index.js",
      "debug": "./node_modules/eslint-module-utils/node_modules/debug/src/index.js"
    },
    "./node_modules/eslint-plugin-react/": {
      "object.fromentries": "./node_modules/object.fromentries/index.js",
      "array-includes": "./node_modules/array-includes/index.js",
      "object.entries": "./node_modules/object.entries/index.js",
      "jsx-ast-utils": "./node_modules/jsx-ast-utils/lib/index.js",
      "object.values": "./node_modules/object.values/index.js",
      "prop-types": "./node_modules/prop-types/index.js",
      "doctrine": "./node_modules/eslint-plugin-react/node_modules/doctrine/lib/doctrine.js",
      "resolve": "./node_modules/resolve/index.js",
      "eslint": "./node_modules/eslint/lib/api.js",
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/istanbul-lib-report/": {
      "istanbul-lib-coverage": "./node_modules/istanbul-lib-report/node_modules/istanbul-lib-coverage/index.js",
      "supports-color": "./node_modules/istanbul-lib-report/node_modules/supports-color/index.js",
      "make-dir": "./node_modules/make-dir/index.js"
    },
    "./node_modules/convert-source-map/": {
      "safe-buffer": "./node_modules/safe-buffer/index.js"
    },
    "./node_modules/object.fromentries/": {
      "define-properties": "./node_modules/define-properties/index.js",
      "function-bind": "./node_modules/function-bind/index.js",
      "es-abstract": "./node_modules/object.fromentries/node_modules/es-abstract/index.js",
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/source-map-support/": {
      "buffer-from": "./node_modules/buffer-from/index.js",
      "source-map": "./node_modules/source-map-support/node_modules/source-map/source-map.js"
    },
    "./node_modules/@babel/code-frame/": {
      "@babel/highlight": "./node_modules/@babel/highlight/lib/index.js"
    },
    "./node_modules/@jsenv/import-map/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/import-map/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/href/": "./node_modules/@jsenv/import-map/node_modules/@jsenv/href/",
      "@jsenv/href": "./node_modules/@jsenv/import-map/node_modules/@jsenv/href/index.js"
    },
    "./node_modules/define-properties/": {
      "object-keys": "./node_modules/object-keys/index.js"
    },
    "./node_modules/https-proxy-agent/": {
      "agent-base": "./node_modules/agent-base/index.js",
      "debug": "./node_modules/https-proxy-agent/node_modules/debug/src/index.js"
    },
    "./node_modules/@babel/generator/": {
      "@babel/types": "./node_modules/@babel/types/lib/index.js",
      "source-map": "./node_modules/source-map/source-map.js",
      "lodash": "./node_modules/lodash/lodash.js",
      "jsesc": "./node_modules/jsesc/jsesc.js"
    },
    "./node_modules/@babel/highlight/": {
      "js-tokens": "./node_modules/js-tokens/index.js",
      "esutils": "./node_modules/esutils/lib/utils.js",
      "chalk": "./node_modules/chalk/index.js"
    },
    "./node_modules/@jsenv/execution/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/execution/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/compile-server/": "./node_modules/@jsenv/compile-server/",
      "@jsenv/compile-server": "./node_modules/@jsenv/compile-server/index.js",
      "istanbul-lib-coverage": "./node_modules/istanbul-lib-coverage/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@dmail/helper": "./node_modules/@dmail/helper/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/execution/node_modules/@jsenv/logger/index.js",
      "@jsenv/href/": "./node_modules/@jsenv/execution/node_modules/@jsenv/href/",
      "@jsenv/href": "./node_modules/@jsenv/execution/node_modules/@jsenv/href/index.js",
      "eventsource": "./node_modules/eventsource/lib/eventsource.js"
    },
    "./node_modules/abort-controller/": {
      "event-target-shim": "./node_modules/event-target-shim/dist/event-target-shim.js"
    },
    "./node_modules/file-entry-cache/": {
      "flat-cache": "./node_modules/flat-cache/cache.js"
    },
    "./node_modules/istanbul-reports/": {
      "handlebars": "./node_modules/handlebars/lib/index.js"
    },
    "./node_modules/@babel/template/": {
      "@babel/code-frame": "./node_modules/@babel/code-frame/lib/index.js",
      "@babel/parser": "./node_modules/@babel/parser/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@babel/traverse/": {
      "@babel/helper-split-export-declaration": "./node_modules/@babel/helper-split-export-declaration/lib/index.js",
      "@babel/helper-function-name": "./node_modules/@babel/helper-function-name/lib/index.js",
      "@babel/code-frame": "./node_modules/@babel/code-frame/lib/index.js",
      "@babel/generator": "./node_modules/@babel/generator/lib/index.js",
      "@babel/parser": "./node_modules/@babel/parser/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js",
      "globals": "./node_modules/globals/index.js",
      "lodash": "./node_modules/lodash/lodash.js",
      "debug": "./node_modules/debug/src/index.js"
    },
    "./node_modules/@jsenv/bundling/": {
      "@jsenv/node-module-import-map": "./node_modules/@jsenv/node-module-import-map/index.js",
      "@babel/helper-module-imports": "./node_modules/@babel/helper-module-imports/lib/index.js",
      "@jsenv/operating-system-path": "./node_modules/@jsenv/bundling/node_modules/@jsenv/operating-system-path/index.js",
      "@jsenv/babel-plugin-map": "./node_modules/@jsenv/babel-plugin-map/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@jsenv/import-map/": "./node_modules/@jsenv/import-map/",
      "@jsenv/import-map": "./node_modules/@jsenv/import-map/index.js",
      "abort-controller": "./node_modules/abort-controller/dist/abort-controller.js",
      "@dmail/helper": "./node_modules/@dmail/helper/index.js",
      "@dmail/server": "./node_modules/@dmail/server/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/bundling/node_modules/@jsenv/logger/index.js",
      "@jsenv/core/": "./node_modules/@jsenv/core/",
      "@jsenv/href/": "./node_modules/@jsenv/bundling/node_modules/@jsenv/href/",
      "@jsenv/core": "./node_modules/@jsenv/core/index.js",
      "@jsenv/href": "./node_modules/@jsenv/bundling/node_modules/@jsenv/href/index.js",
      "node-fetch": "./node_modules/node-fetch/lib/index.mjs",
      "rollup": "./node_modules/rollup/dist/rollup.es.js",
      "terser": "./node_modules/terser/dist/bundle.min.js"
    },
    "./node_modules/@jsenv/url-meta/": {
      "@jsenv/import-map": "./node_modules/@jsenv/url-meta/node_modules/@jsenv/import-map/index.js",
      "/": "/"
    },
    "./node_modules/brace-expansion/": {
      "balanced-match": "./node_modules/balanced-match/index.js",
      "concat-map": "./node_modules/concat-map/index.js"
    },
    "./node_modules/es-to-primitive/": {
      "is-date-object": "./node_modules/is-date-object/index.js",
      "is-callable": "./node_modules/is-callable/index.js",
      "is-symbol": "./node_modules/is-symbol/index.js"
    },
    "./node_modules/external-editor/": {
      "iconv-lite": "./node_modules/iconv-lite/lib/index.js",
      "chardet": "./node_modules/chardet/index.js",
      "tmp": "./node_modules/tmp/lib/tmp.js"
    },
    "./node_modules/proper-lockfile/": {
      "graceful-fs": "./node_modules/graceful-fs/graceful-fs.js",
      "signal-exit": "./node_modules/signal-exit/index.js",
      "retry": "./node_modules/retry/index.js"
    },
    "./node_modules/shebang-command/": {
      "shebang-regex": "./node_modules/shebang-regex/index.js"
    },
    "./node_modules/@babel/helpers/": {
      "@babel/template": "./node_modules/@babel/template/lib/index.js",
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js"
    },
    "./node_modules/@jsenv/testing/": {
      "@babel/plugin-syntax-dynamic-import": "./node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js",
      "@babel/plugin-syntax-import-meta": "./node_modules/@babel/plugin-syntax-import-meta/lib/index.js",
      "@jsenv/operating-system-path": "./node_modules/@jsenv/testing/node_modules/@jsenv/operating-system-path/index.js",
      "@dmail/filesystem-matching": "./node_modules/@dmail/filesystem-matching/index.js",
      "@dmail/filesystem-watch": "./node_modules/@dmail/filesystem-watch/index.js",
      "istanbul-lib-instrument": "./node_modules/istanbul-lib-instrument/dist/index.js",
      "@jsenv/compile-server/": "./node_modules/@jsenv/compile-server/",
      "@jsenv/compile-server": "./node_modules/@jsenv/compile-server/index.js",
      "istanbul-lib-coverage": "./node_modules/@jsenv/testing/node_modules/istanbul-lib-coverage/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "istanbul-lib-report": "./node_modules/istanbul-lib-report/index.js",
      "@jsenv/execution": "./node_modules/@jsenv/execution/index.js",
      "istanbul-reports": "./node_modules/istanbul-reports/index.js",
      "@jsenv/url-meta": "./node_modules/@jsenv/testing/node_modules/@jsenv/url-meta/index.js",
      "@dmail/helper": "./node_modules/@dmail/helper/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/testing/node_modules/@jsenv/logger/index.js",
      "node-notifier": "./node_modules/node-notifier/index.js",
      "@jsenv/href/": "./node_modules/@jsenv/testing/node_modules/@jsenv/href/",
      "@babel/core": "./node_modules/@babel/core/lib/index.js",
      "@jsenv/href": "./node_modules/@jsenv/testing/node_modules/@jsenv/href/index.js",
      "node-fetch": "./node_modules/node-fetch/lib/index.mjs",
      "cuid": "./node_modules/cuid/index.js"
    },
    "./node_modules/array-includes/": {
      "define-properties": "./node_modules/define-properties/index.js",
      "es-abstract": "./node_modules/es-abstract/index.js"
    },
    "./node_modules/load-json-file/": {
      "graceful-fs": "./node_modules/graceful-fs/graceful-fs.js",
      "parse-json": "./node_modules/parse-json/index.js",
      "strip-bom": "./node_modules/strip-bom/index.js",
      "pify": "./node_modules/pify/index.js"
    },
    "./node_modules/object.entries/": {
      "define-properties": "./node_modules/define-properties/index.js",
      "function-bind": "./node_modules/function-bind/index.js",
      "es-abstract": "./node_modules/es-abstract/index.js",
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/restore-cursor/": {
      "signal-exit": "./node_modules/signal-exit/index.js",
      "onetime": "./node_modules/onetime/index.js"
    },
    "./node_modules/supports-color/": {
      "has-flag": "./node_modules/has-flag/index.js"
    },
    "./node_modules/@dmail/server/": {
      "@jsenv/operating-system-path": "./node_modules/@jsenv/operating-system-path/index.js",
      "@dmail/process-signals": "./node_modules/@dmail/process-signals/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "@dmail/helper": "./node_modules/@dmail/helper/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/logger/index.js",
      "@jsenv/href": "./node_modules/@jsenv/href/index.js",
      "kill-port": "./node_modules/kill-port/index.js",
      "/": "/"
    },
    "./node_modules/@jsenv/logger/": {
      "@jsenv/href": "./node_modules/@jsenv/href/index.js",
      "/": "/"
    },
    "./node_modules/color-convert/": {
      "color-name": "./node_modules/color-name/index.js"
    },
    "./node_modules/es6-promisify/": {
      "es6-promise": "./node_modules/es6-promise/dist/es6-promise.js"
    },
    "./node_modules/jsx-ast-utils/": {
      "array-includes": "./node_modules/array-includes/index.js",
      "object.assign": "./node_modules/object.assign/index.js"
    },
    "./node_modules/node-notifier/": {
      "shellwords": "./node_modules/shellwords/lib/shellwords.js",
      "growly": "./node_modules/growly/lib/growly.js",
      "is-wsl": "./node_modules/is-wsl/index.js",
      "semver": "./node_modules/node-notifier/node_modules/semver/semver.js",
      "which": "./node_modules/which/which.js"
    },
    "./node_modules/object.assign/": {
      "define-properties": "./node_modules/define-properties/index.js",
      "function-bind": "./node_modules/function-bind/index.js",
      "has-symbols": "./node_modules/has-symbols/index.js",
      "object-keys": "./node_modules/object-keys/index.js"
    },
    "./node_modules/object.values/": {
      "define-properties": "./node_modules/define-properties/index.js",
      "function-bind": "./node_modules/function-bind/index.js",
      "es-abstract": "./node_modules/es-abstract/index.js",
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/parent-module/": {
      "callsites": "./node_modules/callsites/index.js"
    },
    "./node_modules/teeny-request/": {
      "https-proxy-agent": "./node_modules/https-proxy-agent/index.js",
      "node-fetch": "./node_modules/node-fetch/lib/index.mjs",
      "uuid": "./node_modules/uuid/index.js"
    },
    "./node_modules/@babel/types/": {
      "to-fast-properties": "./node_modules/to-fast-properties/index.js",
      "esutils": "./node_modules/esutils/lib/utils.js",
      "lodash": "./node_modules/lodash/lodash.js"
    },
    "./node_modules/ansi-to-html/": {
      "entities": "./node_modules/entities/index.js"
    },
    "./node_modules/babel-eslint/": {
      "eslint-visitor-keys": "./node_modules/eslint-visitor-keys/lib/index.js",
      "eslint-scope": "./node_modules/eslint-scope/lib/index.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js",
      "eslint": "./node_modules/eslint/lib/api.js",
      "semver": "./node_modules/semver/semver.js"
    },
    "./node_modules/eslint-scope/": {
      "estraverse": "./node_modules/estraverse/estraverse.js",
      "esrecurse": "./node_modules/esrecurse/esrecurse.js"
    },
    "./node_modules/eslint-utils/": {
      "eslint-visitor-keys": "./node_modules/eslint-visitor-keys/lib/index.js"
    },
    "./node_modules/import-fresh/": {
      "parent-module": "./node_modules/parent-module/index.js",
      "resolve-from": "./node_modules/resolve-from/index.js"
    },
    "./node_modules/loose-envify/": {
      "js-tokens": "./node_modules/js-tokens/index.js"
    },
    "./node_modules/regexpu-core/": {
      "unicode-match-property-value-ecmascript": "./node_modules/unicode-match-property-value-ecmascript/index.js",
      "unicode-match-property-ecmascript": "./node_modules/unicode-match-property-ecmascript/index.js",
      "regenerate-unicode-properties": "./node_modules/regenerate-unicode-properties/index.js",
      "regjsparser": "./node_modules/regjsparser/parser.js",
      "regenerate": "./node_modules/regenerate/regenerate.js",
      "regjsgen": "./node_modules/regjsgen/regjsgen.js"
    },
    "./node_modules/spdx-correct/": {
      "spdx-expression-parse": "./node_modules/spdx-expression-parse/index.js",
      "spdx-license-ids": "./node_modules/spdx-license-ids/index.json"
    },
    "./node_modules/string-width/": {
      "is-fullwidth-code-point": "./node_modules/is-fullwidth-code-point/index.js",
      "strip-ansi": "./node_modules/string-width/node_modules/strip-ansi/index.js"
    },
    "./node_modules/@babel/core/": {
      "convert-source-map": "./node_modules/convert-source-map/index.js",
      "@babel/code-frame": "./node_modules/@babel/code-frame/lib/index.js",
      "@babel/generator": "./node_modules/@babel/generator/lib/index.js",
      "@babel/template": "./node_modules/@babel/template/lib/index.js",
      "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
      "@babel/helpers": "./node_modules/@babel/helpers/lib/index.js",
      "@babel/parser": "./node_modules/@babel/parser/lib/index.js",
      "@babel/types": "./node_modules/@babel/types/lib/index.js",
      "source-map": "./node_modules/source-map/source-map.js",
      "resolve": "./node_modules/resolve/index.js",
      "lodash": "./node_modules/lodash/lodash.js",
      "semver": "./node_modules/semver/semver.js",
      "debug": "./node_modules/debug/src/index.js",
      "json5": "./node_modules/json5/dist/index.mjs"
    },
    "./node_modules/@jsenv/core/": {
      "@babel/plugin-transform-modules-systemjs": "./node_modules/@babel/plugin-transform-modules-systemjs/lib/index.js",
      "@babel/plugin-syntax-dynamic-import": "./node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js",
      "@babel/plugin-syntax-import-meta": "./node_modules/@babel/plugin-syntax-import-meta/lib/index.js",
      "babel-plugin-transform-commonjs": "./node_modules/babel-plugin-transform-commonjs/dist/index.js",
      "@babel/helper-hoist-variables": "./node_modules/@babel/helper-hoist-variables/lib/index.js",
      "@jsenv/operating-system-path": "./node_modules/@jsenv/core/node_modules/@jsenv/operating-system-path/index.js",
      "@babel/helper-plugin-utils": "./node_modules/@babel/helper-plugin-utils/lib/index.js",
      "@jsenv/babel-plugin-map": "./node_modules/@jsenv/babel-plugin-map/index.js",
      "@dmail/cancellation": "./node_modules/@dmail/cancellation/index.js",
      "regenerator-runtime": "./node_modules/regenerator-runtime/runtime.js",
      "@jsenv/import-map/": "./node_modules/@jsenv/import-map/",
      "@jsenv/import-map": "./node_modules/@jsenv/import-map/index.js",
      "@jsenv/url-meta": "./node_modules/@jsenv/core/node_modules/@jsenv/url-meta/index.js",
      "proper-lockfile": "./node_modules/proper-lockfile/index.js",
      "@babel/helpers": "./node_modules/@jsenv/core/node_modules/@babel/helpers/lib/index.js",
      "@dmail/helper": "./node_modules/@dmail/helper/index.js",
      "@jsenv/logger": "./node_modules/@jsenv/core/node_modules/@jsenv/logger/index.js",
      "@jsenv/href/": "./node_modules/@jsenv/core/node_modules/@jsenv/href/",
      "ansi-to-html": "./node_modules/ansi-to-html/lib/ansi_to_html.js",
      "@babel/core": "./node_modules/@babel/core/lib/index.js",
      "@jsenv/href": "./node_modules/@jsenv/core/node_modules/@jsenv/href/index.js",
      "rimraf": "./node_modules/rimraf/rimraf.js"
    },
    "./node_modules/ansi-styles/": {
      "color-convert": "./node_modules/color-convert/index.js"
    },
    "./node_modules/cross-spawn/": {
      "shebang-command": "./node_modules/shebang-command/index.js",
      "nice-try": "./node_modules/nice-try/src/index.js",
      "path-key": "./node_modules/path-key/index.js",
      "semver": "./node_modules/semver/semver.js",
      "which": "./node_modules/which/which.js"
    },
    "./node_modules/es-abstract/": {
      "string.prototype.trimright": "./node_modules/string.prototype.trimright/index.js",
      "string.prototype.trimleft": "./node_modules/string.prototype.trimleft/index.js",
      "es-to-primitive": "./node_modules/es-to-primitive/index.js",
      "object-inspect": "./node_modules/object-inspect/index.js",
      "function-bind": "./node_modules/function-bind/index.js",
      "has-symbols": "./node_modules/has-symbols/index.js",
      "is-callable": "./node_modules/is-callable/index.js",
      "object-keys": "./node_modules/object-keys/index.js",
      "is-regex": "./node_modules/is-regex/index.js",
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/eventsource/": {
      "original": "./node_modules/original/index.js"
    },
    "./node_modules/glob-parent/": {
      "is-glob": "./node_modules/is-glob/index.js"
    },
    "./node_modules/ignore-walk/": {
      "minimatch": "./node_modules/minimatch/minimatch.js"
    },
    "./node_modules/locate-path/": {
      "path-exists": "./node_modules/path-exists/index.js",
      "p-locate": "./node_modules/p-locate/index.js"
    },
    "./node_modules/read-pkg-up/": {
      "read-pkg": "./node_modules/read-pkg/index.js",
      "find-up": "./node_modules/find-up/index.js"
    },
    "./node_modules/regjsparser/": {
      "jsesc": "./node_modules/regjsparser/node_modules/jsesc/jsesc.js"
    },
    "./node_modules/agent-base/": {
      "es6-promisify": "./node_modules/es6-promisify/dist/promisify.js"
    },
    "./node_modules/cli-cursor/": {
      "restore-cursor": "./node_modules/restore-cursor/index.js"
    },
    "./node_modules/flat-cache/": {
      "flatted": "./node_modules/flatted/esm/index.js",
      "rimraf": "./node_modules/flat-cache/node_modules/rimraf/rimraf.js",
      "write": "./node_modules/write/index.js"
    },
    "./node_modules/handlebars/": {
      "source-map": "./node_modules/handlebars/node_modules/source-map/source-map.js",
      "neo-async": "./node_modules/neo-async/async.js",
      "uglify-js": "./node_modules/uglify-js/tools/node.js",
      "optimist": "./node_modules/optimist/index.js"
    },
    "./node_modules/iconv-lite/": {
      "safer-buffer": "./node_modules/safer-buffer/safer.js"
    },
    "./node_modules/optionator/": {
      "fast-levenshtein": "./node_modules/fast-levenshtein/levenshtein.js",
      "prelude-ls": "./node_modules/prelude-ls/lib/index.js",
      "type-check": "./node_modules/type-check/lib/index.js",
      "wordwrap": "./node_modules/optionator/node_modules/wordwrap/index.js",
      "deep-is": "./node_modules/deep-is/index.js",
      "levn": "./node_modules/levn/lib/index.js"
    },
    "./node_modules/parse-json/": {
      "error-ex": "./node_modules/error-ex/index.js"
    },
    "./node_modules/prop-types/": {
      "object-assign": "./node_modules/object-assign/index.js",
      "loose-envify": "./node_modules/loose-envify/index.js",
      "react-is": "./node_modules/react-is/index.js"
    },
    "./node_modules/slice-ansi/": {
      "is-fullwidth-code-point": "./node_modules/is-fullwidth-code-point/index.js",
      "astral-regex": "./node_modules/astral-regex/index.js",
      "ansi-styles": "./node_modules/ansi-styles/index.js"
    },
    "./node_modules/strip-ansi/": {
      "ansi-regex": "./node_modules/strip-ansi/node_modules/ansi-regex/index.js"
    },
    "./node_modules/type-check/": {
      "prelude-ls": "./node_modules/prelude-ls/lib/index.js"
    },
    "./node_modules/acorn-jsx/": {
      "acorn": "./node_modules/acorn/dist/acorn.mjs"
    },
    "./node_modules/esrecurse/": {
      "estraverse": "./node_modules/estraverse/estraverse.js"
    },
    "./node_modules/is-symbol/": {
      "has-symbols": "./node_modules/has-symbols/index.js"
    },
    "./node_modules/kill-port/": {
      "get-them-args": "./node_modules/get-them-args/index.js",
      "shell-exec": "./node_modules/shell-exec/index.js"
    },
    "./node_modules/minimatch/": {
      "brace-expansion": "./node_modules/brace-expansion/index.js"
    },
    "./node_modules/path-type/": {
      "pify": "./node_modules/pify/index.js"
    },
    "./node_modules/run-async/": {
      "is-promise": "./node_modules/is-promise/index.js"
    },
    "./node_modules/uglify-js/": {
      "source-map": "./node_modules/uglify-js/node_modules/source-map/source-map.js",
      "commander": "./node_modules/commander/index.js"
    },
    "./node_modules/url-parse/": {
      "querystringify": "./node_modules/querystringify/index.js",
      "requires-port": "./node_modules/requires-port/index.js"
    },
    "./node_modules/argparse/": {
      "sprintf-js": "./node_modules/sprintf-js/src/sprintf.js"
    },
    "./node_modules/doctrine/": {
      "esutils": "./node_modules/esutils/lib/utils.js",
      "isarray": "./node_modules/isarray/index.js"
    },
    "./node_modules/error-ex/": {
      "is-arrayish": "./node_modules/is-arrayish/index.js"
    },
    "./node_modules/inflight/": {
      "wrappy": "./node_modules/wrappy/wrappy.js",
      "once": "./node_modules/once/once.js"
    },
    "./node_modules/inquirer/": {
      "external-editor": "./node_modules/external-editor/main/index.js",
      "ansi-escapes": "./node_modules/ansi-escapes/index.js",
      "string-width": "./node_modules/string-width/index.js",
      "mute-stream": "./node_modules/mute-stream/mute.js",
      "cli-cursor": "./node_modules/cli-cursor/index.js",
      "strip-ansi": "./node_modules/strip-ansi/index.js",
      "cli-width": "./node_modules/cli-width/index.js",
      "run-async": "./node_modules/run-async/index.js",
      "figures": "./node_modules/figures/index.js",
      "through": "./node_modules/through/index.js",
      "lodash": "./node_modules/lodash/lodash.js",
      "chalk": "./node_modules/chalk/index.js",
      "rxjs": "./node_modules/rxjs/_esm5/index.js"
    },
    "./node_modules/is-regex/": {
      "has": "./node_modules/has/src/index.js"
    },
    "./node_modules/make-dir/": {
      "semver": "./node_modules/make-dir/node_modules/semver/semver.js"
    },
    "./node_modules/optimist/": {
      "minimist": "./node_modules/minimist/index.js",
      "wordwrap": "./node_modules/wordwrap/index.js"
    },
    "./node_modules/original/": {
      "url-parse": "./node_modules/url-parse/index.js"
    },
    "./node_modules/p-locate/": {
      "p-limit": "./node_modules/p-limit/index.js"
    },
    "./node_modules/read-pkg/": {
      "normalize-package-data": "./node_modules/normalize-package-data/lib/normalize.js",
      "load-json-file": "./node_modules/load-json-file/index.js",
      "path-type": "./node_modules/path-type/index.js"
    },
    "./node_modules/codecov/": {
      "teeny-request": "./node_modules/teeny-request/build/src/index.js",
      "ignore-walk": "./node_modules/ignore-walk/index.js",
      "js-yaml": "./node_modules/js-yaml/index.js",
      "urlgrey": "./node_modules/urlgrey/index.js",
      "argv": "./node_modules/argv/index.js"
    },
    "./node_modules/esquery/": {
      "estraverse": "./node_modules/estraverse/estraverse.js"
    },
    "./node_modules/figures/": {
      "escape-string-regexp": "./node_modules/escape-string-regexp/index.js"
    },
    "./node_modules/find-up/": {
      "locate-path": "./node_modules/locate-path/index.js"
    },
    "./node_modules/is-glob/": {
      "is-extglob": "./node_modules/is-extglob/index.js"
    },
    "./node_modules/js-yaml/": {
      "argparse": "./node_modules/argparse/index.js",
      "esprima": "./node_modules/esprima/dist/esprima.js"
    },
    "./node_modules/onetime/": {
      "mimic-fn": "./node_modules/mimic-fn/index.js"
    },
    "./node_modules/p-limit/": {
      "p-try": "./node_modules/p-try/index.js"
    },
    "./node_modules/pkg-dir/": {
      "find-up": "./node_modules/find-up/index.js"
    },
    "./node_modules/resolve/": {
      "path-parse": "./node_modules/path-parse/index.js"
    },
    "./node_modules/eslint/": {
      "json-stable-stringify-without-jsonify": "./node_modules/json-stable-stringify-without-jsonify/index.js",
      "functional-red-black-tree": "./node_modules/functional-red-black-tree/rbtree.js",
      "eslint-visitor-keys": "./node_modules/eslint-visitor-keys/lib/index.js",
      "strip-json-comments": "./node_modules/strip-json-comments/index.js",
      "@babel/code-frame": "./node_modules/@babel/code-frame/lib/index.js",
      "file-entry-cache": "./node_modules/file-entry-cache/cache.js",
      "v8-compile-cache": "./node_modules/v8-compile-cache/v8-compile-cache.js",
      "natural-compare": "./node_modules/natural-compare/index.js",
      "eslint-scope": "./node_modules/eslint/node_modules/eslint-scope/lib/index.js",
      "eslint-utils": "./node_modules/eslint-utils/index.mjs",
      "import-fresh": "./node_modules/import-fresh/index.js",
      "cross-spawn": "./node_modules/cross-spawn/index.js",
      "glob-parent": "./node_modules/glob-parent/index.js",
      "imurmurhash": "./node_modules/imurmurhash/imurmurhash.js",
      "optionator": "./node_modules/optionator/lib/index.js",
      "strip-ansi": "./node_modules/strip-ansi/index.js",
      "text-table": "./node_modules/text-table/index.js",
      "minimatch": "./node_modules/minimatch/minimatch.js",
      "doctrine": "./node_modules/eslint/node_modules/doctrine/lib/doctrine.js",
      "inquirer": "./node_modules/inquirer/lib/inquirer.js",
      "progress": "./node_modules/progress/index.js",
      "esquery": "./node_modules/esquery/esquery.js",
      "esutils": "./node_modules/esutils/lib/utils.js",
      "globals": "./node_modules/globals/index.js",
      "is-glob": "./node_modules/is-glob/index.js",
      "js-yaml": "./node_modules/js-yaml/index.js",
      "regexpp": "./node_modules/regexpp/index.js",
      "espree": "./node_modules/espree/espree.js",
      "ignore": "./node_modules/ignore/index.js",
      "lodash": "./node_modules/lodash/lodash.js",
      "mkdirp": "./node_modules/mkdirp/index.js",
      "semver": "./node_modules/eslint/node_modules/semver/semver.js",
      "chalk": "./node_modules/chalk/index.js",
      "debug": "./node_modules/debug/src/index.js",
      "table": "./node_modules/table/dist/index.js",
      "levn": "./node_modules/levn/lib/index.js",
      "ajv": "./node_modules/ajv/lib/ajv.js"
    },
    "./node_modules/espree/": {
      "eslint-visitor-keys": "./node_modules/eslint-visitor-keys/lib/index.js",
      "acorn-jsx": "./node_modules/acorn-jsx/index.js",
      "acorn": "./node_modules/acorn/dist/acorn.mjs"
    },
    "./node_modules/mkdirp/": {
      "minimist": "./node_modules/mkdirp/node_modules/minimist/index.js"
    },
    "./node_modules/rimraf/": {
      "glob": "./node_modules/glob/glob.js"
    },
    "./node_modules/rollup/": {
      "acorn": "./node_modules/acorn/dist/acorn.mjs"
    },
    "./node_modules/terser/": {
      "source-map-support": "./node_modules/source-map-support/source-map-support.js",
      "source-map": "./node_modules/terser/node_modules/source-map/source-map.js",
      "commander": "./node_modules/commander/index.js"
    },
    "./node_modules/uri-js/": {
      "punycode": "./node_modules/punycode/punycode.es6.js"
    },
    "./node_modules/chalk/": {
      "escape-string-regexp": "./node_modules/escape-string-regexp/index.js",
      "supports-color": "./node_modules/supports-color/index.js",
      "ansi-styles": "./node_modules/ansi-styles/index.js"
    },
    "./node_modules/debug/": {
      "ms": "./node_modules/ms/index.js"
    },
    "./node_modules/json5/": {
      "minimist": "./node_modules/json5/node_modules/minimist/index.js"
    },
    "./node_modules/react/": {
      "object-assign": "./node_modules/object-assign/index.js",
      "loose-envify": "./node_modules/loose-envify/index.js",
      "prop-types": "./node_modules/prop-types/index.js"
    },
    "./node_modules/table/": {
      "string-width": "./node_modules/table/node_modules/string-width/index.js",
      "slice-ansi": "./node_modules/slice-ansi/index.js",
      "lodash": "./node_modules/lodash/lodash.js",
      "ajv": "./node_modules/ajv/lib/ajv.js"
    },
    "./node_modules/which/": {
      "isexe": "./node_modules/isexe/index.js"
    },
    "./node_modules/write/": {
      "mkdirp": "./node_modules/mkdirp/index.js"
    },
    "./node_modules/glob/": {
      "path-is-absolute": "./node_modules/path-is-absolute/index.js",
      "fs.realpath": "./node_modules/fs.realpath/index.js",
      "minimatch": "./node_modules/minimatch/minimatch.js",
      "inflight": "./node_modules/inflight/inflight.js",
      "inherits": "./node_modules/inherits/inherits.js",
      "once": "./node_modules/once/once.js"
    },
    "./node_modules/levn/": {
      "prelude-ls": "./node_modules/prelude-ls/lib/index.js",
      "type-check": "./node_modules/type-check/lib/index.js"
    },
    "./node_modules/once/": {
      "wrappy": "./node_modules/wrappy/wrappy.js"
    },
    "./node_modules/rxjs/": {
      "tslib": "./node_modules/tslib/tslib.es6.js"
    },
    "./node_modules/ajv/": {
      "fast-json-stable-stringify": "./node_modules/fast-json-stable-stringify/index.js",
      "json-schema-traverse": "./node_modules/json-schema-traverse/index.js",
      "fast-deep-equal": "./node_modules/fast-deep-equal/index.js",
      "uri-js": "./node_modules/uri-js/dist/es5/uri.all.js"
    },
    "./node_modules/has/": {
      "function-bind": "./node_modules/function-bind/index.js"
    },
    "./node_modules/tmp/": {
      "os-tmpdir": "./node_modules/os-tmpdir/index.js"
    }
  }
};

const assertImportMap = value => {
  if (value === null) {
    throw new TypeError(`an importMap must be an object, got null`);
  }

  const type = typeof value;

  if (type !== "object") {
    throw new TypeError(`an importMap must be an object, received ${value}`);
  }

  if (Array.isArray(value)) {
    throw new TypeError(`an importMap must be an object, received array ${value}`);
  }
};

const hasScheme = string => {
  return /^[a-zA-Z]{2,}:/.test(string);
};

const hrefToScheme = href => {
  const colonIndex = href.indexOf(":");
  if (colonIndex === -1) return "";
  return href.slice(0, colonIndex);
};

const hrefToPathname = href => {
  return ressourceToPathname(hrefToRessource(href));
};

const hrefToRessource = href => {
  const scheme = hrefToScheme(href);

  if (scheme === "file") {
    return href.slice("file://".length);
  }

  if (scheme === "https" || scheme === "http") {
    // remove origin
    const afterProtocol = href.slice(scheme.length + "://".length);
    const pathnameSlashIndex = afterProtocol.indexOf("/", "://".length);
    return afterProtocol.slice(pathnameSlashIndex);
  }

  return href.slice(scheme.length + 1);
};

const ressourceToPathname = ressource => {
  const searchSeparatorIndex = ressource.indexOf("?");
  return searchSeparatorIndex === -1 ? ressource : ressource.slice(0, searchSeparatorIndex);
};

const hrefToOrigin = href => {
  const scheme = hrefToScheme(href);

  if (scheme === "file") {
    return "file://";
  }

  if (scheme === "http" || scheme === "https") {
    const secondProtocolSlashIndex = scheme.length + "://".length;
    const pathnameSlashIndex = href.indexOf("/", secondProtocolSlashIndex);
    if (pathnameSlashIndex === -1) return href;
    return href.slice(0, pathnameSlashIndex);
  }

  return href.slice(0, scheme.length + 1);
};

const pathnameToDirname = pathname => {
  const slashLastIndex = pathname.lastIndexOf("/");
  if (slashLastIndex === -1) return "";
  return pathname.slice(0, slashLastIndex);
};

// could be useful: https://url.spec.whatwg.org/#url-miscellaneous
const resolveUrl = (specifier, baseUrl) => {
  if (baseUrl) {
    if (typeof baseUrl !== "string") {
      throw new TypeError(writeBaseUrlMustBeAString({
        baseUrl,
        specifier
      }));
    }

    if (!hasScheme(baseUrl)) {
      throw new Error(writeBaseUrlMustBeAbsolute({
        baseUrl,
        specifier
      }));
    }
  }

  if (hasScheme(specifier)) {
    return specifier;
  }

  if (!baseUrl) {
    throw new Error(writeBaseUrlRequired({
      baseUrl,
      specifier
    }));
  } // scheme relative


  if (specifier.slice(0, 2) === "//") {
    return `${hrefToScheme(baseUrl)}:${specifier}`;
  } // origin relative


  if (specifier[0] === "/") {
    return `${hrefToOrigin(baseUrl)}${specifier}`;
  }

  const baseOrigin = hrefToOrigin(baseUrl);
  const basePathname = hrefToPathname(baseUrl); // pathname relative inside

  if (specifier.slice(0, 2) === "./") {
    const baseDirname = pathnameToDirname(basePathname);
    return `${baseOrigin}${baseDirname}/${specifier.slice(2)}`;
  } // pathname relative outside


  if (specifier.slice(0, 3) === "../") {
    let unresolvedPathname = specifier;
    const importerFolders = basePathname.split("/");
    importerFolders.pop();

    while (unresolvedPathname.slice(0, 3) === "../") {
      // when there is no folder left to resolved
      // we just ignore '../'
      if (importerFolders.length) {
        importerFolders.pop();
      }

      unresolvedPathname = unresolvedPathname.slice(3);
    }

    const resolvedPathname = `${importerFolders.join("/")}/${unresolvedPathname}`;
    return `${baseOrigin}${resolvedPathname}`;
  } // bare


  if (basePathname === "") {
    return `${baseOrigin}/${specifier}`;
  }

  if (basePathname[basePathname.length] === "/") {
    return `${baseOrigin}${basePathname}${specifier}`;
  }

  return `${baseOrigin}${pathnameToDirname(basePathname)}/${specifier}`;
};

const writeBaseUrlMustBeAString = ({
  baseUrl,
  specifier
}) => `baseUrl must be a string.
--- base url ---
${baseUrl}
--- specifier ---
${specifier}`;

const writeBaseUrlMustBeAbsolute = ({
  baseUrl,
  specifier
}) => `baseUrl must be absolute.
--- base url ---
${baseUrl}
--- specifier ---
${specifier}`;

const writeBaseUrlRequired = ({
  baseUrl,
  specifier
}) => `baseUrl required to resolve relative specifier.
--- base url ---
${baseUrl}
--- specifier ---
${specifier}`;

const tryUrlResolution = (string, url) => {
  const result = resolveUrl(string, url);
  return hasScheme(result) ? result : null;
};

const resolveSpecifier = (specifier, importer) => {
  if (specifier[0] === "/" || specifier.startsWith("./") || specifier.startsWith("../")) {
    return resolveUrl(specifier, importer);
  }

  if (hasScheme(specifier)) {
    return specifier;
  }

  return null;
};

const sortImports = imports => {
  const importsSorted = {};
  Object.keys(imports).sort(compareLengthOrLocaleCompare).forEach(name => {
    importsSorted[name] = imports[name];
  });
  return importsSorted;
};
const sortScopes = scopes => {
  const scopesSorted = {};
  Object.keys(scopes).sort(compareLengthOrLocaleCompare).forEach(scopeName => {
    scopesSorted[scopeName] = sortImports(scopes[scopeName]);
  });
  return scopesSorted;
};

const compareLengthOrLocaleCompare = (a, b) => {
  return b.length - a.length || a.localeCompare(b);
};

const normalizeImportMap = (importMap, baseUrl) => {
  assertImportMap(importMap);

  if (typeof baseUrl !== "string") {
    throw new TypeError(formulateBaseUrlMustBeAString({
      baseUrl
    }));
  }

  const {
    imports,
    scopes
  } = importMap;
  return {
    imports: imports ? normalizeImports(imports, baseUrl) : undefined,
    scopes: scopes ? normalizeScopes(scopes, baseUrl) : undefined
  };
};

const normalizeImports = (imports, baseUrl) => {
  const importsNormalized = {};
  Object.keys(imports).forEach(specifier => {
    const address = imports[specifier];

    if (typeof address !== "string") {
      console.warn(formulateAddressMustBeAString({
        address,
        specifier
      }));
      return;
    }

    const specifierResolved = resolveSpecifier(specifier, baseUrl) || specifier;
    const addressUrl = tryUrlResolution(address, baseUrl);

    if (addressUrl === null) {
      console.warn(formulateAdressResolutionFailed({
        address,
        baseUrl,
        specifier
      }));
      return;
    }

    if (specifier.endsWith("/") && !addressUrl.endsWith("/")) {
      console.warn(formulateAddressUrlRequiresTrailingSlash({
        addressUrl,
        address,
        specifier
      }));
      return;
    }

    importsNormalized[specifierResolved] = addressUrl;
  });
  return sortImports(importsNormalized);
};

const normalizeScopes = (scopes, baseUrl) => {
  const scopesNormalized = {};
  Object.keys(scopes).forEach(scope => {
    const scopeValue = scopes[scope];
    const scopeUrl = tryUrlResolution(scope, baseUrl);

    if (scopeUrl === null) {
      console.warn(formulateScopeResolutionFailed({
        scope,
        baseUrl
      }));
      return;
    }

    const scopeValueNormalized = normalizeImports(scopeValue, baseUrl);
    scopesNormalized[scopeUrl] = scopeValueNormalized;
  });
  return sortScopes(scopesNormalized);
};

const formulateBaseUrlMustBeAString = ({
  baseUrl
}) => `baseUrl must be a string.
--- base url ---
${baseUrl}`;

const formulateAddressMustBeAString = ({
  specifier,
  address
}) => `Address must be a string.
--- address ---
${address}
--- specifier ---
${specifier}`;

const formulateAdressResolutionFailed = ({
  address,
  baseUrl,
  specifier
}) => `Address url resolution failed.
--- address ---
${address}
--- base url ---
${baseUrl}
--- specifier ---
${specifier}`;

const formulateAddressUrlRequiresTrailingSlash = ({
  addressURL,
  address,
  specifier
}) => `Address must end with /.
--- address url ---
${addressURL}
--- address ---
${address}
--- specifier ---
${specifier}`;

const formulateScopeResolutionFailed = ({
  scope,
  baseUrl
}) => `Scope url resolution failed.
--- scope ---
${scope}
--- base url ---
${baseUrl}`;

const pathnameToExtension = pathname => {
  const slashLastIndex = pathname.lastIndexOf("/");

  if (slashLastIndex !== -1) {
    pathname = pathname.slice(slashLastIndex + 1);
  }

  const dotLastIndex = pathname.lastIndexOf(".");
  if (dotLastIndex === -1) return ""; // if (dotLastIndex === pathname.length - 1) return ""

  return pathname.slice(dotLastIndex);
};

const applyImportMap = ({
  importMap,
  specifier,
  importer
}) => {
  assertImportMap(importMap);

  if (typeof specifier !== "string") {
    throw new TypeError(writeSpecifierMustBeAString({
      specifier,
      importer
    }));
  }

  if (importer) {
    if (typeof importer !== "string") {
      throw new TypeError(writeImporterMustBeAString({
        importer,
        specifier
      }));
    }

    if (!hasScheme(importer)) {
      throw new Error(writeImporterMustBeAbsolute({
        importer,
        specifier
      }));
    }
  }

  const specifierUrl = resolveSpecifier(specifier, importer);
  const specifierNormalized = specifierUrl || specifier;
  const {
    scopes
  } = importMap;

  if (scopes && importer) {
    const scopeKeyMatching = Object.keys(scopes).find(scopeKey => {
      return scopeKey === importer || specifierIsPrefixOf(scopeKey, importer);
    });

    if (scopeKeyMatching) {
      const scopeValue = scopes[scopeKeyMatching];
      const remappingFromScopeImports = applyImports(specifierNormalized, scopeValue);

      if (remappingFromScopeImports !== null) {
        return remappingFromScopeImports;
      }
    }
  }

  const {
    imports
  } = importMap;

  if (imports) {
    const remappingFromImports = applyImports(specifierNormalized, imports);

    if (remappingFromImports !== null) {
      return remappingFromImports;
    }
  }

  if (specifierUrl) {
    return specifierUrl;
  }

  throw new Error(writeBareSpecifierMustBeRemapped({
    specifier,
    importer
  }));
};

const applyImports = (specifier, imports) => {
  const importKeyArray = Object.keys(imports);
  let i = 0;

  while (i < importKeyArray.length) {
    const importKey = importKeyArray[i];
    i++;

    if (importKey === specifier) {
      const importValue = imports[importKey];
      return importValue;
    }

    if (specifierIsPrefixOf(importKey, specifier)) {
      const importValue = imports[importKey];
      const afterImportKey = specifier.slice(importKey.length);
      return tryUrlResolution(afterImportKey, importValue);
    }
  }

  return null;
};

const specifierIsPrefixOf = (specifierHref, href) => {
  return specifierHref[specifierHref.length - 1] === "/" && href.startsWith(specifierHref);
};

const writeSpecifierMustBeAString = ({
  specifier,
  importer
}) => `specifier must be a string.
--- specifier ---
${specifier}
--- importer ---
${importer}`;

const writeImporterMustBeAString = ({
  importer,
  specifier
}) => `importer must be a string.
--- importer ---
${importer}
--- specifier ---
${specifier}`;

const writeImporterMustBeAbsolute = ({
  importer,
  specifier
}) => `importer must be an absolute url.
--- importer ---
${importer}
--- specifier ---
${specifier}`;

const writeBareSpecifierMustBeRemapped = ({
  specifier,
  importer
}) => `Unmapped bare specifier.
--- specifier ---
${specifier}
--- importer ---
${importer}`;

// directly target the files because this code
const resolveImport = ({
  specifier,
  importer,
  importMap,
  defaultExtension = true
}) => {
  return applyDefaultExtension({
    url: importMap ? applyImportMap({
      importMap,
      specifier,
      importer
    }) : resolveUrl(specifier, importer),
    importer,
    defaultExtension
  });
};

const applyDefaultExtension = ({
  url,
  importer,
  defaultExtension
}) => {
  if (typeof defaultExtension === "string") {
    const extension = pathnameToExtension(url);

    if (extension === "") {
      return `${url}${defaultExtension}`;
    }

    return url;
  }

  if (defaultExtension === true) {
    const extension = pathnameToExtension(url);

    if (extension === "" && importer) {
      const importerPathname = hrefToPathname(importer);
      const importerExtension = pathnameToExtension(importerPathname);
      return `${url}${importerExtension}`;
    }
  }

  return url;
};

// eslint-disable-next-line import/no-unresolved
const nodeRequire = require;
const filenameContainsBackSlashes = __filename.indexOf("\\") > -1;
const url = filenameContainsBackSlashes ? `file://${__filename.replace(/\\/g, "/")}` : `file://${__filename}`;
const resolve = specifier => {
  return resolveImport({
    specifier,
    importer: url,
    importMap: memoizedGetImportMap(),
    defaultExtension: false
  });
}; // better for perf and helps rollup to tree shake this out
// when import.meta.resolve is not used

let memoizedImportMap;

const memoizedGetImportMap = () => {
  if (memoizedImportMap) return memoizedImportMap;
  memoizedImportMap = normalizeImportMap(importMap, url);
  return memoizedImportMap;
};

// https://eslint.org/docs/rules/
const ruleMap = {
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
  camelcase: {
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
  curly: {},
  "default-case": {},
  "dot-location": {
    options: ["property"]
  },
  "dot-notation": {},
  "eol-last": {
    disabled: true
  },
  eqeqeq: {},
  "generator-star-spacing": {
    options: ["both"]
  },
  "getter-return": {},
  "guard-for-in": {},
  "handle-callback-err": {
    severity: "warn"
  },
  indent: {
    // At first I wanted to used 'tab' so that people can choose identation width.
    // They could decide how much space a tab char takes (2, 4, 100) in their environment
    // But it comes with several issue:
    // - By default github will render a tab with 8 spaces
    // it can be fixed thank to an .editorconfig at the root of the github project (see http://stackoverflow.com/a/33831598)
    // - A user cannot globally defined how much space a tab should take
    // it cannot be fixed because it should be an OS preference that browser should follow
    // Even if tab are thoerically better, in practice spaces are causing less trouble
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
    options: ["unix"]
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
  "no-control-regex": {},
  "no-debugger": {},
  "no-delete-var": {},
  "no-div-regex": {},
  "no-dupe-args": {},
  "no-duplicate-case": {},
  "no-dupe-class-members": {},
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
  "prefer-rest-params": {
    severity: "warn"
  },
  "prefer-spread": {
    severity: "warn"
  },
  "prefer-template": {
    severity: "warn"
  },
  quote: {
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
  semi: {
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
  yoda: {}
};

// see https://github.com/prettier/eslint-config-prettier/blob/master/index.js
const eslintRuleNameHandledByPrettierArray = ["arrow-parens", "arrow-spacing", "brace-style", "comma-dangle", "comma-style", "computed-property-spacing", "curly", "dot-location", "eol-last", "generator-star-spacing", "indent", "jsx-quotes", "key-spacing", "keyword-spacing", "max-len", "no-extra-semi", "no-floating-decimal", "no-mixed-spaces-and-tabs", "no-multi-spaces", "no-multi-str", "no-multiple-empty-lines", "no-trailing-spaces", "no-unexpected-multiline", "no-whitespace-before-property", "object-curly-spacing", "one-var-declaration-per-line", "operator-linebreak", "padded-blocks", "quote", "quote-props", "semi", "semi-spacing", "space-before-blocks", "space-before-function-paren", "space-in-parens", "space-infix-ops", "template-curly-spacing", "wrap-iife", "yield-star-spacing"];

const importPluginRuleMap = {
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

const reactPluginRuleMap = {
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

const createConfig = ({
  projectPath,
  importMapRelativePath,
  importResolutionMethod,
  importResolutionResolverPath = "@jsenv/eslint-import-resolver",
  importResolutionLogLevel,
  prettierEnabled = true,
  jsxEnabled = false,
  reactPluginEnabled = false,
  reactPluginSettings = {},
  browser = true,
  node = true
}) => {
  // ../../ is because this code will executes from dist/commonjs/main.js
  const babelConfigFileUrl = resolve("../../babel.config.js");

  const babelConfigFilePathname = babelConfigFileUrl.slice("file://".length);
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
      configFile: babelConfigFilePathname
    }
  };
  const rules = ruleMapToStandardRuleMap(ruleMap);
  const settings = {
    extensions: [".js"]
  };
  const plugins = [];

  if (jsxEnabled) {
    parserOptions.ecmaFeatures.jsx = true;
    settings.extensions.push(".jsx");
  }

  if (importResolutionMethod) {
    plugins.push("import");
    Object.assign(rules, ruleMapToStandardRuleMap(importPluginRuleMap));

    if (importResolutionMethod === "import-map") {
      if (typeof projectPath !== "string") {
        throw new TypeError(`projectPath must be a string, got ${projectPath}`);
      }

      Object.assign(settings, {
        "import/resolver": {
          [importResolutionResolverPath]: {
            projectPath,
            importMapRelativePath,
            logLevel: importResolutionLogLevel,
            browser,
            node
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

  if (reactPluginEnabled) {
    plugins.push("react");
    settings.react = {
      version: "detect",
      ...reactPluginSettings
    };
    Object.assign(rules, ruleMapToStandardRuleMap(reactPluginRuleMap));
  }

  if (prettierEnabled) {
    eslintRuleNameHandledByPrettierArray.forEach(ruleName => {
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

exports.createConfig = createConfig;
//# sourceMappingURL=main.js.map
