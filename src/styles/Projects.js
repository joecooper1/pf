import styled from "styled-components";

export const Box = styled.div`
  width: ${props => `${props.dimensions.width}px`};
  background-color: red;
  height: 50px;
`;
