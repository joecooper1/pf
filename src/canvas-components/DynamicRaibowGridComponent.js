import React, { useState, useEffect, useRef } from "react";

import { MainCanvas } from "../styles/Canvas";

import dynamicRainbowGrid from "../canvas-utils/dynamicRainbowGrid";

export default function DynamicRainbowGridComponent(props) {
  const canvasRef = useRef(null);
  const [count, setCount] = useState(0);
  const [arrayOfPoints, setArrayOfPoints] = useState([]);

  // useEffect(() => {
  //   if (count === 0) {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 5000);
  //   } else if (count < 100) {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 100);
  //   } else {
  //     setCount(0);
  //   }
  // });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      dynamicRainbowGrid(ctx, width, height, arrayOfPoints, setArrayOfPoints);
    }
  });

  const { height, width } = props;

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
