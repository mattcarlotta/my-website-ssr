import styled from "styled-components";

const PanelContainer = styled.div`
  @media (max-width: 1150px) {
    width: calc(100% - 64px);
  }

  width: 100%;
  max-width: 1036px;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: rgba(2, 38, 64, 0.8);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  color: #0096ff;
  text-shadow: 0px 0px 1.5px #fff;
  height: 815px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  -webkit-box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75);
`;

export default PanelContainer;
