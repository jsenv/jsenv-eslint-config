const { rollup } = require("rollup")
const babel = require("rollup-plugin-babel")
const path = require("path")

const root = path.resolve(__dirname, "../")
const inputFile = `${root}/index.js`
const outputFile = `${root}/dist/index.js`

const compile = async () => {
  const bundle = await rollup({
    input: inputFile,
    plugins: [
      babel({
        babelrc: false,
        exclude: "node_modules/**",
        plugins: ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-transform-spread"],
      }),
    ],
  })

  await bundle.write({
    format: "cjs",
    file: outputFile,
    sourcemap: true,
  })
  console.log("build done")
}
compile()
