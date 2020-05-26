import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${props=> {
    return props.dimensions.width > 1024 ? '2.5em' : '1.5em'
  }};
  text-align: center;
  // color: palevioletred;
  margin: 0;
`;

export const Text = styled.p`
  font-size: ${props=> {
    return props.dimensions.width > 1024 ? '1em' : '0.7em'
  }};
  text-align: center;
  // color: palevioletred;
`;

export const SmallText = styled.p`
  font-size: ${props=> {
    return props.dimensions.width > 1024 ? '0.7em' : '0.5em'
  }};
  text-align: center;
  // color: palevioletred;
  margin: 0;
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => `${props.dimensions.height}px`};
  justify-content: center;
`;

export const SmallView = styled.div`
  background-color: rgba(64, 66, 108, 0.4);
  padding: 40px;
  border-radius: 20px;
`;

export const Link = styled.a`
  color: black;
  text-decoration: underline;
`;
