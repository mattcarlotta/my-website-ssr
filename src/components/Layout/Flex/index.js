import styled from "styled-components";

export default styled.div`
  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  justify-content: ${({ justify }) => justify || "start"};
`;
