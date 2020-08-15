import PropTypes from "prop-types";
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

const Page = ({
  description,
  head,
  filedetails,
  snapshotdirectory,
  snapshots,
  tech,
}) => (
  <>
    <Head {...head} />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>{head.title}</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails {...filedetails} fileName={head.title} />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>{description}</SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {tech.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {snapshotdirectory && <DetailHeadline>Snapshots:</DetailHeadline>}
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  {snapshots.map(({ src, alt, title }) => (
                    <PreviewCard
                      key={src}
                      onClick={() =>
                        toggleModal(`projects/${snapshotdirectory}/${src}`)
                      }
                    >
                      <CardTitle>{title}</CardTitle>
                      <Image
                        src={`projects/${snapshotdirectory}/${src}Min`}
                        alt={alt}
                      />
                    </PreviewCard>
                  ))}
                </Flex>
              </SnapshotContainer>
            </Text>
          </Panel>
          <Modal isOpen={isOpen} onClick={toggleModal}>
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

Page.propTypes = {
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
    .isRequired,
  head: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  filedetails: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    location: PropTypes.string,
    status: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }),
  snapshots: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  snapshotdirectory: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Page.defaultProps = {
  snapshots: [],
};

export default Page;
