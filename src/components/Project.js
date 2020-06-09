import React, { useState, useEffect } from "react";

import {
  ProjectStyle,
  Title,
  Link,
  Links,
  Image,
  Info,
  Text,
  GithubLink,
  LiveLink,
} from "../styles/Projects";

export default function Project(props) {
  const [imageNum, setImageNum] = useState(0);

  useEffect(() => {
    if (props.data.url.length > 1)
      setTimeout(() => {
        let nextImage = imageNum + 1;
        if (nextImage >= props.data.url.length) nextImage = 0;
        setImageNum(nextImage);
      }, 3000);
  });

  const { data, dimensions } = props;
  //Set what the github link should say based on screen size
  const githubLink = data.github ? (
    dimensions.width > 1024 ? (
      <GithubLink color={data.color1} />
    ) : (
      "View code"
    )
  ) : (
    ""
  );
  //Set what the live site link should look like based on whether there is one
  const liveLink = data.link ? (
    dimensions.width > 1024 ? (
      <LiveLink color={data.color1} />
    ) : (
      "Live site"
    )
  ) : (
    ""
  );
  //If picture is vertical, set type to vertical, else horizontal
  const type =
    data.name === "uFluent" || data.name === "Only Reggae"
      ? "vertical"
      : "horizontal";
  //Set what the image should be
  const image = (
    <Image
      src={data.url[imageNum]}
      alt={`Screenshot of ${data.name}`}
      type={type}
    />
  );

  return (
    <ProjectStyle width={dimensions.width} type={type} color1={data.color1} color2={data.color2}>
      {image}
      <Info width={dimensions.width} type={type} color2={data.color2}>
        <Title width={dimensions.width}>{data.name}</Title>
        <Text width={dimensions.width}>{data.description}</Text>
        <Links width={dimensions.width}>
          <Link href={data.link} width={dimensions.width}>
            {liveLink}
          </Link>
          <Link href={data.github} width={dimensions.width}>
            {githubLink}
          </Link>
        </Links>
      </Info>
    </ProjectStyle>
  );
}
