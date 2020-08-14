import Head from "~components/Navigation/Header";
import Home from "~components/Navigation/Home";

const AliasDirs = () => (
  <>
    <Head
      title="Alias Dirs"
      url="/alias-dirs"
      description="With the help of the babel-plugin-module-resolver, automatically creates aliased directories for babel."
    />
    <div>Alias Dirs</div>
    <Home />
  </>
);

export default AliasDirs;
