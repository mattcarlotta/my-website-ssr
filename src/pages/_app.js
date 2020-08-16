/* eslint-disable react/forbid-prop-types */
import Head from "next/head";
import PropTypes from "prop-types";
import Body from "~components/Layout/Body";
import Header from "~components/Layout/Header";
import Footer from "~components/Layout/Footer";
import Main from "~components/Layout/Main";
import NoWebpSupport from "~components/Layout/NoWebpSupport";
import GlobalStylesheet from "~styles/globalStylesheet";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <NoWebpSupport />
    <Main>
      <Header />
      <Body>
        <Component {...pageProps} />
      </Body>
      <Footer />
    </Main>
    <GlobalStylesheet />
  </>
);

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
/* eslint-enable react/forbid-prop-types */
