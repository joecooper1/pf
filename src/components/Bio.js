import React from "react";

import { Title, Text, View, SmallText, Link, SmallView } from "../styles/Bio";

export default function Bio(props) {
  return (
    <View dimensions={props}>
      <SmallView dimensions={props}>
        <Text dimensions={props}>
          Hi. I'm Joe.<br></br> I'm a full-stack software developer.
        </Text>
        <SmallText dimensions={props}>
          Email me at joecooper2991@gmail.com
        </SmallText>
        <SmallText dimensions={props}>
          or here I am on{" "}
          <Link href="https://www.github.com/joecooper1">github</Link> and{" "}
          <Link href="https://www.linkedin.com/in/joe-cooper-202b2689/">
            linkedin
          </Link>
        </SmallText>
        <button dimensions={props} onClick={() => {props.scrollComponent('about')}}>about</button>
        <button dimensions={props} onClick={() => {props.scrollComponent('projects')}}>projects</button>
      </SmallView>
    </View>
  );
}
