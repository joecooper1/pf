import React, { useState, useEffect, useRef } from "react";

import { MainCanvas } from "../styles/Canvas";

import DynamicRainbowGridComponent from "../canvas-components/DynamicRainbowGridComponent";

export default function Canvas(props) {
  const width = props.width > 1024 ? props.width * 0.9 : props.width;
  const height = props.width > 1024 ? props.height * 0.9 : props.height;

  return <DynamicRainbowGridComponent height={height} width={width} />;
}
