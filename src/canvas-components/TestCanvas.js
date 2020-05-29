import React, { useRef, useEffect } from "react";

import { MainCanvas } from "../styles/Canvas";

export default function TestCanvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 100, 100);
    }
  });

  const { width, height } = props;

  return (
    <MainCanvas
      width={width}
      height={height}
      ref={canvasRef}
      dimensions={props}
    ></MainCanvas>
  );
}
