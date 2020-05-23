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
    return props.dimensions.width > 1024 ? "space-evenly" : "flex-start";
  }};
  flex-wrap: wrap;
  align-items: stretch;
  align-content: space-around;
`;

export const ProjectStyle = styled.div`
  width: ${(props) => {
    return props.width > 1024
      ? `${props.width * 0.45}px`
      : `${props.width * 0.95}px`;
  }};
  height: ${(props) => {
    return props.width > 1024 ? `${props.width * 0.3}px` : `220px`;
  }};
  background-color: ${(props) => {
    return props.width > 1024 ? "green" : `yellow`;
  }};
  margin-top: 10px;
  display: flex;
  flex-direction: ${(props) => {
    return props.type === "vertical" ? "row" : "column";
  }};
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1em;
  color: black;
  margin: 0;
`;

export const Link = styled.a`
  font-size: 0.4em;
  color: black;
  text-decoration: none;
  margin-top: 20;
`;

export const Image = styled.img`
  ${(props) => {
    return props.type === "vertical"
      ? "height: 90%; border-radius: 10px;"
      : "width: 90%";
  }};
  object-fit: cover;
  border: 5px solid black;
`;

export const Info = styled.div`
  width: ${(props) => {
    return props.width > 1024 ? "60%" : "70%";
  }};
  height: 95%;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: ${(props) => {
    return props.width > 660 ? "0.5em" : "0.4em";
  }};
  width: ${(props) => {
    return props.width > 1024 ? "90%" : "100%";
  }};
  background-color: white;
`;
