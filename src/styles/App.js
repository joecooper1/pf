import styled from "styled-components";

export const Window = styled.h1`
  width: ${props => `${props.width}px`};
  min-height: ${props => `${props.height}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  margin: 0;
  flex-direction: ${props => {return props.width > 1024 ? 'row' : 'column'}}
`;
