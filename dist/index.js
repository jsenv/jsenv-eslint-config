'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

const mergeArrayElements = (firstArray, secondArray, compare = (a, b) => a.name === b.name) => {
  const mergedElements = [];
  firstArray.forEach(elementInFirstArray => {
    const existingRule = secondArray.find(elementInSecondArray => {
      return compare(elementInFirstArray, elementInSecondArray);
    });

    if (!existingRule) {
      mergedElements.push(_objectSpread({}, elementInFirstArray));
    }
  });
  secondArray.forEach(elementInSecondArray => {
    mergedElements.push(_objectSpread({}, firstArray.find(elementInFirstArray => compare(elementInFirstArray, elementInSecondArray)) || {}, elementInSecondArray));
  });
  return mergedElements;
};

const babelParserOptions = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      spread: true,
      restParams: true,
      defaultParams: true,
      destructuring: true,
      objectLiteralShorthandMethods: true
    }
  }
};

// to be converted
// rules: {
// 	"boolean-style": [2, "boolean"],
// 	"define-flow-type": 1,
// 	"delimiter-dangle": [2, "never"],
// 	"generic-spacing": [2, "never"],
// 	"no-primitive-constructor-types": 2,
// 	"no-types-missing-file-annotation": ["off"],
// 	"no-weak-types": ["off"],
// 	"object-type-delimiter": [2, "comma"],
// 	"require-parameter-type": ["off"],
// 	"require-return-type": [
// 		"off",
// 		"always",
// 		{
// 			annotateUndefined: "never"
// 		}
// 	],
// 	"require-valid-file-annotation": ["off"],
// 	semi: ["off", "always"],
// 	"space-after-type-colon": [2, "always"],
// 	"space-before-generic-bracket": [2, "never"],
// 	"space-before-type-colon": [2, "never"],
// 	"type-id-match": [2, "^([A-Z][a-z0-9]+)+Type$"],
// 	"union-intersection-spacing": [2, "always"],
// 	"use-flow-type": 1,
// 	"valid-syntax": 1
// }
const rules = [];

const flowtype = {
  name: "flow",
  settings: {
    onlyFilesWithFlowAnnotation: true
  },
  rules,
  enabled: false // disabled for now, when flow will allow to have untyped module boundaries I will reconsider
  // https://github.com/facebook/flow/issues/4540

};

const defaultRule = {
  name: "default"
};
const noUnresolved = {
  name: "no-unresolved",
  options: [{
    commonjs: true,
    amd: false,
    caseSensitive: false
  }]
};
const named = {
  name: "named"
};
const namespace = {
  name: "namespace",
  options: [{
    allowComputed: true
  }]
};
const noAbsolutePath = {
  name: "no-absolute-path"
};
const noDynamicRequire = {
  name: "no-dynamic-require"
};
const exportRule = {
  name: "export"
};
const noNamedAsDefault = {
  name: "no-named-as-default",
  severity: "warn"
};
const first = {
  name: "first",
  severity: "warn"
};
const noDuplicate = {
  name: "no-duplicates",
  severity: "warn"
};
const newLineAfterImport = {
  name: "newline-after-import",
  severity: "warn"
};
const maxDependency = {
  name: "max-dependencies",
  severity: "warn",
  options: [{
    max: 10
  }]
};
const noAnonymousDefaultExport = {
  name: "no-anonymous-default-export",
  options: [{
    allowArray: true,
    allowArrowFunction: false,
    allowAnonymousClass: false,
    allowAnonymousFunction: false,
    allowLiteral: true,
    allowObject: true
  }],
  disabled: true
};
const rules$1 = [defaultRule, noUnresolved, named, namespace, noAbsolutePath, noDynamicRequire, exportRule, noNamedAsDefault, first, noDuplicate, newLineAfterImport, maxDependency, noAnonymousDefaultExport];

const importPlugin = {
  name: "import",
  settings: {
    extensions: [".js", ".jsx"]
  },
  rules: rules$1,
  enabled: true
};

