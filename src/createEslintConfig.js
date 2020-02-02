import { createRequire } from "module"
import { resolveUrl, urlToFileSystemPath, assertAndNormalizeDirectoryUrl } from "@jsenv/util"
import { eslintRulesHandledByPrettier } from "./internal/eslintRulesHandledByPrettier.js"
import { jsenvEslintRuleMap } from "./jsenvEslintRuleMap.js"
import { jsenvEslintRuleMapForImport } from "./jsenvEslintRuleMapForImport.js"
import { jsenvEslintRuleMapForReact } from "./jsenvEslintRuleMapForReact.js"

let importResolverFilePathFallback
let jsenvEslintConfigDirectoryUrl
// we are being executed from dist/commonjs/main.cjs (certainly node < 13)
if (typeof require === "function") {
  importResolverFilePathFallback = require.resolve("@jsenv/importmap-eslint-resolver")
  jsenvEslintConfigDirectoryUrl = resolveUrl(
    // remove dist/commonjs/
    "../../",
    import.meta.url,
  )
} else {
  importResolverFilePathFallback = createRequire(import.meta.url).resolve(
    "@jsenv/importmap-eslint-resolver",
  )
  jsenvEslintConfigDirectoryUrl = resolveUrl(
    // remove src/
    "../",
    import.meta.url,
  )
}
const babelConfigFileUrl = resolveUrl("babel.config.cjs", jsenvEslintConfigDirectoryUrl)
const babelConfigFilePath = urlToFileSystemPath(babelConfigFileUrl)

export const createEslintConfig = ({
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
  eslintRuleMapForReact = jsenvEslintRuleMapForReact,
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
      objectLiteralShorthandMethods: true,
    },
    requireConfigFile: false,
    // https://babeljs.io/docs/en/options#parseropts
    allowAwaitOutsideFunction: true,
    babelOptions: {
      configFile: babelConfigFilePath,
    },
  }

  const rules = ruleMapToStandardRuleMap(eslintRuleMap)

  const settings = {
    extensions: [".js"],
  }

  const plugins = []

  if (importResolutionMethod) {
    plugins.push("import")
    Object.assign(rules, ruleMapToStandardRuleMap(eslintRuleMapForImport))

    if (importResolutionMethod === "import-map") {
      projectDirectoryUrl = assertAndNormalizeDirectoryUrl(projectDirectoryUrl)
      Object.assign(settings, {
        "import/resolver": {
          [importResolverFilePath]: {
            projectDirectoryUrl,
            importMapFileRelativeUrl,
            insideProjectAssertion: true,
            browser,
            node,
            ...importResolverOptions,
          },
        },
      })
    } else if (importResolutionMethod === "node") {
      Object.assign(settings, {
        "import/resolver": { node: {} },
      })
    } else {
      throw new Error(`unexpected importResolutionMethod, got ${importResolutionMethod}`)
    }
  }

  if (react) {
    plugins.push("react")
    settings.react = {
      version: "detect",
      ...reactPluginSettings,
    }
    Object.assign(rules, ruleMapToStandardRuleMap(eslintRuleMapForReact))
  }

  if (jsx) {
    parserOptions.ecmaFeatures.jsx = true
    settings.extensions.push(".jsx")
  }

  if (prettier) {
    eslintRulesHandledByPrettier.forEach((ruleName) => {
      if (!ruleName in rules) {
        throw new Error(`unknow rule name ${ruleName}`)
      }
      rules[ruleName][0] = "off"
    })
  }

  return {
    parser: "babel-eslint",
    parserOptions,
    env: {
      browser,
      node,
      es6: true,
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
      valueOf: "off",
    },
    settings,
    rules,
    plugins,
  }
}

const ruleMapToStandardRuleMap = (ruleMap) => {
  const standardRuleMap = {}

  Object.keys(ruleMap).forEach((name) => {
    const rule = ruleMap[name]

    const { severity = "error", disabled = false, options = [], ...rest } = rule

    if (severity !== "error" && severity !== "warn") {
      throw new Error(`rule severity must be "error" or "warn", got ${severity} for ${name}`)
    }
    const extraProperties = Object.keys(rest)
    if (extraProperties.length > 0) {
      throw new Error(`unexpected rule properties: ${extraProperties} on ${name}`)
    }

    standardRuleMap[name] = [disabled ? "off" : severity, ...options]
  })

  return standardRuleMap
}
