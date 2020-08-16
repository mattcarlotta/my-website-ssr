import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineFileImage } from "react-icons/ai";

const Image = ({ className }) => (
  <div className={className}>
    <AiOutlineFileImage />
    <p>Unable to load image</p>
  </div>
);

Image.propTypes = {
  className: PropTypes.string.isRequired,
};

const BrokenImage = styled(Image)`
  margin-top: 25px;
  text-align: center;
  color: #686868;
  width: 100%;

  svg {
    font-size: 40px;
  }
`;

export default BrokenImage;
