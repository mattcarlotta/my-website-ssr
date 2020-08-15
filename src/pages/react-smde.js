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

const ReactSMDE = () => (
  <>
    <Head
      title="React SMDE"
      url="/react-smde"
      description="A lightweight, simple, markdown editor for React."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>React SMDE</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                active
                fileName="React SMDE"
                status="In Orbit"
                location="https://mattcarlotta.github.io/react-smde"
                source="https://github.com/mattcarlotta/react-smde"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                A lightweight Simple Markdown Editor (SMDE) npm package for
                React.
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {[
                  "Enzyme",
                  "Eslint",
                  "Github Actions",
                  "Jest",
                  "Material-ui",
                  "ReactJS",
                  "RollupJS",
                  "Styled-components",
                  "StorybookJS",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <DetailHeadline>Snapshots:</DetailHeadline>
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  {[
                    {
                      src: "reactsmdeCode",
                      alt: "example-code-preview",
                      title: "Ex. Syntax Code",
                    },
                    {
                      src: "reactsmdeCodePreview",
                      alt: "example-code-syntax-preview",
                      title: "Ex. Syntax Code Preview",
                    },
                    {
                      src: "reactsmdeSource",
                      alt: "example-code-source-preview",
                      title: "Ex. Syntax Code Source",
                    },
                  ].map(({ src, alt, title }) => (
                    <PreviewCard
                      key={src}
                      onClick={() => toggleModal(`projects/reactsmde/${src}`)}
                    >
                      <CardTitle>{title}</CardTitle>
                      <Image src={`projects/reactsmde/${src}Min`} alt={alt} />
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

export default ReactSMDE;
