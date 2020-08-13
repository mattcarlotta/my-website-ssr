import * as React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import BackgroundOverlay from "./BackgroundOverlay";
import CloseModalButton from "./CloseModalButton";
import ClickHandler from "./ClickHandler";
import ModalContent from "./ModalContent";
import ModalContainer from "./ModalContainer";
import WindowContainer from "./WindowContainer";

class Modal extends React.PureComponent {
  componentDidUpdate = prevProps => {
    const { isOpen } = this.props;

    if (isOpen !== prevProps.isOpen && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  render = () =>
    this.props.isOpen
      ? createPortal(
          <>
            <BackgroundOverlay />
            <WindowContainer>
              <ModalContainer maxWidth={this.props.maxWidth}>
                <ClickHandler closeModal={this.props.onClick}>
                  <ModalContent>
                    <CloseModalButton
                      id="close-modal"
                      onClick={this.props.onClick}
                    >
                      <FaTimes />
                    </CloseModalButton>
                    {this.props.children}
                  </ModalContent>
                </ClickHandler>
              </ModalContainer>
            </WindowContainer>
          </>,
          document.body,
        )
      : null;
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  maxWidth: PropTypes.string,
};

export default Modal;
