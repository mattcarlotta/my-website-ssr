import Page from "~components/Layout/Page";

const ProjectAeon = () => (
  <Page
    description="A better application to ask web development questions and use integrated tools to answer them."
    head={{
      title: "Project Aeon",
      url: "/project-aeon",
      description:
        "A better app to ask web development questions and use integrated tools to answer them.",
    }}
    filedetails={{
      active: true,
      status: "In Development",
      source: "https://github.com/mattcarlotta/project-aeon",
    }}
    snapshotdirectory="projectaeon"
    snapshots={[
      {
        src: "projectaeonAskQuestion",
        alt: "ask-question-preview",
        title: "Ask Question",
      },
      {
        src: "projectaeonQuestion",
        alt: "question-preview",
        title: "Question",
      },
      {
        src: "projectaeonComment",
        alt: "comment-preview",
        title: "Comment",
      },
      {
        src: "projectaeonTags",
        alt: "tags-preview",
        title: "Tags",
      },
      {
        src: "projectaeonProfile",
        alt: "profile-preview",
        title: "Profile",
      },
    ]}
    tech={["PostgreSQL", "ReactJS (w/ReduxJS)", "NextJS", "NodeJS", "Nginx"]}
  />
);

export default ProjectAeon;
