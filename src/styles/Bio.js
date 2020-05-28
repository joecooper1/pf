import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => {
    return props.dimensions.width > 1024 ? "2.5em" : "1.5em";
  }};
  text-align: center;
  // color: palevioletred;
  margin: 0;
`;

export const Text = styled.p`
  font-size: ${(props) => {
    return props.dimensions.width > 1024 ? "1em" : "0.7em";
  }};
  text-align: center;
  // color: palevioletred;
  margin-top: 0;
`;

export const SmallText = styled.p`
  font-size: ${(props) => {
    return props.dimensions.width > 1024 ? "0.7em" : "0.5em";
  }};
  text-align: center;
  // color: palevioletred;
  margin: 0;
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => `${props.dimensions.height}px`};
  justify-content: center;
`;

export const SmallView = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${(props) => {
    return props.dimensions.width > 1024 ? "40px" : "20px";
  }};
  padding-bottom: 10px;
  border-radius: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled.a`
  color: black;
  text-decoration: underline;
`;

export const ButtonsBar = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 20px;
  text-decoration: underline;
`;

export const ButtonTwo = styled.button`
  background: none;
  color: grey;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 15px;
  text-decoration: underline;
  margin-top: 25px;
`;
