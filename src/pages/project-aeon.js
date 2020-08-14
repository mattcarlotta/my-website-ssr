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

const ProjectAeon = () => (
  <>
    <Head
      title="Project Aeon"
      url="/project-aeon"
      description="A better app to ask web development questions and use integrated tools to answer them."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>Project Aeon (Working Title)</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                active
                fileName="Project Aeon"
                status="In Development"
                source="https://github.com/mattcarlotta/project-aeon"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                A better application to ask web development questions and use
                integrated tools to answer them.
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {[
                  "PostgreSQL",
                  "ReactJS (w/ReduxJS)",
                  "NextJS",
                  "NodeJS",
                  "Nginx",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <DetailHeadline>Snapshots:</DetailHeadline>
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  {[
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
                  ].map(({ src, alt, title }) => (
                    <PreviewCard
                      key={src}
                      onClick={() => toggleModal(`projects/projectaeon/${src}`)}
                    >
                      <CardTitle>{title}</CardTitle>
                      <Image
                        src={`projects/projectaeon/${src}Min`}
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

export default ProjectAeon;
