import React from "react";

import { Box } from "../styles/Projects";
import Project from "./Project";

import { projectData } from "../data/projectData";

export default function ProjectBox(props) {
  return (
    <Box dimensions={props}>
      {projectData.map(data => {
          return <Project dimensions={props} data={data} />
      })}
    </Box>
  );
}
