import PropTypes from "prop-types";
import { AiOutlineFolderOpen, AiOutlineCode } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import Info from "~components/Layout/Info";

const FileDetails = ({ active, location, fileName, source, status }) => (
  <IconContext.Provider
    value={{
      style: { fontSize: 20, verticalAlign: "text-top", marginRight: 7 },
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
      {location && (
        <Info>
          <RiMapPin2Line />
          <a
            href={location}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Link to hosted website"
          >
            {location}
          </a>
        </Info>
      )}
      <Info>
        <AiOutlineCode />
        <a
          href={source}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Link to source code"
        >
          {source}
        </a>
      </Info>
    </div>
  </IconContext.Provider>
);

FileDetails.propTypes = {
  active: PropTypes.bool,
  fileName: PropTypes.string.isRequired,
  location: PropTypes.string,
  status: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

FileDetails.defaultProps = {
  active: false,
};

export default FileDetails;
