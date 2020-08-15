const { jsRule } = require("./helpers");

const { NODE_ENV } = process.env;
const inDev = NODE_ENV === "development";

module.exports = () => [
  /* lints js files */
  jsRule({
    loader: "eslint-loader",
    options: {
      cache: inDev,
      emitWarning: inDev,
    },
  }),
];
