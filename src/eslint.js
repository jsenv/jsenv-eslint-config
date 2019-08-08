import { resolve } from "path"
import { rules } from "./rules.js"
import { createImportPlugin } from "./import-plugin/createImportPlugin.js"

const root = resolve(__dirname, "../")

export const createConfig = ({ projectPath, importPluginEnabled = true, jsxEnabled = true }) => {
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
    // array of object makes things more complex
    // we should use a map of object as eslint does naturally
    rules: rulesToStandardRules(rules),
  }

  if (jsxEnabled) {
    config.parserOptions.ecmaFeatures.jsx = true
    config.settings.extensions.push(".jsx")
  }

  if (importPluginEnabled) {
    const importPlugin = createImportPlugin({ projectPath })
    config.plugins.push(importPlugin.name)
    config.settings[importPlugin.name] = importPlugin.settings
    Object.assign(config.rules, rulesToStandardRules(importPlugin.rules))
  }

  return config
}

const rulesToStandardRules = (rules) => {
  const standardRules = {}

  Object.keys(rules).forEach((name) => {
    const rule = rules[name]

    const { severity = "error", disabled = false, options = [], ...rest } = rule

    if (severity !== "error" && severity !== "warn") {
      throw new Error(`rule severity must be "error" or "warn", got ${severity} for ${name}`)
    }
    const extraProperties = Object.keys(rest)
    if (extraProperties.length > 0) {
      throw new Error(`unexpected rule properties: ${extraProperties}`)
    }

    standardRules[name] = [disabled ? "off" : severity, ...options]
  })

  return standardRules
}
