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
import Link from "~components/Navigation/Link";

const FullstackMERNKit = () => (
  <>
    <Head
      title="Fullstack M.E.R.N. Kit"
      url="/fullstack-mern-kit"
      description="A fully-loaded custom boilerplate using MongoDB, Express, React/Redux and Node for client-side solutions."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>Fullstack M.E.R.N. Kit</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                fileName="Fullstack M.E.R.N. Kit"
                status="Decommissioned"
                source="https://github.com/mattcarlotta/fullstack-mern-kit"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                A fully-loaded custom boilerplate using MongoDB, Express,
                React/Redux and Node for client-side solutions. This website and
                several projects were once built using this boilerplate, but
                have since been archived in favor of the&nbsp;
                <Link
                  ariaLabel="Navigate to the Next SSR Kit project page."
                  style={{ padding: 0, textDecoration: "underline" }}
                  href="/nextjs-ssr-kit"
                >
                  NextJS SSR Kit
                </Link>
                .
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
                      toggleModal("projects/mernkit/mernkitPreview")
                    }
                  >
                    <CardTitle>Logo</CardTitle>
                    <Image
                      src="projects/mernkit/mernkitPreviewMin"
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

export default FullstackMERNKit;
