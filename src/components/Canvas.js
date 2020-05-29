import React from "react";

import DynamicRainbowGridComponent from "../canvas-components/DynamicRainbowGridComponent";
import TestCanvas from "../canvas-components/TestCanvas";

import fancyBg1 from "../images/fancyBg1.png";
import fancyBg2 from "../images/fancyBg2.png";
import fancyBg3 from "../images/fancyBg3.png";

export default function Canvas(props) {
  const width = props.width > 1024 ? props.width * 0.9 : props.width;
  const height = props.width > 1024 ? props.height * 0.9 : props.height;

  if (props.width > 1) {
    return <DynamicRainbowGridComponent height={height} width={width} />;
    // return <TestCanvas height={height} width={width}></TestCanvas>;
  } else {
    //Place a background image
    const pics = [fancyBg1, fancyBg2, fancyBg3];
    const pic = pics[Math.floor(Math.random() * pics.length)];
    return (
      <img
        src={pic}
        alt="stained-glass-background"
        style={{ width: props.width, zIndex: -1, position: "absolute" }}
      ></img>
    );
  }
}