// https://eslint.org/docs/rules/
const acessorPairs = {
  name: "accessor-pairs"
};
const arrayCallbackReturn = {
  name: "array-callback-return"
};
const blockScopedVar = {
  name: "block-scoped-var"
};
const commaDangle = {
  name: "comma-dangle",
  options: [{
    arrays: "only-multiline",
    objects: "only-multiline",
    imports: "only-multiline",
    exports: "only-multiline",
    functions: "only-multiline"
  }]
};
const curly = {
  name: "curly"
};
const defaultCase = {
  name: "default-case"
};
const dotNotation = {
  name: "dot-notation"
};
const dotLocation = {
  name: "dot-location",
  options: ["property"]
};
const eqeqeq = {
  name: "eqeqeq"
};
const getterReturn = {
  name: "getter-return"
};
const guardForIn = {
  name: "guard-for-in"
};
const consistentReturn = {
  name: "consistent-return"
};
const noConditionalAssignement = {
  name: "no-cond-assign"
};
const noConstantCondition = {
  name: "no-constant-condition"
};
const noControlRegEx = {
  name: "no-control-regex"
};
const noDebugger = {
  name: "no-debugger"
};
const noDuplicateArgs = {
  name: "no-dupe-args"
};
const noDuplicateKeys = {
  name: "no-dupe-keys"
};
const noDuplicateCase = {
  name: "no-duplicate-case"
};
const noEmptyCharacterClass = {
  name: "no-empty-character-class"
};
const noExtraAssignment = {
  name: "no-ex-assign"
};
const noExtraBooleanCasting = {
  name: "no-extra-boolean-cast"
};
const noExtraSemiColon = {
  name: "no-extra-semi",
  disabled: true
};
const noFunctionAssignment = {
  name: "no-func-assign"
};
const noInnerDeclaration = {
  name: "no-inner-declarations"
};
const noInvalidRegExp = {
  name: "no-invalid-regexp"
};
const noIrregularWhiteSpace = {
  name: "no-irregular-whitespace"
};
const noNegatedInLHS = {
  name: "no-negated-in-lhs",
  disabled: true // disabled because deprecated in favor of no-unsafe-negation
  // https://eslint.org/docs/rules/no-negated-in-lhs

};
const noObjectCall = {
  name: "no-obj-calls"
};
const noRegExSpace = {
  name: "no-regex-spaces"
};
const noSparseArray = {
  name: "no-sparse-arrays"
};
const noUnreachable = {
  name: "no-unreachable"
};
const useIsNaN = {
  name: "use-isnan"
};
const validTypeOf = {
  name: "valid-typeof"
};
const noUnexpectedMultipleline = {
  name: "no-unexpected-multiline"
};
const noAlert = {
  name: "no-alert"
};
const noCaller = {
  name: "no-caller"
};
const noCaseDeclaration = {
  name: "no-case-declarations"
};
const noDivRegex = {
  name: "no-div-regex"
};
const noElseReturn = {
  name: "no-else-return"
};
const noEmptyPattern = {
  name: "no-empty-pattern"
};
const noEqualNull = {
  name: "no-eq-null"
};
const noEval = {
  name: "no-eval",
  disabled: true // Because every one knows eval is a bad idea
  // so when it's used it's always for a good reason

};
const noExtendNative = {
  name: "no-extend-native"
};
const noExtraBind = {
  name: "no-extra-bind"
};
const noExtraLabel = {
  name: "no-extra-label"
};
const noFallThrough = {
  name: "no-fallthrough"
};
const noFloatingDecimal = {
  name: "no-floating-decimal"
};
const noImplicitCoercion = {
  name: "no-implicit-coercion"
};
const noImplicitGlobal = {
  name: "no-implicit-globals"
};
const noImpliedEval = {
  name: "no-implied-eval"
};
const noIterator = {
  name: "no-iterator"
};
const noLabel = {
  name: "no-labels"
};
const noLoneBlock = {
  name: "no-lone-blocks"
};
const noLoopFunction = {
  name: "no-loop-func"
};
const noMultipleSpace = {
  name: "no-multi-spaces"
};
const noMultipleString = {
  name: "no-multi-str"
};
const noNativeReassignment = {
  name: "no-native-reassign"
};
const noNewFunction = {
  name: "no-new-func"
};
const noNewWrapper = {
  name: "no-new-wrappers"
};
const noNew = {
  name: "no-new"
};
const noOctalEscape = {
  name: "no-octal-escape"
};
const noOctal = {
  name: "no-octal"
};
const noProto = {
  name: "no-proto"
};
const noRedeclare = {
  name: "no-redeclare"
};
const noReturnAssignment = {
  name: "no-return-assign",
  options: ["always"]
};
const noScriptUrl = {
  name: "no-script-url"
};
const noSelfAssignment = {
  name: "no-self-assign"
};
const noSelfCompare = {
  name: "no-self-compare"
};
const noSequence = {
  name: "no-sequences"
};
const noThrowLiteral = {
  name: "no-throw-literal"
};
const noUnmodifiedLoopCondition = {
  name: "no-unmodified-loop-condition"
};
const noUnusedExpression = {
  name: "no-unused-expressions"
};
const noUnusedLabel = {
  name: "no-unused-labels"
};
const noUselessCall = {
  name: "no-useless-call"
};
const noUselessConcat = {
  name: "no-useless-concat"
};
const noVoid = {
  name: "no-void"
};
const noWarningComments = {
  name: "no-warning-comments",
  disabled: true // Because I like warning comments

};
const noWith = {
  name: "no-with"
};
const wrapIIFE = {
  name: "wrap-iife",
  options: ["inside"]
};
const yoda = {
  name: "yoda"
};
const noDeleteVar = {
  name: "no-delete-var"
};
const noLabelVar = {
  name: "no-label-var"
};
const noShadowRestrictedName = {
  name: "no-shadow-restricted-names"
};
const noUndefInit = {
  name: "no-undef-init"
};
const noUndef = {
  name: "no-undef",
  options: [{
    typeof: true
  }]
};
const noUnusedVar = {
  name: "no-unused-vars"
};
const noUseBeforeDefine = {
  name: "no-use-before-define",
  options: ["nofunc"]
};
const handleCallbackError = {
  name: "handle-callback-err",
  severity: "warn"
};
const noMixedRequire = {
  name: "no-mixed-requires",
  options: [{
    grouping: true,
    allowCall: true
  }]
};
const noNewRequire = {
  name: "no-new-require"
};
const noPathConcat = {
  name: "no-path-concat"
};
const noRestrictedImport = {
  name: "no-restricted-imports",
  options: ["domain", "freelist", "smalloc", "sys", "colors"]
};
const noRestrictedModule = {
  name: "no-restricted-modules",
  options: ["domain", "freelist", "smalloc", "sys", "colors"]
};
const noBracketSpacing = {
  name: "array-bracket-spacing",
  options: ["never"]
};
const braceStyle = {
  name: "brace-style",
  options: ["stroustrup"]
};
const camelcase = {
  name: "camelcase",
  options: [{
    properties: "always"
  }]
};
const commaSpacing = {
  name: "comma-spacing",
  options: [{
    before: false,
    after: true
  }]
};
const commaStyle = {
  name: "comma-style",
  options: ["last"]
};
const computedPropertySpacing = {
  name: "computed-property-spacing",
  options: ["never"]
};
const endOfLineLast = {
  name: "eol-last"
};
const indent = {
  name: "indent",
  options: [2, {
    SwitchCase: 1
  }] // At first I wanted to used 'tab' so that people can choose identation width.
  // They could decide how much space a tab char takes (2, 4, 100) in their environment
  // But it comes with several issue:
  // - By default github will render a tab with 8 spaces
  // it can be fixed thank to an .editorconfig at the root of the github project (see http://stackoverflow.com/a/33831598)
  // - A user cannot globally defined how much space a tab should take
  // it cannot be fixed because it should be an OS preference that browser should follow
  // Even if tab are thoerically better, in practice spaces are causing less trouble

};
const jsxQuote = {
  name: "jsx-quotes"
};
const keySpacing = {
  name: "key-spacing",
  options: [{
    beforeColon: false,
    afterColon: true
  }]
};
const keywordSpacing = {
  name: "keyword-spacing"
};
const lineBreakStyle = {
  name: "linebreak-style",
  options: ["unix"]
};
const maxNestedCallback = {
  name: "max-nested-callbacks",
  severity: "warn",
  options: [4]
};
const newCap = {
  name: "new-cap",
  options: [{
    newIsCap: true,
    capIsNew: true
  }]
};
const newParens = {
  name: "new-parens"
};
const noArrayConstructor = {
  name: "no-array-constructor"
};
const noLonelyIf = {
  name: "no-lonely-if"
};
const noMixedSpaceAndTab = {
  name: "no-mixed-spaces-and-tabs"
};
const noMultipleEmptyLine = {
  name: "no-multiple-empty-lines",
  options: [{
    max: 1
  }]
};
const noNestedTernary = {
  name: "no-nested-ternary"
};
const noNegatedCondition = {
  name: "no-negated-condition"
};
const noNexObject = {
  name: "no-new-object"
};
const noRestrictedSyntax = {
  name: "no-restricted-syntax",
  options: ["WithStatement"]
};
const noWhiteSpaceBeforeProperty = {
  name: "no-whitespace-before-property"
};
const noSpacedFunction = {
  name: "no-spaced-func"
};
const noTrailingSpace = {
  name: "no-trailing-spaces"
};
const noUndeededTernary = {
  name: "no-unneeded-ternary"
};
const objectCurlySpacing = {
  name: "object-curly-spacing",
  options: ["always"]
};
const oneVar = {
  name: "one-var",
  options: ["never"]
};
const oneVarDeclarationPerLine = {
  name: "one-var-declaration-per-line"
};
const operatorAssignment = {
  name: "operator-assignment",
  options: ["always"]
};
const operatorLineBreak = {
  name: "operator-linebreak",
  options: ["after", {
    overrides: {
      "?": "ignore",
      ":": "ignore"
    }
  }]
};
const paddedBlock = {
  name: "padded-blocks",
  options: ["never"]
};
const quoteProp = {
  name: "quote-props",
  options: ["as-needed", {
    keywords: false,
    numbers: true,
    // unnecessary: false so that when you fall into edge cases
    // you can use the quoting style you want
    unnecessary: false
  }]
};
const quote = {
  name: "quote",
  options: ["double"],
  disabled: true // disabled because it becomes painfull when switching between "" and `` (template literals)

};
const semiSpacing = {
  name: "semi-spacing",
  options: [{
    before: false,
    after: true
  }]
};
const semi = {
  name: "semi",
  options: ["never"]
};
const spaceBeforeBlock = {
  name: "space-before-blocks",
  options: ["always"]
};
const spaceInParenthesis = {
  name: "space-in-parens",
  options: ["never"]
};
const spaceAroundInfixOperator = {
  name: "space-infix-ops"
};
const spaceAroundUnaryOperator = {
  name: "space-unary-ops"
};
const spacedComment = {
  name: "spaced-comment",
  options: ["always", {
    markers: ["!"]
  }],
  disabled: true
};
const arrowParenthesis = {
  name: "arrow-parens",
  options: ["as-needed"]
};
const arrowSpacing = {
  name: "arrow-spacing",
  options: [{
    before: true,
    after: true
  }]
};
const constructorSuper = {
  name: "constructor-super"
};
const generatorStarSpacing = {
  name: "generator-star-spacing",
  options: ["both"]
};
const noClassAssignment = {
  name: "no-class-assign"
};
const noConstAssignment = {
  name: "no-const-assign"
};
const noDuplicateClassMember = {
  name: "no-dupe-class-members"
};
const noNewSymbol = {
  name: "no-new-symbol"
};
const noThisBeforeSuper = {
  name: "no-this-before-super"
};
const noUselessConstructor = {
  name: "no-useless-constructor"
};
const templateCurlySpacing = {
  name: "template-curly-spacing"
};
const yieldStarSpacing = {
  name: "yield-star-spacing",
  options: ["both"]
};
const validJSDoc = {
  name: "valid-jsdoc",
  options: [{
    requireReturn: false,
    prefer: {
      returns: "return"
    }
  }]
};
const spaceBeforeFunctionParenthesis = {
  name: "space-before-function-paren",
  options: ["never"]
};
const maxLineLength = {
  name: "max-len",
  severity: "warn",
  options: [120, 4, {
    ignoreComments: true,
    ignoreUrls: true,
    ignorePattern: "^\\s*var\\s.+=\\s.+\\/.*?\\/;$"
  }]
};
const preferConst = {
  name: "prefer-const",
  options: [{
    destructuring: "all",
    ignoreReadBeforeAssign: true
  }]
};
const preferRestParam = {
  name: "prefer-rest-params",
  severity: "warn"
};
const preferSpread = {
  name: "prefer-spread",
  severity: "warn"
};
const preferTemplate = {
  name: "prefer-template",
  severity: "warn"
};
const objectShortHand = {
  name: "object-shorthand",
  severity: "warn",
  options: ["always"]
};

