import { enabledArray } from "./enabledArray.js"
import { prettierConflictArray } from "../prettierConflictArray.js/index.js"

export const rules = enabledArray.map((rule) => {
  return {
    ...rule,
    disabled: rule.disabled || prettierConflictArray.indexOf(rule) > -1,
  }
})
