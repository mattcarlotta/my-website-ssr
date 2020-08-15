import * as React from "react";
import PropTypes from "prop-types";

const ModalContainer = ({ children }) => {
  const [state, setState] = React.useState({
    isOpen: false,
    selected: "",
  });

  const toggleModal = React.useCallback(
    selected =>
      setState(prevState => ({
        isOpen: !prevState.isOpen,
        selected: !prevState.isOpen ? selected : "",
      })),
    [],
  );

  return children(state.isOpen, state.selected, toggleModal);
};

ModalContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ModalContainer;
