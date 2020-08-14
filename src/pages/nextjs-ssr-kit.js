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

const NextJSSSRKit = () => (
  <>
    <Head
      title="NextJS SSR Kit"
      url="/nextjs-ssr-kit"
      description="A fully-loaded custom NextJS boilerplate for server-side solutions."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>NextJS SSR Kit</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                active
                fileName="NextJS SSR Kit"
                status="In Orbit"
                source="https://github.com/mattcarlotta/nextjs-ssr-kit"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                A fully-loaded custom NextJS boilerplate for server-side
                solutions. This website and several projects were built using
                this boilerplate!
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {[
                  "Cypress",
                  "Enzyme",
                  "Eslint",
                  "Github Actions",
                  "Jest",
                  "MongoDB",
                  "NextJS",
                  "ReactJS (w/ReduxJS + Redux Saga)",
                  "Styled-components",
                  "Stylelint",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <DetailHeadline>Snapshots:</DetailHeadline>
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  <PreviewCard
                    onClick={() =>
                      toggleModal("projects/nextssrkit/nextssrkitPreview")
                    }
                  >
                    <CardTitle>Logo</CardTitle>
                    <Image
                      src="projects/nextssrkit/nextssrkitPreviewMin"
                      alt="nextjs-ssr-kit-preview"
                      styles="width: 100%;border-radius: 4px;"
                    />
                  </PreviewCard>
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

export default NextJSSSRKit;
