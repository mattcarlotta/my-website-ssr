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

const ReactHooksGuide = () => (
  <>
    <Head
      title="React Hooks Guide"
      url="/react-hooks-guide"
      description="An educational website to help up-and-coming developers understand React’s newly introduced hooks."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>React Hooks Guide</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                active
                fileName="React Hooks Guide"
                location="https://react-hooks.mattcarlotta.io/"
                status="Archived"
                source="https://github.com/mattcarlotta/react-hooks"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                An educational website to help up-and-coming developers
                understand React’s newly introduced hooks. The entire website
                was built using hooks and provides: Interactive hook examples
                with example code and in-depth hook descriptions and usage
                cases.
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {[
                  "Create React App",
                  "Codesandbox",
                  "ExpressJS",
                  "ReactJS",
                  "Nginx",
                  "Styled-components (with theming)",
                  "Webpack",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <DetailHeadline>Snapshots:</DetailHeadline>
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  {[
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
                  ].map(({ src, alt, title }) => (
                    <PreviewCard
                      key={src}
                      onClick={() => toggleModal(`projects/reacthooks/${src}`)}
                    >
                      <CardTitle>{title}</CardTitle>
                      <Image src={`projects/reacthooks/${src}Min`} alt={alt} />
                    </PreviewCard>
                  ))}
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

export default ReactHooksGuide;
