import DetailHeadline from "~components/Layout/DetailHeadline";
import Panel from "~components/Layout/Panel";
import Project from "~components/Layout/Project";
import FileDetails from "~components/Layout/FileDetails";
import SubTitle from "~components/Layout/SubTitle";
import Text from "~components/Layout/Text";
import PanelTitle from "~components/Layout/PanelTitle";
import Home from "~components/Navigation/Home";
import Head from "~components/Navigation/Header";
import OutsideLink from "~components/Navigation/OutsideLink";

const AliasDirs = () => (
  <>
    <Head
      title="Alias Dirs"
      url="/alias-dirs"
      description="Automatically creates aliased import directories for babel."
    />
    <Project>
      <PanelTitle>Alias Dirs</PanelTitle>
      <Panel>
        <Text>
          <DetailHeadline>Details:</DetailHeadline>
          <FileDetails
            fileName="Alias Dirs"
            status="Decommissioned"
            source="https://github.com/mattcarlotta/alias-dirs"
          />
          <DetailHeadline>Description:</DetailHeadline>
          <SubTitle>
            With the help of the&nbsp;
            <OutsideLink
              aria-label="Navigate to babel-plugin-module-resolver home page"
              href="https://github.com/tleunen/babel-plugin-module-resolver"
              style={{ padding: 0 }}
            >
              babel-plugin-module-resolver
            </OutsideLink>
            , this npm package traverses a project&#39;s <i>src</i> directory
            and automatically creates aliased imports for babel.
          </SubTitle>
          <DetailHeadline>Tech Specs:</DetailHeadline>
          <ul>
            {["Babel", "Enzyme", "Javascript", "Jest", "RollupJS"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Text>
      </Panel>
    </Project>
    <Home />
  </>
);

export default AliasDirs;