const env = {
  browser: true,
  node: true,
  es6: true
};
const rules$2 = [acessorPairs, arrayCallbackReturn, arrowParenthesis, arrowSpacing, blockScopedVar, braceStyle, camelcase, commaDangle, commaSpacing, commaStyle, computedPropertySpacing, consistentReturn, constructorSuper, curly, defaultCase, dotLocation, dotNotation, endOfLineLast, eqeqeq, generatorStarSpacing, getterReturn, guardForIn, handleCallbackError, indent, jsxQuote, keySpacing, keywordSpacing, lineBreakStyle, maxLineLength, maxNestedCallback, newCap, newParens, noAlert, noArrayConstructor, noBracketSpacing, noCaller, noCaseDeclaration, noClassAssignment, noConditionalAssignement, noConstantCondition, noConstAssignment, noControlRegEx, noDebugger, noDeleteVar, noDivRegex, noDuplicateArgs, noDuplicateCase, noDuplicateClassMember, noDuplicateKeys, noElseReturn, noEmptyCharacterClass, noEmptyPattern, noEqualNull, noEval, noExtendNative, noExtraAssignment, noExtraBind, noExtraBooleanCasting, noExtraLabel, noExtraSemiColon, noFallThrough, noFloatingDecimal, noFunctionAssignment, noImplicitCoercion, noImplicitGlobal, noImpliedEval, noInnerDeclaration, noInvalidRegExp, noIrregularWhiteSpace, noIterator, noLabel, noLabelVar, noLoneBlock, noLonelyIf, noLoopFunction, // noMagicNumber,
noMixedRequire, noMixedSpaceAndTab, noMultipleEmptyLine, noMultipleSpace, noMultipleString, noNativeReassignment, noNegatedCondition, noNegatedInLHS, noNestedTernary, noNew, noNewFunction, noNewRequire, noNewSymbol, noNewWrapper, noNexObject, noObjectCall, noOctal, noOctalEscape, noPathConcat, noProto, noRedeclare, noRegExSpace, noRestrictedImport, noRestrictedModule, noRestrictedSyntax, noReturnAssignment, noScriptUrl, noSelfAssignment, noSelfCompare, noSequence, noShadowRestrictedName, noSpacedFunction, noSparseArray, noThisBeforeSuper, noThrowLiteral, noTrailingSpace, noUndeededTernary, noUndef, // noUndefined,
noUndefInit, noUnexpectedMultipleline, noUnmodifiedLoopCondition, noUnreachable, noUnusedExpression, noUnusedLabel, noUnusedVar, noUseBeforeDefine, noUselessCall, noUselessConcat, noUselessConstructor, noVoid, noWarningComments, noWhiteSpaceBeforeProperty, noWith, objectCurlySpacing, objectShortHand, oneVar, oneVarDeclarationPerLine, operatorAssignment, operatorLineBreak, paddedBlock, preferConst, preferRestParam, preferSpread, preferTemplate, quote, quoteProp, semi, semiSpacing, spaceAroundInfixOperator, spaceAroundUnaryOperator, spaceBeforeBlock, spaceBeforeFunctionParenthesis, spacedComment, spaceInParenthesis, templateCurlySpacing, useIsNaN, validJSDoc, validTypeOf, wrapIIFE, yieldStarSpacing, yoda];
const plugins = [flowtype, importPlugin];
const defaultOptions = {
  env,
  plugins,
  rules: rules$2
};

