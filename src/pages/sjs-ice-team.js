import CardTitle from "~components/Layout/CardTitle";
import DetailHeadline from "~components/Layout/DetailHeadline";
import Image from "~components/Layout/Image";
import Flex from "~components/Layout/Flex";
import Modal from "~components/Layout/Modal";
import ModalContainer from "~components/Layout/ModalContainer";
import Panel from "~components/Layout/Panel";
import PreviewCard from "~components/Layout/PreviewCard";
import Project from "~components/Layout/Project";
import FileDetails from "~components/Layout/FileDetails";
import SubTitle from "~components/Layout/SubTitle";
import Text from "~components/Layout/Text";
import PanelTitle from "~components/Layout/PanelTitle";
import SnapshotContainer from "~components/Layout/SnapshotContainer";
import Home from "~components/Navigation/Home";
import Head from "~components/Navigation/Header";

const IMAGES = [
  {
    src: "dashboard/sjsiceteamDashboard",
    alt: "availability-preview",
    title: "Dashboard",
  },
  {
    src: "email/sjsiceteamEmailEventReminder",
    alt: "email-upcoming-event-preview",
    title: "Email - Event",
  },
  {
    src: "email/sjsiceteamEmailScheduleReminder",
    alt: "email-upcoming-schedule-preview",
    title: "Email - Schedule",
  },
  {
    src: "events/sjsiceteamEvents",
    alt: "events-preview",
    title: "Events",
  },
  {
    src: "schedule/sjsiceteamEventSchedule",
    alt: "event-scheduling-preview",
    title: "Event Scheduling",
  },
  {
    src: "help/sjsiceteamHelp",
    alt: "help-preview",
    title: "Help",
  },
  {
    src: "availability/sjsiceteamAvailability",
    alt: "member-availability-preview",
    title: "Member - Availabilty",
  },
  {
    src: "settings/sjsiceteamSettings",
    alt: "member-settings-preview",
    title: "Member - Settings",
  },
  {
    src: "schedule/sjsiceteamSchedule",
    alt: "schedule-calendar-preview",
    title: "Schedule - Calendar",
  },
  {
    src: "schedule/sjsiceteamScheduleMyGames",
    alt: "scheduled-my-games-preview",
    title: "Schedule - My Games",
  },
  {
    src: "schedule/sjsiceteamScheduledEvent",
    alt: "scheduled-my-event-preview",
    title: "Schedule - My Event",
  },
];

const SJSIceTeam = () => (
  <>
    <Head
      title="SJS Ice Team"
      url="/sjs-ice-team"
      description="An application to manage the San Jose Sharks Ice Team scheduling."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>SJS Ice Team</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                active
                fileName="SJS Ice Team"
                location={{
                  link: "https://sjsiceteam.com",
                  text: "https://sjsiceteam.com",
                }}
                status="In Orbit"
                source="https://github.com/mattcarlotta/SJSITApp"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                An application to consolidate Google forms, Excel, and manual
                user-generated monthly PDFs into a single, unified,
                semi-automated month-to-month scheduling service for 25+ members
                of the San Jose Sharks Ice Team. The application is separated
                into 4 services: Front-facing application, an automated emailing
                microservice, an image content delivery microservice, and a
                database optimization microservice. The main application
                utilizes NextJS for SEO, while the microservices utilize NodeJS
                with ExpressJS.
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>ReactJS (w/ReduxJS)</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>Nginx</li>
              </ul>
              <DetailHeadline>Snapshots:</DetailHeadline>
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  {IMAGES.map(({ src, alt, title }) => (
                    <PreviewCard
                      key={src}
                      onClick={() => toggleModal(`projects/sjsit/${src}`)}
                    >
                      <CardTitle>{title}</CardTitle>
                      <Image
                        src={`projects/sjsit/${src}Min`}
                        alt={alt}
                        styles="width: 100%;border-radius: 4px;"
                      />
                    </PreviewCard>
                  ))}
                </Flex>
              </SnapshotContainer>
            </Text>
          </Panel>
          <Modal isOpen={isOpen} maxWidth="2325px" onClick={toggleModal}>
            <Image
              styles="width: 100%;max-width: 1800px; margin: 10px auto; display: block;box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);border-radius: 4px;"
              src={selected}
              alt={selected}
            />
          </Modal>
        </Project>
      )}
    </ModalContainer>
    <Home />
  </>
);

export default SJSIceTeam;
