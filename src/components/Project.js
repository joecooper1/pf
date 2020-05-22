import React from "react";

import { ProjectStyle, Title, Link, Image, Info, Text } from "../styles/Projects";

export default function Project(props) {
  const { data, dimensions } = props;
  const githubLink = dimensions.width > 1024 ? data.github : 'View code';
  return (
    <ProjectStyle width={dimensions.width}>
      <Image src={data.url} alt={`Screenshot of ${data.name}`} />
      <Info width={dimensions.width}>
        <Title width={dimensions.width}>{data.name}</Title>
        <Link href={data.github} width={dimensions.width}>{githubLink}</Link>
        <Text width={dimensions.width}>{data.description}</Text>
      </Info>
    </ProjectStyle>
  );
}
