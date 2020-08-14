import Bars from "~components/Layout/Bars";
import Card from "~components/Layout/Card";
import CardTitle from "~components/Layout/CardTitle";
import Flex from "~components/Layout/Flex";
import ImageContainer from "~components/Layout/ImageContainer";
import LoadingImage from "~components/Layout/LoadingImage";
import NoSSR from "~components/Layout/NoSSR";
import Head from "~components/Navigation/Header";
import Link from "~components/Navigation/Link";
import ProjectAeonPreview from "~images/projectaeonPreviewMin.png";
import ComposablePreview from "~images/composablePreviewMin.png";
import SJSIceTeamPreview from "~images/sjsiceteamPreviewMin.png";
import NextSSRKitPreview from "~images/nextssrkitPreviewMin.png";
import ReactSMDEPreview from "~images/reactsmdePreviewMin.png";
import AliasDirsPreview from "~images/aliasdirsPreviewMin.png";
import ReactHooksGuidePreview from "~images/reacthooksPreviewMin.png";
import SubskribblePreview from "~images/subskribblePreviewMin.png";
import MERNKitPreview from "~images/mernkitPreviewMin.png";
import YelpCampPreview from "~images/yelpcampPreviewMin.png";
import NVFCAppPreview from "~images/nvfcappPreviewMin.png";
import SSDTGenAppPreview from "~images/ssdtgenappPreviewMin.png";

const PROJECTS = [
  {
    title: "Project Aeon (working title)",
    href: "project-aeon",
    description:
      "A better web app to ask web development questions and use integrated tools to answer them.",
    image: ProjectAeonPreview,
    alt: "project-aeon-preview.png",
    ariaLabel: "Navigate to the Project Aeon project page.",
  },
  {
    title: "Composable Styled Components",
    href: "composable-styled-components",
    description: "A lightweight composable solution for styled-components.",
    image: ComposablePreview,
    alt: "composable-preview.png",
    ariaLabel: "Navigate to the Composable Styled Components project page.",
  },
  {
    title: "SJS Ice Team",
    href: "sjs-ice-team",
    description:
      "An application to manage the San Jose Sharks Ice Team scheduling.",
    image: SJSIceTeamPreview,
    alt: "sjsiceteam-preview.png",
    ariaLabel: "Navigate to the SJS Ice Team project page.",
  },
  {
    title: "Next SSR Kit",
    href: "next-ssr-kit",
    description: "A custom fully-loaded boilerplate for server-side solutions.",
    image: NextSSRKitPreview,
    alt: "next-ssr-kit-preview.png",
    ariaLabel: "Navigate to the Next SSR Kit project page.",
  },
  {
    title: "React SMDE",
    href: "react-smde",
    description: "A lightweight, simple, markdown editor for React.",
    image: ReactSMDEPreview,
    alt: "react-smde-preview.png",
    ariaLabel: "Navigate to the React SMDE project page.",
  },
  {
    title: "Alias Dirs",
    href: "alias-dirs",
    description:
      "With the help of the babel-plugin-module-resolver, automatically creates aliased directories for babel.",
    image: AliasDirsPreview,
    alt: "alias-dirs-preview.png",
    ariaLabel: "Navigate to the Alias Dirs project page.",
  },
  {
    title: "React Hooks Guide",
    href: "react-hooks-guide",
    description:
      "An educational website to help up-and-coming developers understand React’s newly introduced hooks.",
    image: ReactHooksGuidePreview,
    alt: "react-hooks-guide-preview.png",
    ariaLabel: "Navigate to the React Hooks Guide project page.",
  },
  {
    title: "Subskribble",
    href: "subskribble",
    description:
      "A web application to create, manage, and send personalized updates to a list of subscribers.",
    image: SubskribblePreview,
    alt: "subskribble-preview.png",
    ariaLabel: "Navigate to the Subskribble project page.",
  },
  {
    title: "Fullstack M.E.R.N. Kit",
    href: "fullstack-mern-kit",
    description:
      "A fully custom boilerplate for MongoDB, Express, React/Redux and Node client-side solutions.",
    image: MERNKitPreview,
    alt: "fs-mern-kit-preview.png",
    ariaLabel: "Navigate to the Fullstack M.E.R.N. Kit project page.",
  },
  {
    title: "Yelp Camp",
    href: "yelp-camp",
    description:
      "An experimental website for creating, editing, and reviewing campground sites from all over California.",
    image: YelpCampPreview,
    alt: "yelp-camp-preview.png",
    ariaLabel: "Navigate to the Yelp Camp project page.",
  },
  {
    title: "Nvidia Fan Controller (nvfc) App",
    href: "nvfc-app",
    description:
      "A standalone Linux application that creates a modifiable 2D curve of temp and fan speed points that automatically controls a Nvidia GPU's fan based on the GPU's temperature.",
    image: NVFCAppPreview,
    alt: "nvfc-app-preview.png",
    ariaLabel: "Navigate to the Nvidia Fan Controller App project page.",
  },
  {
    title: "ssdtGen App",
    href: "ssdtgen-app",
    description:
      "A standalone Mac OS application that builds and compiles custom SSDTs for X99, Z170, Z97, and H97 systems running Mac OS.",
    image: SSDTGenAppPreview,
    alt: "sddtgen-app-preview.png",
    ariaLabel: "Navigate to the ssdtGen App project page.",
  },
];

const Home = () => (
  <>
    <Head title="Home" url="/" description="My personal website." />
    <Flex justify="center" wrap="wrap">
      {PROJECTS.map(({ title, href, image, alt, ariaLabel }) => (
        <Link ariaLabel={ariaLabel} key={href} padding="0px" href={`/${href}`}>
          <Card>
            <CardTitle>{title}</CardTitle>
            <Bars />
            <ImageContainer>
              <NoSSR fallback={<LoadingImage size="180" opacity="1" />}>
                <img
                  css="max-height: 180px;max-width: 250px; margin: 0 auto; border-radius: 4px;"
                  src={image}
                  alt={alt}
                />
              </NoSSR>
            </ImageContainer>
          </Card>
        </Link>
      ))}
    </Flex>
  </>
);

export default Home;
