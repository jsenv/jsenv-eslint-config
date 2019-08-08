import { rules } from "./rules.js"

export const createImportPlugin = ({ projectPath }) => {
  return {
    name: "import",
    settings: {
      "import/resolver": {
        [import.meta.require.resolve("@jsenv/eslint-import-resolver")]: {
          projectPath,
        },
      },
    },
    rules,
  }
}
