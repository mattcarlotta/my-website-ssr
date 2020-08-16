import * as React from "react";
import PropTypes from "prop-types";
import BrokenImage from "~components/Layout/BrokenImage";

const Image = ({
  alt,
  containerStyle,
  handleImageLoaded,
  onClick,
  src,
  styles,
}) => {
  const [error, setError] = React.useState(false);

  const onSuccess = React.useCallback(() => {
    handleImageLoaded();
  }, []);

  const onError = React.useCallback(() => {
    setError(true);
    handleImageLoaded();
  }, []);

  const handleImageRef = React.useCallback(node => {
    if (node) {
      node.onload = onSuccess;
      node.onerror = onError;
    }
  }, []);

  return (
    <picture css={containerStyle} onClick={onClick}>
      {!error ? (
        <>
          <source
            ref={handleImageRef}
            srcSet={`/${src}.webp`}
            type="image/webp"
          />
          <img
            ref={handleImageRef}
            css={styles}
            src={`/${src}.png`}
            alt={alt}
          />
        </>
      ) : (
        <BrokenImage />
      )}
    </picture>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  containerStyle: PropTypes.string,
  handleImageLoaded: PropTypes.func,
  onClick: PropTypes.func,
  src: PropTypes.string,
  styles: PropTypes.string,
};

Image.defaultProps = {
  handleImageLoaded: () => {},
  onClick: () => {},
};

export default Image;
