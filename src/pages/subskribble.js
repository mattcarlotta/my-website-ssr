import Page from "~components/Layout/Page";

const Subskribble = () => (
  <Page
    description="An experimental web application to create, manage, and send personalized updates to a list of subscribers. The application also included subscriber plans, plan promotionals, payment options, account charting and analytics, notifications, and an image CDN microservice."
    head={{
      title: "Subskribble",
      url: "/subskribble",
      description:
        "A web application to create, manage, and send personalized updates to a list of subscribers.",
    }}
    filedetails={{
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/subskribble",
    }}
    snapshotdirectory="subskribble"
    snapshots={[
      {
        src: "subskribbleTransactions",
        alt: "subskribble-transactions-preview",
        title: "Transactions",
      },
    ]}
    tech={["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]}
  />
);

export default Subskribble;
