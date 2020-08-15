import * as React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import BackgroundOverlay from "./BackgroundOverlay";
import CloseModalButton from "./CloseModalButton";
import ClickHandler from "./ClickHandler";
import ModalContent from "./ModalContent";
import ModalContainer from "./ModalContainer";
import WindowContainer from "./WindowContainer";

const Modal = ({ children, isOpen, onClick, maxWidth }) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div id="modal">
          <BackgroundOverlay />
          <WindowContainer>
            <ModalContainer maxWidth={maxWidth}>
              <ClickHandler closeModal={onClick}>
                <ModalContent>
                  <CloseModalButton id="close-modal" onClick={onClick}>
                    <FaTimes />
                  </CloseModalButton>
                  {children}
                </ModalContent>
              </ClickHandler>
            </ModalContainer>
          </WindowContainer>
        </div>,
        document.body,
      )
    : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  maxWidth: PropTypes.string,
};

export default Modal;
