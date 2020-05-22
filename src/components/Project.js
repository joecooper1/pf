import React from "react";

import { ProjectStyle, Title, Link, Image } from "../styles/Projects";

export default function Project(props) {
    const {data} = props;
    return <ProjectStyle width={props.dimensions.width}>
        <Image src={data.url} alt={`Screenshot of ${data.name}`}/>
        <Title>{data.name}</Title>
        <Link href={data.github}>github</Link>
    </ProjectStyle>
};