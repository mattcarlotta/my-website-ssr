import PropTypes from "prop-types";

const Image = ({ alt, containerStyle, innerRef, onClick, src, styles }) => (
  <picture css={containerStyle} onClick={onClick}>
    <source ref={innerRef} srcSet={`/${src}.webp`} type="image/webp" />
    <img ref={innerRef} css={styles} src={`/${src}.png`} alt={alt} />
  </picture>
);

Image.propTypes = {
  alt: PropTypes.string,
  containerStyle: PropTypes.string,
  innerRef: PropTypes.func,
  onClick: PropTypes.func,
  src: PropTypes.string,
  styles: PropTypes.string,
};

Image.defaultProps = {
  onClick: null,
};

export default Image;
