import React from "react";

import {
  ProjectStyle,
  Title,
  Link,
  Image,
  Info,
  Text,
} from "../styles/Projects";

export default function Project(props) {
  const { data, dimensions } = props;
  //Set what the github link should say based on screen size
  const githubLink = dimensions.width > 1024 ? data.github : "View code";
  //If picture is vertical, set type to vertical, else horizontal
  const type =
    data.name === "uFluent" || data.name === "Only Reggae"
      ? "vertical"
      : "horiztontal";

  return (
    <ProjectStyle width={dimensions.width} type={type}>
      <Image src={data.url} alt={`Screenshot of ${data.name}`} type={type} />
      <Info width={dimensions.width}>
        <Title width={dimensions.width}>{data.name}</Title>
        <Link href={data.github} width={dimensions.width}>
          {githubLink}
        </Link>
        <Text width={dimensions.width}>{data.description}</Text>
      </Info>
    </ProjectStyle>
  );
}
