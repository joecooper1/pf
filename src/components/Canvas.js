import React from "react";

import DynamicRainbowGridComponent from "../canvas-components/DynamicRainbowGridComponent";
import TestCanvas from "../canvas-components/TestCanvas";

export default function Canvas(props) {
  const width = props.width > 1024 ? props.width * 0.9 : props.width;
  const height = props.width > 1024 ? props.height * 0.9 : props.height;

  // return <DynamicRainbowGridComponent height={height} width={width} />;
  return <TestCanvas height={height} width={width}></TestCanvas>;
}
