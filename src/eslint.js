import { rules } from "./rules/index.js"
import { importPlugin } from "./plugins/index.js"

const eslintRuleToStandardFormat = ({
  name,
  severity = "error",
  disabled = false,
  options = [],
  ...rest
}) => {
  if (severity !== "error" && severity !== "warn") {
    throw new Error(`rule severity must be "error" or "warn", got ${severity} for ${name}`)
  }

  const extraProperties = Object.keys(rest)
  if (extraProperties.length > 0) {
    throw new Error(`unexpected rule properties: ${extraProperties}`)
  }

  return [disabled ? "off" : severity, ...options]
}

const ruleArrayToRuleMap = (ruleArray) => {
  const ruleMap = {}

  ruleArray.forEach((rule) => {
    ruleMap[rule.name] = eslintRuleToStandardFormat(rule)
  })

  return ruleMap
}

export const config = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      spread: true,
      restParams: true,
      defaultParams: true,
      destructuring: true,
      objectLiteralShorthandMethods: true,
    },
  },
  plugins: [importPlugin.name],
  settings: {
    [importPlugin.name]: importPlugin.settings,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // array of object makes things more complex
  // we should use a map of object as eslint does naturally
  rules: ruleArrayToRuleMap([...rules, ...importPlugin.rules]),
}
