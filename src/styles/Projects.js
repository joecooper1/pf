import styled from "styled-components";

export const Box = styled.ul`
  width: ${(props) => `${props.dimensions.width * 0.95}px`};
  background-color: red;
  min-height: 150px;
  margin-bottom: 100px;
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

export const Project = styled.li`
`;
