import DetailHeadline from "~components/Layout/DetailHeadline";
import Modal from "~components/Layout/Modal";
import ModalContainer from "~components/Layout/ModalContainer";
import Panel from "~components/Layout/Panel";
import Project from "~components/Layout/Project";
import FileDetails from "~components/Layout/FileDetails";
import SubTitle from "~components/Layout/SubTitle";
import Text from "~components/Layout/Text";
import PanelTitle from "~components/Layout/PanelTitle";
import Snapshot from "~components/Layout/Snapshot";
import SnapshotContainer from "~components/Layout/SnapshotContainer";
import Home from "~components/Navigation/Home";
import SJSIceTeamPreview from "~images/sjsiceteamPreview.png";

const SJSIceTeam = () => (
  <>
    <ModalContainer>
      {(isOpen, toggleModal) => (
        <Project>
          <PanelTitle>San Jose Sharks Ice Team</PanelTitle>
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
                status="Operational"
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
                database backup script. The main application utilizes NextJS for
                SEO, while the microservices utilize NodeJS with ExpressJS.
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
                <Snapshot
                  src={SJSIceTeamPreview}
                  alt="sjsiceteam.png"
                  onClick={toggleModal}
                />
              </SnapshotContainer>
            </Text>
          </Panel>
          <Modal isOpen={isOpen} maxWidth="2325px" onClick={toggleModal}>
            <img
              css="width: 100%;max-width: 1000px; margin: 10px auto; display: block;box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);"
              src={SJSIceTeamPreview}
              alt="sjsiceteam.png"
            />
          </Modal>
        </Project>
      )}
    </ModalContainer>
    <Home />
  </>
);

export default SJSIceTeam;
