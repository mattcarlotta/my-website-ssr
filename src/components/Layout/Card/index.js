import styled from "styled-components";
import CardTitle from "~components/Layout/CardTitle";

const Card = styled.div`
  width: 300px;
  height: 250px;
  margin: 5px;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  background-color: transparent;
  color: #0096ff;
  box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75);

  ::after {
    content: "";
    display: block;
    height: 90%;

    border: 1px solid transparent;
    border-image: linear-gradient(
      to top,
      #73b9ff 0%,
      #005193 50%,
      #005193 100%
    );
    border-image-slice: 1;
  }

  &:hover {
    background-color: rgba(2, 28, 48, 0.4);
    box-shadow: 0px 0px 26px -2px rgba(0, 64, 255, 1);
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;

    ${CardTitle} {
      background: #0080ff;
    }

    .bar1,
    .bar2,
    .bar3 {
      background: #73b9ff;
      opacity: 0.4;
    }

    &::after {
      border: 2px solid transparent;
      border-image: linear-gradient(
        to top,
        #73b9ff 0%,
        #005193 50%,
        #005193 100%
      );
      border-image-slice: 1;
    }
  }
`;

export default Card;
