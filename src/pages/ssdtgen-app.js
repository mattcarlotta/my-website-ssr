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

const SSDTGenApp = () => (
  <>
    <Head
      title="ssdtGen App"
      url="/ssdtgen-app"
      description="A standalone Mac OS application that builds and compiles custom SSDTs for X99, Z170, Z97, and H97 systems running Mac OS."
    />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle>ssdtGen App</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails
                fileName="ssdtGen App"
                status="Decommissioned"
                source="https://github.com/mattcarlotta/ssdtGenApp"
              />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle>
                A standalone app that attempts to build and compile custom SSDTs
                (System Service Descriptor Tables) for X99/Z170/Z97/H97 systems
                running Mac OS. Specifically, it will inject properties into the
                system&#39;s ACPI (Advanced Configuration and Power Interface)
                tables for: on-board sound, an external GPU/HDMI audio, sSata
                Contoller, ethernet, IMEI controller, LPC support, NVMe devices,
                Sata Controller, SBUS controller, XHC usb power options, and
                XOSI support.
              </SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul>
                {["Bash", "Swift", "ASL"].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <DetailHeadline>Snapshots:</DetailHeadline>
              <SnapshotContainer>
                <Flex justify="center" wrap="wrap">
                  {[
                    {
                      src: "ssdtgenappLogo",
                      alt: "logo-preview",
                      title: "Logo",
                    },
                    {
                      src: "ssdtgenappPreview",
                      alt: "app-preview",
                      title: "App",
                    },
                    {
                      src: "ssdtgenappExample",
                      alt: "example-preview",
                      title: "Ex. SSDT",
                    },
                  ].map(({ src, alt, title }) => (
                    <PreviewCard
                      key={src}
                      onClick={() => toggleModal(`projects/ssdtgenapp/${src}`)}
                    >
                      <CardTitle>{title}</CardTitle>
                      <Image src={`projects/ssdtgenapp/${src}Min`} alt={alt} />
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

export default SSDTGenApp;
