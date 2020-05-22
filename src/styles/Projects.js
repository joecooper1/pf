import styled from "styled-components";

export const Box = styled.div`
  width: ${props => `${props.dimensions.width* 0.95}px`};
  background-color: red;
  min-height: 150px;
  margin-bottom: 100px;

`;
