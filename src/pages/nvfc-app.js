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

const NVFCApp = () => (
  <>
    <Head
      title="NVFC App"
      url="/nvfc-app"
      description="A standalone Linux application that creates a modifiable 2D curve of temp and fan speed points that automatically controls a Nvidia GPU's fan based on the GPU's temperature."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>Nvidia Fan Controller (nvfc) App</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                fileName="Nvidia Fan Controller (nvfc) App"
                status="Decommissioned"
                source="https://github.com/mattcarlotta/nvfcApp"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                A standalone Linux application that creates a modifiable 2D
                curve of temp and fan speed points that automatically controls a
                Nvidia GPU&#39;s fan based on the GPU&#39;s temperature.
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {[
                  "Python3",
                  "Matplotlib",
                  "Pip3",
                  "PyGTK",
                  "Nvidia drivers",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <DetailHeadline>Snapshots:</DetailHeadline>
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  {[
                    {
                      src: "nvfcappLogo",
                      alt: "logo-preview",
                      title: "Logo",
                    },
                    {
                      src: "nvfcappPreview",
                      alt: "system-info-preview",
                      title: "System Info",
                    },
                  ].map(({ src, alt, title }) => (
                    <PreviewCard
                      key={src}
                      onClick={() => toggleModal(`projects/nvfcapp/${src}`)}
                    >
                      <CardTitle>{title}</CardTitle>
                      <Image src={`projects/nvfcapp/${src}Min`} alt={alt} />
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

export default NVFCApp;
