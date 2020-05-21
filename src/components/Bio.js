import React from "react";

import { Title, Text, View, Contacts } from "../styles/Bio";

export default function Bio(props) {
  return (
    <View>
      <Title>Joe Cooper</Title>
      <Text>Hi. I'm Joe. I'm a full-stack software developer.</Text>
      <Contacts dimensions={props}></Contacts>
    </View>
  );
}
