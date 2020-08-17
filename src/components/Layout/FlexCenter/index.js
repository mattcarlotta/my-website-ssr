import styled from "styled-components";

export default styled.div`
  flex-direction: ${({ direction }) => direction || "column"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
