import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

const LinkComponent = ({
  ariaLabel,
  asHref,
  className,
  children,
  dataTest,
  href,
  style,
  target,
}) => (
  <Link href={href} as={asHref} prefetch={false} passHref>
    <a
      aria-label={ariaLabel}
      data-test={dataTest}
      style={style}
      className={className}
      target={target}
    >
      {children}
    </a>
  </Link>
);

LinkComponent.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  asHref: PropTypes.string,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  dataTest: PropTypes.string,
  href: PropTypes.string.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  target: PropTypes.string,
};

const StyledLink = styled(LinkComponent)`
  padding: ${({ padding }) => padding || "10px 15px"};
  color: #1295f3;
  transition: all 0.5s;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  &:focus {
    color: #1295f3;
    outline: none !important;
    text-decoration: none;
  }
`;

export default StyledLink;
