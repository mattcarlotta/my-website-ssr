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

const Modal = ({ children, isOpen, onClick }) => {
  const [isLoaded, setLoaded] = React.useState();

  const handleImageLoad = React.useCallback(() => setLoaded(true), []);

  const handleRef = React.useCallback(node => {
    if (node) node.onload = handleImageLoad;
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) setLoaded(false);
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div id="modal">
          <BackgroundOverlay />
          <WindowContainer>
            <ModalContainer>
              <ClickHandler closeModal={onClick}>
                <ModalContent isLoaded={isLoaded}>
                  <CloseModalButton id="close-modal" onClick={onClick}>
                    <FaTimes />
                  </CloseModalButton>
                  {React.cloneElement(children, { innerRef: handleRef })}
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
};

export default Modal;
