import * as React from "react";
import PropTypes from "prop-types";

class ModalContainer extends React.Component {
  state = { isOpen: false, selected: "" };

  toggleModal = selected =>
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      selected: !prevState.isOpen ? selected : "",
    }));

  render = () =>
    this.props.children(
      this.state.isOpen,
      this.state.selected,
      this.toggleModal,
    );
}

ModalContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ModalContainer;
