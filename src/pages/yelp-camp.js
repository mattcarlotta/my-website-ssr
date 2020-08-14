import Head from "~components/Navigation/Header";
import Home from "~components/Navigation/Home";

const YelpCamp = () => (
  <>
    <Head
      title="Yelp Camp"
      url="/yelp-camp"
      description="An experimental website for creating, editing, and reviewing campground sites from all over California."
    />
    <div>Yelp Camp</div>
    <Home />
  </>
);

export default YelpCamp;
