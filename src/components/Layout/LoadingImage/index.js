import styled from "styled-components";

const LoadingImage = styled.div`
  display: block;
  height: ${({ size }) => (size ? `${size}px` : "50px")};
  width: ${({ size }) => (size ? `${size}px` : "50px")};
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  background-color: ${({ bgColor }) => bgColor || "#ddd"};
  opacity: ${({ opacity }) => opacity || 0.25};

  &:before {
    content: "";
    position: absolute;
    width: ${({ size }) => (size ? `${size * 0.125}px` : "6.25px")};
    height: ${({ size }) => (size ? `${size * 2}px` : "100px")};
    top: -50%;
    left: -50%;
    z-index: 1;
    background-image: linear-gradient(
      90deg,
      transparent 0px,
      #fff 50%,
      transparent 100%
    );
    animation: wave ${({ duration }) => duration || "1.5s"} infinite ease-in-out;
    transform: rotate(25deg);
  }
`;

export default LoadingImage;
