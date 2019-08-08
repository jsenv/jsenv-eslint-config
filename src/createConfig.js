import { resolve } from "path"
import { ruleMap } from "./ruleMap.js"
import { eslintRuleNameHandledByPrettierArray } from "./eslintRuleNameHandledByPrettierArray.js"
import { importPluginRuleMap } from "./importPluginRuleMap.js"
import { reactPluginRuleMap } from "./reactPluginRuleMap.js"

// ../../ is because this code will executes from dist/commonjs/main.js
const root = resolve(__dirname, "../../")

export const createConfig = ({
  projectPath,
  prettierEnabled = true,
  importPluginEnabled = true,
  jsxEnabled = false,
  reactPluginEnabled = false,
  reactPluginSettings = {},
}) => {
  const babelConfigFile = `${root}/babel.config.js`

  const config = {
    parser: "babel-eslint",
    parserOptions: {
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
    },
    plugins: [],
    settings: {
      extensions: [".js"],
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    rules: ruleMapToStandardRuleMap(ruleMap),
  }

  if (prettierEnabled) {
    eslintRuleNameHandledByPrettierArray.forEach((ruleName) => {
      if (!ruleName in config.rules) {
        throw new Error(`unknow rule name ${ruleName}`)
      }
      config.rules[ruleName][0] = "off"
    })
  }

  if (jsxEnabled) {
    config.parserOptions.ecmaFeatures.jsx = true
    config.settings.extensions.push(".jsx")
  }

  if (importPluginEnabled) {
    if (typeof projectPath !== "string") {
      throw new TypeError(`projectPath must be a string, got ${projectPath}`)
    }

    config.plugins.push("import")
    config.settings.import = {
      "import/resolver": {
        [import.meta.require.resolve("@jsenv/eslint-import-resolver")]: {
          projectPath,
        },
      },
    }
    Object.assign(config.rules, ruleMapToStandardRuleMap(importPluginRuleMap))
  }

  if (reactPluginEnabled) {
    config.plugins.push("react")
    config.settings.react = {
      version: "detect",
      ...reactPluginSettings,
    }
    Object.assign(config.rules, ruleMapToStandardRuleMap(reactPluginRuleMap))
  }

  return config
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
