import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";

const ComposableStyledComponents = () => (
  <Page
    description={
      <>
        A lightweight composable npm package for&nbsp;
        <OutsideLink
          aria-label="Navigate to styled-components home page"
          href="https://styled-components.com/"
          style={{ padding: 0 }}
        >
          styled-components
        </OutsideLink>
        . The documentation website was built with this package!
      </>
    }
    head={{
      title: "Composable Styled Components",
      url: "/composable-styled-components",
      description: "A lightweight composable solution for styled-components.",
    }}
    filedetails={{
      active: true,
      location: "https://composable-styled-components.vercel.app",
      status: "In Development",
      source: "https://github.com/mattcarlotta/composable-styled-components",
    }}
    snapshotdirectory="composable"
    snapshots={[
      {
        src: "composableLanding",
        alt: "landing-preview",
        title: "Home",
      },
      {
        src: "composableAPI",
        alt: "api-preview",
        title: "API",
      },
      {
        src: "composableDemos",
        alt: "demo-preview",
        title: "Demos",
      },
    ]}
    tech={["Babel", "Enzyme", "ReactJS", "NextJS", "NPM", "Rollup", "Webpack"]}
  />
);

export default ComposableStyledComponents;
