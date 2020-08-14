require("./env");
const openBrowser = require("react-dev-utils/openBrowser");
const { plugins, rules } = require("./config");

const { NODE_ENV, LOCALHOST } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(LOCALHOST);

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
    "/project-aeon": { page: "/project-aeon" },
    "/composable-styled-components": { page: "/composable-styled-components" },
    "/sjs-ice-team": { page: "/sjs-ice-team" },
    "/next-ssr-kit": { page: "/next-ssr-kit" },
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
