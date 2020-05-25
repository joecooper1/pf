import React from "react";

import { Box, PortfolioTitle, Portfolio } from "../styles/Projects";
import Project from "./Project";

import { projectData } from "../data/projectData";

export default function ProjectBox(props) {
  return (
    <Portfolio>
      <PortfolioTitle dimensions={props}>Portfolio</PortfolioTitle>
      <Box dimensions={props}>
        {projectData.map((data) => {
          return <Project dimensions={props} data={data} key={data.name} />;
        })}
      </Box>
    </Portfolio>
  );
}
