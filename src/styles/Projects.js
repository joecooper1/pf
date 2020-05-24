import styled from "styled-components";

import React from "react";

import { FaGithub } from "react-icons/fa";

export const Box = styled.ul`
  width: ${(props) => `${props.dimensions.width * 0.95}px`};
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 150px;
  margin-bottom: 100px;
  margin-left: 0px;
  padding-left: 0px;
  padding-bottom: 10px;
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
    return props.type === "vertical"
      ? props.width > 1024
        ? `${props.width * 0.3}px`
        : `220px`
      : props.width > 1024
      ? `${props.width * 0.4}px`
      : `370px`;
  }};
  background-color: white;
  // border: 3px solid black;
  box-shadow: 5px 5px grey;
  border-radius: 10px;
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

export const Links = styled.nav`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  ${props => {
    return props.width > 1024 ? "" : "width: 100%; justify-content: space-between";
  }}
`;

export const Link = styled.a`
  font-size: 0.4em;
  color: black;
  text-decoration: ${props => {
    return props.width > 1024 ? "none" : "underline";
  }};
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
    return props.type === "vertical"
      ? props.width > 1024
        ? "60%"
        : "70%"
      : props.width > 1024
      ? "90%"
      : "95%";
  }};
  max-height: ${(props) => {
    return props.type === "vertical" ? "95%" : "50%";
  }};
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: ${(props) => {
    return props.width > 660 ? "0.5em" : "0.4em";
  }};
  width: ${(props) => {
    return props.width > 1024 ? "100%" : "100%";
  }};
`;

export function GithubLink() {
  return (
    <FaGithub
      size={50}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: 50,
        height: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        border: "2px solid black",
        borderRadius: "10px",
      }}
    />
  );
}

export function LiveLink() {
  return (
    <p
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: 70,
        height: 30,
        paddingLeft: 10,
        paddingRight: 0,
        paddingTop: 15,
        paddingBottom: 5,
        border: "2px solid black",
        borderRadius: "10px",
        margin: 0,
        marginRight: 20,
      }}
    >
      View Live
    </p>
  );
}
