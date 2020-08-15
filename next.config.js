require("./env");
const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");
const openBrowser = require("react-dev-utils/openBrowser");
const { plugins, rules } = require("./config");

const { NODE_ENV, LOCALHOST } = process.env;
const inDev = NODE_ENV === "development";

/* opens a browser window */
if (inDev) openBrowser(LOCALHOST);

const nextConfig = {
  exportPathMap: () => ({
    "/": { page: "/" },
    "/project-aeon": { page: "/project-aeon" },
    "/composable-styled-components": { page: "/composable-styled-components" },
    "/sjs-ice-team": { page: "/sjs-ice-team" },
    "/nextjs-ssr-kit": { page: "/nextjs-ssr-kit" },
    "/react-smde": { page: "/react-smde" },
    "/alias-dirs": { page: "/alias-dirs" },
    "/react-hooks-guide": { page: "/react-hooks-guide" },
    "/subskribble": { page: "/subskribble" },
    "/fullstack-mern-kit": { page: "/fullstack-mern-kit" },
    "/yelp-camp": { page: "/yelp-camp" },
    "/nvfc-app": { page: "/nvfc-app" },
    "/ssdtgen-app": { page: "/ssdtgen-app" },
  }),
  webpack(config, { isServer }) {
    /* adds custom rules to client and server */
    config.module.rules.push(...rules());

    /* adds custom plugins to client and server */
    config.plugins.push(...plugins(isServer));

    /* return new config to next */
    return config;
  },
};

module.exports = withPlugins(
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        disable: inDev,
      },
    },
  ],
  nextConfig,
);
