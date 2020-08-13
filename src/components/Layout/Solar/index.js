import styled from "styled-components";
import PropTypes from "prop-types";
import FlexCenter from "~components/Layout/FlexCenter";

const Solar = ({ className }) => (
  <FlexCenter className={className}>
    <div className="solar-system">
      <div className="earth-orbit orbit">
        <div className="planet earth" />
        <div className="venus-orbit orbit">
          <div className="planet venus" />
          <div className="mercury-orbit orbit">
            <div className="planet mercury" />
            <div className="sun" />
          </div>
        </div>
      </div>
    </div>
  </FlexCenter>
);

Solar.propTypes = {
  className: PropTypes.string.isRequired,
};

const SolarIcon = styled(Solar)`
  position: relative;
  background-color: transparent;
  z-index: -1;
  opacity: 0.15;

  .solar-system {
    position: absolute;
    top: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ffffffa5;
    border-radius: 50%;
  }

  .earth-orbit {
    width: 665px;
    height: 665px;
    -webkit-animation: spin 12s linear 0s infinite;
  }

  .venus-orbit {
    width: 420px;
    height: 420px;
    -webkit-animation: spin 7.4s linear 0s infinite;
  }

  .mercury-orbit {
    width: 190px;
    height: 190px;
    -webkit-animation: spin 3s linear 0s infinite;
  }

  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #0096ff;
  }

  .sun {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #0096ff;
  }
`;

export default SolarIcon;
