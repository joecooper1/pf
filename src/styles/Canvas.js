import styled from "styled-components";

export const MainCanvas = styled.canvas`
  height: ${(props) => `${props.dimensions.height * 0.95}px`};
  width: ${(props) => `${props.dimensions.width * 0.95}px`};
  background-color: blue;
  //   position: fixed;
  margin: 10px;
  z-index: -1;
`;
