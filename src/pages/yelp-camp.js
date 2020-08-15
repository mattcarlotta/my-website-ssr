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

const YelpCamp = () => (
  <>
    <Head
      title="Yelp Camp"
      url="/yelp-camp"
      description="An experimental website for creating, editing, and reviewing campground sites from all over California."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>Yelp Camp</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                fileName="Yelp Camp"
                status="Decommissioned"
                source="https://github.com/mattcarlotta/campground-app-frontend"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                An experimental website for creating, editing, and reviewing
                campground sites from all over California. Utilizing Google
                maps, OpenWeatherMap API, and user reviews, campers can plan
                their journey ahead of time.
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
                      toggleModal("projects/yelpcamp/yelpcampPreview")
                    }
                  >
                    <CardTitle>Ex. Campground</CardTitle>
                    <Image
                      src="projects/yelpcamp/yelpcampPreviewMin"
                      alt="yelp-camp-preview"
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

export default YelpCamp;
