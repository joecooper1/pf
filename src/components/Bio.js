import React from "react";

import { Title, Text, View, Contacts } from "../styles/Bio";

import BigContacts from "./BigContacts";

export default function Bio(props) {
  return (
    <View>
      <Title dimensions={props}>Joe Cooper</Title>
      <Text dimensions={props}>
        Hi. I'm Joe.<br></br> I'm a full-stack software developer.
      </Text>
      <BigContacts dimensions={props} />
    </View>
  );
}
