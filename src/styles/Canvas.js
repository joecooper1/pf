import styled from "styled-components";

export const MainCanvas = styled.canvas`
  height: ${(props) => `${props.dimensions.height * 0.9}px`};
  width: ${(props) => `${props.dimensions.width * 0.9}px`};
  background-color: blue;
  position: absolute;
  margin: ${(props) => `${props.dimensions.height * 0.05}px`}
    ${(props) => `${props.dimensions.width * 0.05}px`};
  z-index: -1;
`;
