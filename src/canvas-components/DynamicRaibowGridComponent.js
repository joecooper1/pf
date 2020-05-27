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
      //Set seed color to ensure pastels only
      const seedValue = Math.floor(Math.random() * 255);
      const redValue = seedValue + Math.floor(Math.random() * 30 - 15);
      const greenValue = seedValue + Math.floor(Math.random() * 30 - 15);
      const blueValue = seedValue + Math.floor(Math.random() * 30 - 15);
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
    //Set timeout to move to next step, DISABLE THIS TO STOP ANIMATION
    if (count >= 0)
      setTimeout(() => {
        setCount(count + 1);
      }, 50);
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
