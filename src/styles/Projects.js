import styled from "styled-components";

import React from "react";

import { FaGithub } from "react-icons/fa";

export const Portfolio = styled.div`
  background-color: darkgrey;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const Box = styled.ul`
  width: ${(props) => {
    return props.dimensions.width > 1024
      ? `${props.dimensions.width * 0.95}px`
      : `${props.dimensions.width}px`;
  }};
  min-height: 150px;
  margin-bottom: 40px;
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

export const ProjectStyle = styled.li`
  width: ${(props) => {
    return props.width > 1024
      ? `${props.width * 0.45}px`
      : `${props.width * 0.95}px`;
  }};
  height: ${(props) => {
    return props.type === "vertical"
      ? props.width > 1024
        ? `${props.width * 0.3}px`
        : `300px`
      : props.width > 1024
      ? `${props.width * 0.4}px`
      : ``;
  }};
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 1px 1px 2px 2px grey;
  margin-top: 20px;
  display: flex;
  flex-direction: ${(props) => {
    return props.type === "vertical" ? "row" : "column";
  }};
  justify-content: ${(props) => {
    return props.type === "vertical" ? "space-evenly" : "flex-start";
  }};
  align-items: center;
`;

export const PortfolioTitle = styled.h2`
  font-size: ${(props) => {
    return props.dimensions.width > 1024 ? "2em" : "1em";
  }};
  text-align: center;
  color: white;
  margin: 0;
`;

export const Title = styled.h3`
  font-size: 1em;
  color: black;
  margin: 0;
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  ${(props) => {
    return props.width > 1024
      ? ""
      : "width: 100%; justify-content: space-between";
  }}
`;

export const Link = styled.a`
  font-size: 0.4em;
  color: black;
  text-decoration: ${(props) => {
    return props.width > 1024 ? "none" : "underline";
  }};
  margin-top: 20;
`;

export const Image = styled.img`
  ${(props) => {
    return props.type === "vertical"
      ? "height: 90%; border-radius: 10px; border: 5px solid black;"
      : "width: 100%; height: 45%;";
  }};
  object-fit: cover;
`;

export const Info = styled.div`
  width: ${(props) => {
    return props.type === "vertical"
      ? props.width > 1024
        ? "60%"
        : "50%"
      : props.width > 1024
      ? "90%"
      : "95%";
  }};
  height: ${(props) => {
    return props.type === "vertical" ? "95%" : "";
  }};
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Text = styled.p`
  font-size: ${(props) => {
    return props.width > 660 ? "0.5em" : "0.4em";
  }};
  width: ${(props) => {
    return props.width > 1024 ? "100%" : "100%";
  }};
`;

export const BackToTopButton = styled.button`
  color: white;
  background-color: rgba(0, 0, 0, 1);
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 0;
  font-size: 30px;
  padding: 5px 20px 5px 20px;
  z-index: 1;
`;

export const Footer = styled.footer`
  background-color: black;
  width: 100%;
  height: 40px;
  z-index: 0;
  position: relative;
  margin-top: -20px;
`;

export function GithubLink() {
  return (
    <FaGithub
      size={50}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: 30,
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        border: "2px solid black",
        borderRadius: "50%",
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
