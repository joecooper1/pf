import styled from "styled-components";

//Contacts bar. Dimensions is passed through. Variables depend on dimensions width.
export const BigContactStyle = styled.nav`
  display: flex;
  flex-direction: column;
  width: ${(props) => {
    return `${props.dimensions.width * 0.6}px`
  }};
  height: 100px;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: white;
`;

export const Text = styled.p`
  color: black;
  font-size: 0.5em;
  margin: 0;
`;
