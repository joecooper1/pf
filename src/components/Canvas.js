import React, { useState, useEffect, useRef } from "react";

import { MainCanvas } from "../styles/Canvas";

import draw from "../canvas/draw";
import dynamicRainbowGrid from "../canvas/dynamicRainbowGrid";

export default function Canvas(props) {
  const canvasRef = useRef(null);
  const width = props.width > 1024 ? props.width * 0.9 : props.width;
  const height = props.width > 1024 ? props.height * 0.9 : props.height;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      dynamicRainbowGrid(ctx, width, height);
    }
  });

  return (
    <MainCanvas
      id="main"
      width={width}
      height={height}
      ref={canvasRef}
      dimensions={props}
    ></MainCanvas>
  );
}
