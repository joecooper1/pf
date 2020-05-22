import styled from "styled-components";

export const Box = styled.ul`
  width: ${(props) => `${props.dimensions.width * 0.95}px`};
  background-color: red;
  min-height: 150px;
  margin-bottom: 100px;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  flex-direction: ${(props) => {
    return props.dimensions.width > 1024 ? "row" : "column";
  }};
  justify-content: ${(props) => {
    return props.dimensions.width > 1024 ? "space-around" : "flex-start";
  }};
  flex-wrap: wrap;
  align-items: stretch;
  align-content: space-around;
`;

export const ProjectStyle = styled.div`
  width: ${(props) => {
    return props.width > 1024
      ? `${props.width * 0.3}px`
      : `${props.width * 0.85}px`;
  }};
  height: ${(props) => {
    return props.width > 1024
      ? `${props.width * 0.3}px`
      : `200px`;
  }};
  background-color: ${(props) => {
    return props.width > 1024
      ? 'green'
      : `yellow`;
  }};
  margin: 10px;
  
`;
