import React from "react";

import { Title, Text, View, SmallText } from "../styles/Bio";

import BigContacts from "./BigContacts";

export default function Bio(props) {
  return (
    <View>
      <Title dimensions={props}>Joe Cooper</Title>
      <Text dimensions={props}>
        Hi. I'm Joe.<br></br> I'm a full-stack software developer.
      </Text>
      <SmallText dimensions={props}>Email me at joecooper2991@gmail.com</SmallText>
      <SmallText dimensions={props}>
        Here I am at <a href="https://www.github.com/joecooper1">github</a> and{" "}
        <a href="https://www.linkedin.com/in/joe-cooper-202b2689/">linkedin</a>
      </SmallText>
      {/* <BigContacts dimensions={props} /> */}
    </View>
  );
}
