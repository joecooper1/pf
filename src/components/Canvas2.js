import React, { useRef, useEffect, useState } from "react";

import drawStainedGlass from "@joecooper1/stained-glass-generator";

export default function Canvas(props) {
  const canvasRef = useRef(null);

  const [height, setHeight] = useState(props.height);
  const [width, setWidth] = useState(props.width);
  const [marginTop, setMarginTop] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //Set possible inputs, to be selected at random
    const inputs = [
      { pieceSize: 10, lineWidth: 0 },
      { pieceSize: 8, lineWidth: 1, lineColor: 'white' },
      { shape: "rectangle" },
      { shape: "circle" },
      { shape: "circle", pieceSize: 40 },
      { colorScheme: "hsl", scatter: 5 },
      { shape: "rings" },
    ];
    const input = inputs[Math.floor(Math.random() * inputs.length)];

    ctx.clearRect(0, 0, width, height);
    drawStainedGlass(ctx, height * 1.3, width * 1.3, input);
  });

  if (width > 1024) {
    if (height === props.height) setHeight(height * 0.9);
    if (width === props.width) setWidth(width * 0.9);
    if (marginTop === 0) setMarginTop(props.height * 0.05);
    if (marginLeft === 0) setMarginLeft(props.width * 0.05);
  }

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        zIndex: -1,
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: width,
        height: height,
      }}
    ></canvas>
  );
}
