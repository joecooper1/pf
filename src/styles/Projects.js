import styled from "styled-components";

import React from "react";

import { FaGithub } from "react-icons/fa";

export const Portfolio = styled.div`
  background-color: rgb(20, 20, 20);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding-top: 40px;
  // border-top: 20px solid white;
  font-family: "Montserrat", sans-serif;
`;

export const Box = styled.ul`
  width: ${(props) => {
    return props.dimensions.width > 1024
      ? `100%`
      : `${props.dimensions.width}px`;
  }};
  min-height: 150px;
  margin-bottom: 40px;
  margin-left: 0px;
  padding-left: 0px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: ${(props) => {
    return props.dimensions.width > 1024 ? "row" : "column";
  }};
  justify-content: ${(props) => {
    return props.dimensions.width > 1024 ? "flex-start" : "flex-start";
  }};
  flex-wrap: wrap;
  align-items: stretch;
  // align-content: space-around;
  // background-color: pink;
`;

export const ProjectStyle = styled.li`
  box-sizing: border-box;
  border: ${(props) => {
    return props.width > 1024 ? `5px solid black` : ``;
  }};
  width: ${(props) => {
    return props.width > 1024 ? `50%` : `${props.width * 1}px`;
  }};
  background-color: ${(props) => {
    return props.width > 1024
      ? `hsl(0, 0%, ${Math.random() * 30 + 50}%)`
      : props.color1;
  }};
  // background-color: ${(props) => props.color1};
  color: ${(props) => {
    return props.width > 1024 ? `black` : `${(props) => props.color2}`;
  }};
  filter: ${(props) => {
    return props.width > 1024 ? `grayscale(100%)` : `grayscale(0%)`;
  }};
  &:hover {
    background-color: ${(props) => props.color1};
    color: ${(props) => props.color2};
    filter: grayscale(0%);
  }
  margin-top: 0px;
  display: flex;
  flex-direction: ${(props) => {
    return props.type === "vertical" ? "row" : "column";
  }};
  justify-content: ${(props) => {
    return props.type === "vertical" ? "space-evenly" : "flex-start";
  }};
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  align-content: flex-start;
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
  color: inherit;
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
  }}// background-color: pink
`;

export const Link = styled.a`
  font-size: 0.4em;
  color: inherit;
  text-decoration: ${(props) => {
    return props.width > 1024 ? "none" : "underline";
  }};
  margin-top: 20;
`;

export const Image = styled.img`
  ${(props) => {
    return props.type === "vertical"
      ? props.width > 1024
        ? "height: 90%; border-radius: 10px; border: 5px solid black;"
        : `height: 270px; border-radius: 10px; border: 5px solid black;`
      : "width: 90%; max-height: 270px; background-color: black";
  }};
  object-fit: contain;
  filter: ${(props) => {
    return props.width > 1024 ? "inherit" : "grayscale(0%)";
  }};
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
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  // background-color: blue
  color: ${(props) => {
    return props.width > 1024 ? "inherit" : props.color2;
  }};
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

export function GithubLink(color) {
  return (
    <FaGithub
      size={50}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        width: 30,
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        border: "2px solid black",
        borderRadius: "50%",
        color: "black",
      }}
    />
  );
}

export function LiveLink(color) {
  return (
    <p
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
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
        color: "black",
      }}
    >
      View Live
    </p>
  );
}
