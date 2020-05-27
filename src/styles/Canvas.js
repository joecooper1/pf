import styled from "styled-components";

export const MainCanvas = styled.canvas`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  margin: ${(props) => {
    return props.dimensions.width > 1024
      ? `${props.dimensions.height * 0.05}px ${props.dimensions.width * 0.05}px`
      : ``;
  }};
  z-index: -1;
`;
