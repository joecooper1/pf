import React, { useState, useEffect, useRef } from "react";

import { MainCanvas } from "../styles/Canvas";

import draw from "../canvas/draw";

export default function Canvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      // draw(ctx, props);
    }
  });

  return (
    <MainCanvas
      id="main"
      width={props.width * 0.9}
      height={props.height * 0.9}
      ref={canvasRef}
      dimensions={props}
    ></MainCanvas>
  );
}
