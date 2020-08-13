/* istanbul ignore file */
import styled from "styled-components";

const CloseModalButton = styled.button`
  cursor: pointer;
  color: #ccc;
  border: 0;
  height: 25px;
  width: 25px;
  top: 12px;
  right: 16px;
  position: absolute;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  font-size: 20px;

  &:hover {
    color: rgb(245, 34, 45);
  }

  &:focus {
    outline: none;
  }
`;

export default CloseModalButton;
