import React from "react";
import styled from "styled-components";

export const Window = styled.h1`
  width: 100%;
  height: ${props => `${props.height}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  margin: 0;
`;
