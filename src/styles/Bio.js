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

export const SmallText = styled.p`
  font-size: ${props=> {
    return props.dimensions.width > 1024 ? '0.7em' : '0.3em'
  }};
  text-align: center;
  color: palevioletred;
  margin: 0;
`;

export const View = styled.header`
  display: flex;
  flex-direction: column;
`;
