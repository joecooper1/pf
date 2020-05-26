import styled from "styled-components";

export const Window = styled.h1`
  // width: ${props => `${props.width}px`};
  min-height: ${props => `${props.height}px`};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  // background-color: blue;
  margin: 0;
  flex-direction: column;
  font-family: 'Roboto Slab', serif;
`;
