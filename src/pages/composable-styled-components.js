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
import OutsideLink from "~components/Navigation/OutsideLink";

const ComposableStyledComponents = () => (
  <>
    <Head
      title="Composable Styled Components"
      url="/composable-styled-components"
      description="A lightweight composable solution for styled-components."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>Composable Styled Components</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                active
                fileName="Composable Styled Components"
                location="https://composable-styled-components.vercel.app"
                status="In Development"
                source="https://github.com/mattcarlotta/composable-styled-components"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                A lightweight composable npm package for&nbsp;
                <OutsideLink
                  aria-label="Navigate to styled-components home page"
                  href="https://styled-components.com/"
                  style={{ padding: 0 }}
                >
                  styled-components
                </OutsideLink>
                . The documentation website was built with this package!
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {[
                  "Babel",
                  "Enzyme",
                  "ReactJS",
                  "NextJS",
                  "NPM",
                  "Rollup",
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
                      src: "composableLanding",
                      alt: "landing-preview",
                      title: "Home",
                    },
                    {
                      src: "composableAPI",
                      alt: "api-preview",
                      title: "API",
                    },
                    {
                      src: "composableDemos",
                      alt: "demo-preview",
                      title: "Demos",
                    },
                  ].map(({ src, alt, title }) => (
                    <PreviewCard
                      key={src}
                      onClick={() => toggleModal(`projects/composable/${src}`)}
                    >
                      <CardTitle>{title}</CardTitle>
                      <Image src={`projects/composable/${src}Min`} alt={alt} />
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

export default ComposableStyledComponents;
