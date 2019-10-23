import { ruleMap } from "./ruleMap.js"
import { eslintRuleNameHandledByPrettierArray } from "./eslintRuleNameHandledByPrettierArray.js"
import { importPluginRuleMap } from "./importPluginRuleMap.js"
import { reactPluginRuleMap } from "./reactPluginRuleMap.js"

export const createConfig = ({
  projectPath,
  importMapRelativePath,
  importResolutionMethod,
  importResolutionResolverPath = import.meta.require.resolve("@jsenv/eslint-import-resolver"),
  importResolutionResolverOptions = {},
  prettierEnabled = true,
  jsxEnabled = false,
  reactPluginEnabled = false,
  reactPluginSettings = {},
  browser = true,
  node = true,
}) => {
  const babelConfigFileUrl = import.meta.resolve(
    // ../../ because this code will executes from dist/commonjs/main.js
    "../../babel.config.js",
  )
  const babelConfigFilePathname = babelConfigFileUrl.slice("file://".length)

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
      configFile: babelConfigFilePathname,
    },
  }

  const rules = ruleMapToStandardRuleMap(ruleMap)

  const settings = {
    extensions: [".js"],
  }

  const plugins = []

  if (jsxEnabled) {
    parserOptions.ecmaFeatures.jsx = true
    settings.extensions.push(".jsx")
  }

  if (importResolutionMethod) {
    plugins.push("import")
    Object.assign(rules, ruleMapToStandardRuleMap(importPluginRuleMap))

    if (importResolutionMethod === "import-map") {
      if (typeof projectPath !== "string") {
        throw new TypeError(`projectPath must be a string, got ${projectPath}`)
      }
      Object.assign(settings, {
        "import/resolver": {
          [importResolutionResolverPath]: {
            projectPath,
            importMapRelativePath,
            browser,
            node,
            ...importResolutionResolverOptions,
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

  if (reactPluginEnabled) {
    plugins.push("react")
    settings.react = {
      version: "detect",
      ...reactPluginSettings,
    }
    Object.assign(rules, ruleMapToStandardRuleMap(reactPluginRuleMap))
  }

  if (prettierEnabled) {
    eslintRuleNameHandledByPrettierArray.forEach((ruleName) => {
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
