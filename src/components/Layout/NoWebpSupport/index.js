import * as React from "react";

const NoWebpSupport = () => {
  React.useEffect(() => {
    const img = new Image();
    img.src =
      "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
    img.onerror = () => {
      document.body.style.background = "url('bg.png') no-repeat fixed center";
    };
  }, []);

  return null;
};

export default NoWebpSupport;
