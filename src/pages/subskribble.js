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

const Subskribble = () => (
  <>
    <Head
      title="Subskribble"
      url="/subskribble"
      description="A web application to create, manage, and send personalized updates to a list of subscribers."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>Subskribble</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                fileName="Subskribble"
                status="Decommissioned"
                source="https://github.com/mattcarlotta/subskribble"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                An experimental web application to create, manage, and send
                personalized updates to a list of subscribers. The application
                also included subscriber plans, plan promotionals, payment
                options, account charting and analytics, notifications, and an
                image CDN microservice.
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {["MongoDB", "ExpressJS", "ReactJS", "NodeJS"].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <DetailHeadline>Snapshots:</DetailHeadline>
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  <PreviewCard
                    onClick={() =>
                      toggleModal("projects/subskribble/subskribbleMin")
                    }
                  >
                    <CardTitle>Transactions</CardTitle>
                    <Image
                      src="projects/subskribble/subskribblePreviewMin"
                      alt="mern-kit-preview"
                    />
                  </PreviewCard>
                </Flex>
              </SnapshotContainer>
            </Text>
          </Panel>
          <Modal isOpen={isOpen} maxWidth="2325px" onClick={toggleModal}>
            <Image
              styles="width: 100%;max-width: 1800px;margin: 10px auto;display: block;box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);border-radius: 4px;"
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

export default Subskribble;
