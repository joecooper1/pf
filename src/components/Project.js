import React from "react";

import { ProjectStyle } from "../styles/Projects";

export default function Project(props) {
    return <ProjectStyle width={props.dimensions.width}>{props.dimensions.width}</ProjectStyle>
};