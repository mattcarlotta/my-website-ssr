import Head from "~components/Navigation/Header";
import Home from "~components/Navigation/Home";

const SSDTGenApp = () => (
  <>
    <Head
      title="SSDTGen App"
      url="/ssdtgen-app"
      description="A standalone Mac OS application that builds and compiles custom SSDTs for X99, Z170, Z97, and H97 systems running Mac OS."
    />
    <div>SSDTGen App</div>
    <Home />
  </>
);

export default SSDTGenApp;
