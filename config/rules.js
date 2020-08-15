const { NODE_ENV } = process.env;
const inDev = NODE_ENV === "development";

module.exports = () => [
  /* lints js files */
  {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    exclude: /(node_modules)/,
    use: [
      {
        loader: "eslint-loader",
        options: {
          cache: inDev,
          emitWarning: inDev,
        },
      },
    ],
  },
];
