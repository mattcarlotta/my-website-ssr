import PropTypes from "prop-types";

const Image = ({ alt, containerStyle, onClick, src, styles }) => (
  <picture css={containerStyle} onClick={onClick}>
    <source srcSet={`/${src}.webp`} type="image/webp" />
    <img css={styles} src={`/${src}.png`} alt={alt} />
  </picture>
);

Image.propTypes = {
  alt: PropTypes.string,
  containerStyle: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  styles: PropTypes.string,
};

Image.defaultProps = {
  onClick: null,
};

export default Image;
