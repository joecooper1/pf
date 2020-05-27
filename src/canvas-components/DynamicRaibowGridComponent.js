import React, { useState, useEffect, useRef } from "react";

import { MainCanvas } from "../styles/Canvas";

import dynamicRainbowGrid from "../canvas-utils/dynamicRainbowGrid";

export default function DynamicRainbowGridComponent(props) {
  const canvasRef = useRef(null);
  const [count, setCount] = useState(0);
  const [arrayOfPoints, setArrayOfPoints] = useState([]);
  const [colors, setColors] = useState({ r: 0, g: 0, b: 0 });

  //Set initial colors
  useEffect(() => {
    if (colors.r === 0 && colors.g === 0 && colors.b === 0) {
      const redValue = Math.floor(Math.random() * 255);
      const greenValue = Math.floor(Math.random() * 255);
      const blueValue = Math.floor(Math.random() * 255);
      setColors({ r: redValue, g: greenValue, b: blueValue });
    }
  });

  //Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      dynamicRainbowGrid(
        ctx,
        width,
        height,
        arrayOfPoints,
        setArrayOfPoints,
        colors,
        count
      );
    }
    //Set timeout to move to next step
    if (count < 50)
      setTimeout(() => {
        setCount(count + 1);
      }, 300);
  });

  //Set height and width of canvas
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
