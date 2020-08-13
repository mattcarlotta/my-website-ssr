import PropTypes from "prop-types";
import { GiWorld } from "react-icons/gi";
import { AiOutlineFolderOpen, AiOutlineCode } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import Info from "~components/Layout/Info";

const FileDetails = ({ active, location, fileName, source, status }) => (
  <IconContext.Provider
    value={{
      style: { fontSize: 18, verticalAlign: "text-top", marginRight: 5 },
    }}
  >
    <div css="margin-bottom: 20px; padding-left: 20px;">
      <Info>
        <BsFillCircleFill style={{ color: active ? "limegreen" : "#2c4776" }} />
        {status}
      </Info>
      <Info>
        <AiOutlineFolderOpen />
        {fileName}
      </Info>
      <Info>
        <GiWorld />
        <a
          href={location.link}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Link to hosted website"
        >
          {location.text}
        </a>
      </Info>
      <Info>
        <AiOutlineCode />
        <a
          href={source}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Link to source code"
        >
          github
        </a>
      </Info>
    </div>
  </IconContext.Provider>
);

FileDetails.propTypes = {
  active: PropTypes.bool,
  fileName: PropTypes.string.isRequired,
  location: PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
  status: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

FileDetails.defaultProps = {
  active: false,
};

export default FileDetails;
