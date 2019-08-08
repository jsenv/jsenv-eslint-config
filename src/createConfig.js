import { resolve } from "path"
import { ruleMap } from "./ruleMap.js"
import { eslintRuleNameHandledByPrettierArray } from "./eslintRuleNameHandledByPrettierArray.js"
import { importPluginRuleMap } from "./importPluginRuleMap.js"
import { reactPluginRuleMap } from "./reactPluginRuleMap.js"

// ../../ is because this code will executes from dist/commonjs/main.js
const root = resolve(__dirname, "../../")

export const createConfig = ({
  projectPath,
  importMapRelativePath,
  importResolutionMethod,
  prettierEnabled = true,
  jsxEnabled = false,
  reactPluginEnabled = false,
  reactPluginSettings = {},
}) => {
  const babelConfigFile = `${root}/babel.config.js`

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
      configFile: babelConfigFile,
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
          [import.meta.require.resolve("@jsenv/eslint-import-resolver")]: {
            projectPath,
            importMapRelativePath,
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
      browser: true,
      node: true,
      es6: true,
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
