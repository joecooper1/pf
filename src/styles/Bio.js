import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Text = styled.p`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`;

export const View = styled.header`
  display: flex;
  flex-direction: column;
`;

//Contacts bar. Dimensions is passed through. Variables depend on dimensions width.
export const Contacts = styled.nav`
  display: flex;
  flex-direction: ${(props) => {
    return props.dimensions.width > 1024 ? "row" : "column";
  }};
  background-color: white;
  width: ${(props) => {
    return props.dimensions.width > 1024
      ? `${props.dimensions.width * 0.6}px`
      : `${props.dimensions.width}px`;
  }};
  height: 100px;
`;
