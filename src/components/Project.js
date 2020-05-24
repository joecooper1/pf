import React from "react";

import {
  ProjectStyle,
  Title,
  Link,
  Links,
  Image,
  Info,
  Text,
  GithubLink,
  LiveLink
} from "../styles/Projects";

export default function Project(props) {
  const { data, dimensions } = props;
  //Set what the github link should say based on screen size
  const githubLink = data.github ? dimensions.width > 1024 ? <GithubLink /> : "View code" : "";
  //Set what the live site link should look like based on whether there is one
  const liveLink = data.link ? dimensions.width > 1024 ? <LiveLink /> : "Live site" : "";
  //If picture is vertical, set type to vertical, else horizontal
  const type =
    data.name === "uFluent" || data.name === "Only Reggae"
      ? "vertical"
      : "horiztontal";

  return (
    <ProjectStyle width={dimensions.width} type={type}>
      <Image src={data.url} alt={`Screenshot of ${data.name}`} type={type} />
      <Info width={dimensions.width} type={type}>
        <Title width={dimensions.width}>{data.name}</Title>
        <Text width={dimensions.width}>{data.description}</Text>
        <Links width={dimensions.width}>
          <Link href={data.link} width={dimensions.width}>{liveLink}</Link>
          <Link href={data.github} width={dimensions.width}>
            {githubLink}
          </Link>
        </Links>
      </Info>
    </ProjectStyle>
  );
}
