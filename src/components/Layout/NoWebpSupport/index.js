import * as React from "react";

const NoWebpSupport = () => {
  React.useEffect(() => {
    const img = new Image();
    img.src =
      "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
    img.onerror = () => {
      document.body.style.background =
        "url('bgMin.png') center center no-repeat fixed";
      document.body.style.backgroundSize = "cover";
    };
  }, []);

  return null;
};

export default NoWebpSupport;
