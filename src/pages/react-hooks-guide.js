import Page from "~components/Layout/Page";

const ReactHooksGuide = () => (
  <Page
    description="An educational website to help up-and-coming developers understand React’s newly introduced hooks. The entire website was built using hooks and provides: Interactive hook examples with example code and in-depth hook descriptions and usage cases."
    head={{
      title: "React Hooks Guide",
      url: "/react-hooks-guide",
      description:
        "An educational website to help up-and-coming developers understand React’s newly introduced hooks.",
    }}
    filedetails={{
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/react-hooks",
    }}
    snapshotdirectory="reacthooks"
    snapshots={[
      {
        src: "reacthooksLanding",
        alt: "landing-preview",
        title: "Home",
      },
      {
        src: "reacthooksAPI",
        alt: "api-preview",
        title: "API",
      },
      {
        src: "reacthooksExamples",
        alt: "demo-preview",
        title: "Examples",
      },
    ]}
    tech={[
      "Create React App",
      "Codesandbox",
      "ExpressJS",
      "ReactJS",
      "Nginx",
      "Styled-components (with theming)",
      "Webpack",
    ]}
  />
);

export default ReactHooksGuide;
