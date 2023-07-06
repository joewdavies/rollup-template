import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "main.js",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [nodeResolve()],
};
