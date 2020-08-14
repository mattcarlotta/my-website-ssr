import Head from "~components/Navigation/Header";
import Home from "~components/Navigation/Home";

const NextSSRKit = () => (
  <>
    <Head
      title="Next SSR Kit"
      url="/next-ssr-kit"
      description="A fully-loaded custom NextJS boilerplate for server-side solutions."
    />
    <div>Next SSR Kit</div>
    <Home />
  </>
);

export default NextSSRKit;
