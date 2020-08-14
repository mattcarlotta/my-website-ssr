import Head from "~components/Navigation/Header";
import Home from "~components/Navigation/Home";

const Subskribble = () => (
  <>
    <Head
      title="Subskribble"
      url="/subskribble"
      description="A web application to create, manage, and send personalized updates to a list of subscribers."
    />
    <div>Subskribble</div>
    <Home />
  </>
);

export default Subskribble;
