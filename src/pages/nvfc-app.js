import Head from "~components/Navigation/Header";
import Home from "~components/Navigation/Home";

const NVFCApp = () => (
  <>
    <Head
      title="NVFC App"
      url="/nvfc-app"
      description="A standalone Linux application that creates a modifiable 2D curve of temp and fan speed points that automatically controls a Nvidia GPU's fan based on the GPU's temperature."
    />
    <div>NVFC App</div>
    <Home />
  </>
);

export default NVFCApp;
