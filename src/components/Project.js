import React from "react";

import { ProjectStyle, Title, Link, Image, Info, Text } from "../styles/Projects";

export default function Project(props) {
  const { data } = props;
  return (
    <ProjectStyle width={props.dimensions.width}>
      <Image src={data.url} alt={`Screenshot of ${data.name}`} />
      <Info>
        <Title>{data.name}</Title>
        <Link href={data.github}>{data.github}</Link>
        <Text>{data.description}</Text>
      </Info>
    </ProjectStyle>
  );
}
