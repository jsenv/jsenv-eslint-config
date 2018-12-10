import { enabledArray } from "./enabledArray.js"

export const plugin = {
  name: "import",
  settings: {
    extensions: [".js", ".jsx"],
  },
  rules: enabledArray,
}
