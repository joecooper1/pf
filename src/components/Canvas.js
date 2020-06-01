import React from "react";

import DynamicRainbowGridComponent from "../canvas-components/DynamicRainbowGridComponent";


export default function Canvas(props) {
  const width = props.width > 1024 ? props.width * 0.9 : props.width;
  const height = props.width > 1024 ? props.height * 0.9 : props.height;

  if (props.width > 1) {
    return <DynamicRainbowGridComponent height={height} width={width} />;
  } else {
    //Place a background image
    const pics = [];
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
