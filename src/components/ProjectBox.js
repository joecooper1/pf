import React from "react";

import { Box } from "../styles/Projects";
import Project from "./Project";

export default function ProjectBox(props) {
  return <Box dimensions={props}>
      <Project dimensions={props}/>
      <Project dimensions={props}/>
      <Project dimensions={props}/>
      <Project dimensions={props}/>
  </Box>;
}
