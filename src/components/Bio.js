import React from "react";

import { Title, Text, View, SmallText, Link } from "../styles/Bio";

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
        or here I am on <Link href="https://www.github.com/joecooper1">github</Link> and{" "}
        <Link href="https://www.linkedin.com/in/joe-cooper-202b2689/">linkedin</Link>
      </SmallText>
      {/* <BigContacts dimensions={props} /> */}
    </View>
  );
}
