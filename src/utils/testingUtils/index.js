/* istanbul ignore file */
import { render } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { Provider } from "react-redux";
import { store } from "~store";

//= =============================================================================//
// CUSTOM REACT TESTING FUNCTIONS                                                 /
//= =============================================================================//

/**
 * Factory function to create a mounted RouterContext wrapper for a React component
 * @function withRouterContext
 * @param {node} Component - Component to be mounted
 * @param {object} initialProps - Component props specific to this setup.
 * @param {array} router - Initial route options for RouterContext.
 * @function render - Creates a wrapper around passed in component
 * @returns {MountedRouterWrapper}
 */
export const withRouterContext = (
  Component,
  initialProps = {},
  router = {
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
  },
) => {
  const wrapper = render(
    <Provider store={store}>
      <RouterContext.Provider value={router}>
        <Component {...initialProps} />
      </RouterContext.Provider>
    </Provider>,
  );
  return wrapper;
};