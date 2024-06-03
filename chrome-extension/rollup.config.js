import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "js/index.js",
    plugins: [
      nodeResolve(),
      babel({
        presets: ["@babel/preset-env"],
        babelHelpers: "bundled"
      }),

    ],
    context: "null",
    moduleContext: "null",
    output: {
      exports: "named",
      file: "dist/main.js",
      format: "iife",
      name: "lighterhtml"
    }
  },
  {
    input: "js/background.js",
    plugins: [
      nodeResolve(),
      babel({
        presets: ["@babel/preset-env"],
        babelHelpers: "bundled"
      })
    ],
    context: "null",
    moduleContext: "null",
    output: {
      exports: "named",
      file: "dist/background.js",
      format: "iife",
      name: "lighterhtml"
    }
  },
  {
    input: "js/popup.js",
    plugins: [
      nodeResolve(),
      babel({
        presets: ["@babel/preset-env"],
        babelHelpers: "bundled"
      })
    ],
    context: "null",
    moduleContext: "null",
    output: {
      exports: "named",
      file: "dist/popup.js",
      format: "iife",
      name: "lighterhtml"
    }
  }
]