import Bars from "~components/Layout/Bars";
import Card from "~components/Layout/Card";
import CardTitle from "~components/Layout/CardTitle";
import Flex from "~components/Layout/Flex";
import ImageContainer from "~components/Layout/ImageContainer";
import Head from "~components/Navigation/Header";
import Link from "~components/Navigation/Link";
import ComposablePreview from "~images/composablePreview2.png";
import SJSIceTeamPreview from "~images/sjsiceteamPreview.png";

const PROJECTS = [
  {
    title: "Composable Styled Components",
    href: "composable-styled-components",
    description: "A lightweight composable solution for styled-components.",
    image: ComposablePreview,
    imagealt: "composable-preview.png",
  },
  {
    title: "SJS Ice Team",
    href: "sjs-ice-team",
    description:
      "An application to manage the San Jose Sharks Ice Team scheduling.",
    image: SJSIceTeamPreview,
    imagealt: "sjsiceteam-preview.png",
  },
  {
    title: "Next SSR Kit",
    href: "next-ssr-kit",
    description: "A custom fully-loaded boilerplate for server-side solutions.",
  },
  {
    title: "React SMDE",
    href: "react-smde",
    description: "A lightweight, simple, markdown editor for React.",
  },
  {
    title: "React Hooks Guide",
    href: "react-hooks-guide",
    description:
      "An educational website to help up-and-coming developers understand React’s newly introduced hooks.",
  },
  {
    title: "Subskribble",
    href: "subskribble",
    description:
      "A web application to create, manage, and send personalized updates to a list of subscribers.",
  },
  {
    title: "Fullstack MERN Kit",
    href: "fullstack-mern-kit",
    description:
      "A fully custom boilerplate for MongoDB, Express, React/Redux and Node client-side solutions.",
  },
  {
    title: "Yelp Camp",
    href: "yelp-camp",
    description:
      "An experimental website for creating, editing, and reviewing campground sites from all over California.",
  },
  {
    title: "Nvidia Fan Controller (nvfc) App",
    href: "nvfcApp",
    description:
      "A standalone Linux application that creates a modifiable 2D curve of temp and fan speed points that automatically controls a Nvidia GPU's fan based on the GPU's temperature.",
  },
  {
    title: "ssdtGen App",
    href: "ssdtgen-app",
    description:
      "A standalone Mac OS application that builds and compiles custom SSDTs for X99, Z170, Z97, and H97 systems running Mac OS.",
  },
];

const Home = () => (
  <>
    <Head title="Home" url="/" />
    <Flex justify="center" wrap="wrap">
      {PROJECTS.map(({ title, href, image, imagealt }) => (
        <Link key={href} padding="0px" href={`/${href}`}>
          <Card>
            <CardTitle>{title}</CardTitle>
            <Bars />
            <ImageContainer>
              <img
                css="max-height: 180px;max-width: 250px; margin: 0 auto; border-radius: 4px;"
                src={image}
                alt={imagealt}
              />
            </ImageContainer>
          </Card>
        </Link>
      ))}
    </Flex>
  </>
);

export default Home;
