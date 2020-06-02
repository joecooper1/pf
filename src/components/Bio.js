import React, { useState } from "react";
import {CSSTransition} from 'react-transition-group';
import cx from 'classnames';

import {
  Text,
  View,
  SmallText,
  Link,
  SmallView,
  ButtonsBar,
  Button,
  ButtonTwo,
  OptionsBar,
  TinyText,
  SelectBar,
} from "../styles/Bio";

export default function Bio(props) {
  const [info, setInfo] = useState("main");

  let infoToShow = <h1>what</h1>;

  if (info === "main") {
    infoToShow = (
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
        <ButtonTwo
          onClick={() => {
            setInfo("background");
          }}
        >
          what is this background?
        </ButtonTwo>
      </SmallView>
    );
  } else {
    //Background info
    infoToShow = (
      <SmallView dimensions={props}>
        <TinyText dimensions={props}>
          The background is drawn using stained-glass-generator,<br></br> an NPM
          package that I made.
        </TinyText>
        <br></br>
        <TinyText dimensions={props}>
          View it{" "}
          <Link href="https://www.npmjs.com/package/@joecooper1/stained-glass-generator">
            here
          </Link>
          {" "}on npm<br></br>or{" "}
          <Link href="https://github.com/joecooper1/stained-glass-generator">
            here
          </Link>{" "}
          on github.
        </TinyText>
        <ButtonTwo
          onClick={() => {
            setInfo("main");
          }}
        >
          go back
        </ButtonTwo>
      </SmallView>
    );
  }

  return <View dimensions={props}>{infoToShow}</View>;
}
