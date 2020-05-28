import React from "react";

import {
  Text,
  View,
  SmallText,
  Link,
  SmallView,
  ButtonsBar,
  Button,
  ButtonTwo
} from "../styles/Bio";

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
        <ButtonsBar>
          <Button
            dimensions={props}
            onClick={() => {
              props.scrollComponent("about");
            }}
          >
            about
          </Button>
          <Button
            dimensions={props}
            onClick={() => {
              props.scrollComponent("projects");
            }}
          >
            projects
          </Button>
        </ButtonsBar>
        <ButtonTwo>what is this background?</ButtonTwo>
      </SmallView>
    </View>
  );
}
