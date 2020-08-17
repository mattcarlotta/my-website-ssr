import Head from "next/head";
import PropTypes from "prop-types";

const { LOCALHOST } = process.env;

const Header = ({ children, description, title, type, url }) => (
  <Head>
    <title>{title} - Matt Carlotta</title>
    <link rel="canonical" href={`${LOCALHOST}${url}`} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${LOCALHOST}${url}`} />
    <meta property="og:type" content={type} />
    {children}
  </Head>
);

Header.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  type: PropTypes.string,
};

Header.defaultProps = {
  description: "My personal website.",
  type: "website",
};

export default Header;
