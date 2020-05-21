import styled from "styled-components";

//Contacts bar. Dimensions is passed through. Variables depend on dimensions width.
export const BigContactStyle = styled.nav`
  display: flex;
  flex-direction: 'row';
  background-color: white;
  width: ${(props) => {
    return `${props.dimensions.width * 0.6}px`
  }};
  height: 100px;
`;
