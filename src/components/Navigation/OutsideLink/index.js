import styled from "styled-components";

const OutsideLink = styled.a.attrs(() => ({
  rel: "noopener noreferrer",
  target: "_blank",
}))`
  padding: 10px 15px;
  color: #1295f3;
  transition: all 0.5s;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;
  }

  &:focus {
    outline: none !important;
    text-decoration: none;
  }
`;

export default OutsideLink;
