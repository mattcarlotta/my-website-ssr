import PropTypes from "prop-types";
import styled from "styled-components";
import FlexCenter from "~components/Layout/FlexCenter";

const Spinner = ({ className }) => (
  <FlexCenter className={className}>
    <div className="spinner" />
  </FlexCenter>
);

Spinner.propTypes = {
  className: PropTypes.string.isRequired,
};

const SpinnerIcon = styled(Spinner)`
  position: relative;
  top: 20px;
  opacity: 0.25;

  .spinner {
    position: absolute;
    margin: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-clip: padding-box;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    -webkit-mask: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.1)),
      color-stop(90%, #000000)
    );
    -webkit-mask: linear-gradient(rgba(0, 0, 0, 0.1), #000000 90%);
    transform-origin: 70% 50%;
    -webkit-transform: perspective(200px) rotateX(66deg);
    transform: perspective(200px) rotateX(66deg);
    -webkit-animation: spinner-wiggle 1.2s infinite;
    animation: spinner-wiggle 1.2s infinite;
  }
  .spinner:before,
  .spinner:after {
    content: "";
    position: absolute;
    margin: -4px;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 0.05;
    border: inherit;
    border-color: transparent;
    -webkit-animation: spinner-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
      spinner-fade 1.2s linear infinite;
    animation: spinner-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
      spinner-fade 1.2s linear infinite;
  }

  .spinner:before {
    border-top-color: #66e6ff;
  }

  .spinner:after {
    border-top-color: #f0db75;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
`;

export default SpinnerIcon;