const rulesHandledByPrettier = [arrowParenthesis, arrowSpacing, // blockSpacing,
braceStyle, commaDangle, commaStyle, computedPropertySpacing, curly, dotLocation, endOfLineLast, // functionCallSpacing,
// functionParenthesisNewLine,
// generatorStar,
generatorStarSpacing, // implicitArrowLinebreak,
indent, // indentLegacy,
jsxQuote, keySpacing, keywordSpacing, // lineAroundComment,
maxLineLength, // multilineTernary,
// newLinePerChainedCall,
// newParenthesis,
// noArrowCondition,
// noCommaDangle,
// noConfusingArrow,
// noExtraParenthesis,
noExtraSemiColon, noFloatingDecimal, // noMixedOperator,
noMixedSpaceAndTab, noMultipleEmptyLine, noMultipleSpace, // noReservedKey,
// noSpaceBeforeSemi,
noSpacedFunction, // noTab,
noTrailingSpace, noUnexpectedMultipleline, noWhiteSpaceBeforeProperty, // noWrapFunction,
// nonBlockStatementBodyPosition,
// objectCurlyNewline,
objectCurlySpacing, // objectPropertyNewLine,
oneVarDeclarationPerLine, operatorLineBreak, paddedBlock, quote, quoteProp, // restSpreadSpacing,
semi, semiSpacing, // semiStyle,
// spaceAfterFunctionName,
// spaceAfterKeyword,
spaceAroundInfixOperator, // spaceReturnThrowCase,
spaceAroundUnaryOperator, spaceBeforeBlock, spaceBeforeFunctionParenthesis, // spaceBeforeKeyword,
// spaceInBracket,
spaceInParenthesis, // spaceAroundUnaryWordOperator,
// switchColonSpacing,
templateCurlySpacing, // templateTagSpacing,
// unicodeBom,
wrapIIFE, // wrapRegex,
yieldStarSpacing].map(rule => {
  return _objectSpread({}, rule, {
    disabled: true
  });
});
const prettierOptions = {
  rules: rulesHandledByPrettier
};

