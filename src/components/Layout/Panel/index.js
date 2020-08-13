import React from "react";
import PropTypes from "prop-types";
import PanelBody from "~components/Layout/PanelBody";
import PanelContainer from "~components/Layout/PanelContainer";
import Bars from "~components/Layout/Bars";
import Solar from "~components/Layout/Solar";

const Panel = ({ children }) => (
  <PanelContainer>
    <Solar />
    <PanelBody>
      <Bars />
      {children}
    </PanelBody>
  </PanelContainer>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
