import React, { useState, useEffect, useRef } from "react";

import { MainCanvas } from "../styles/Canvas";

import dynamicRainbowGrid from "../canvas-utils/dynamicRainbowGrid";

export default function DynamicRainbowGridComponent(props) {
  const canvasRef = useRef(null);

  //Count - a counter that propels the animations
  const [count, setCount] = useState(0);
  //Array of points - an array containing all the grid coordinates, and their colors
  const [arrayOfPoints, setArrayOfPoints] = useState([]);
  //Colors - the initial colors for the top left piece
  const [colors, setColors] = useState({ r: 0, g: 0, b: 0 });
  //Type - the shape of the pieces
  const [type, setType] = useState(null);

  //Select type
  useEffect(() => {
    if (!type) {
      //If small screen, don't allow circles (because they look bad)
      const types =
        props.width > 1024 ? ["circle", "square", "abstract"] : ["abstract"];
      setType(types[Math.floor(Math.random() * types.length)]);
    }
  }, [type]);

  //Set initial colors
  useEffect(() => {
    if (colors.r === 0 && colors.g === 0 && colors.b === 0) {
      //Set seed color to ensure pastels only, and no whites
      const seedValue = Math.floor(Math.random() * 150 + 50);
      const redValue = seedValue + Math.floor(Math.random() * 50 - 25);
      const greenValue = seedValue + Math.floor(Math.random() * 50 - 25);
      const blueValue = seedValue + Math.floor(Math.random() * 50 - 25);
      setColors({ r: redValue, g: greenValue, b: blueValue });
    }
  }, [colors.r, colors.g, colors.b]);

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
        count,
        type
      );
    }
    //Set timeout to move to next step, DISABLE THIS TO STOP ANIMATION, or change timer to speed it up/slow it down
    if (count <= 0)
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