const mergeOptions = (...objects) => {
  const options = objects.reduce((accumulator, object) => {
    if (typeof object === undefined || object === null) {
      return accumulator;
    }

    return _objectSpread({}, accumulator, object, {
      parserOptions: object.parserOptions ? _objectSpread({}, accumulator.parserOptions, object.parserOptions) : accumulator.parserOptions,
      env: object.env ? _objectSpread({}, accumulator.env, object.env) : accumulator.env,
      globals: object.globals ? _objectSpread({}, accumulator.globals, object.globals) : accumulator.globals,
      settings: object.settings ? _objectSpread({}, accumulator.settings, object.settings) : accumulator.settings,
      plugins: object.plugins ? _toConsumableArray(accumulator.plugins).concat(_toConsumableArray(object.plugins)) : accumulator.plugins,
      rules: object.rules ? mergeArrayElements(accumulator.rules, object.rules) : accumulator.rules
    });
  }, {
    env: {},
    globals: {},
    settings: {},
    plugins: [],
    rules: []
  });
  return options;
};

const createEslintRule = (_ref) => {
  let {
    name,
    severity = "error",
    disabled = false,
    options = []
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "severity", "disabled", "options"]);

  if (severity !== "error" && severity !== "warn") {
    throw new Error(`rule severity must be "error" or "warn", got ${severity} for ${name}`);
  }

  const extraProperties = Object.keys(rest);

  if (extraProperties.length > 0) {
    throw new Error(`unexpected rule properties: ${extraProperties}`);
  }

  return [disabled ? "off" : severity].concat(_toConsumableArray(options));
};

const createConfig = options => {
  const ruleMap = {};
  options.rules.forEach(rule => {
    ruleMap[rule.name] = createEslintRule(rule);
  });
  const plugins = options.plugins.filter(plugin => plugin.enabled).map(plugin => {
    options.settings[plugin.name] = plugin.settings;
    plugin.rules.forEach(pluginRule => {
      ruleMap[`${plugin.name}/${pluginRule.name}`] = createEslintRule(pluginRule);
    });
    return plugin.name;
  });
  return _objectSpread({}, options, {
    plugins,
    rules: ruleMap
  });
};
const config = createConfig(mergeOptions(defaultOptions, babelParserOptions, prettierOptions));

exports.mergeOptions = mergeOptions;
exports.createConfig = createConfig;
exports.config = config;
//# sourceMappingURL=index.js.map
