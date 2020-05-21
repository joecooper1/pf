import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${props=> {
    return props.dimensions.width > 1024 ? '2.5em' : '1.5em'
  }};
  text-align: center;
  color: palevioletred;
  margin: 0;
`;

export const Text = styled.p`
  font-size: ${props=> {
    return props.dimensions.width > 1024 ? '1em' : '0.5em'
  }};
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
