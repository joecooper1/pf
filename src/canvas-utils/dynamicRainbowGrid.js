export default function dynamicRainbowGrid(
  ctx,
  width,
  height,
  arrayOfPoints,
  setArrayOfPoints,
  colors
) {
  //Draw a dynamic rainbow grid

  //Determine number of rows and columns
  const columns = Math.floor(width / 30 + 2);
  const rows = Math.floor(height / 30 + 2);

  //Create array of arrays representing rows, with objects as {x: 15, y: 15} etc
  const newArrayOfPoints = [];
  if (arrayOfPoints.length === 0) {
    for (let i = 0; i < columns; i++) {
      newArrayOfPoints.push([]);
      for (let j = 0; j < rows; j++) {
        newArrayOfPoints[i].push({ x: i * 30 - 15, y: j * 30 - 15 });
      }
    }
    setArrayOfPoints([...newArrayOfPoints]);
  }

  //Make function to get random number between -5 and 5
  const randomNum = () => {
    return Math.floor(Math.random() * 30 - 15);
  };

  if (arrayOfPoints.length !== 0) {
    //Make colors and draw circles
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const coords = arrayOfPoints[i][j];

        //Declare color values
        let redValue,
          greenValue,
          blueValue = 0;

        //Get rgb values of adjacent objects
        if (j > 0) {
          //Find color of above circle
          redValue = arrayOfPoints[i][j - 1].r + randomNum();
          greenValue = arrayOfPoints[i][j - 1].g + randomNum();
          blueValue = arrayOfPoints[i][j - 1].b + randomNum();
          if (i > 0) {
            //Find color of circle to left, average, and add/minus 10
            redValue = (redValue + arrayOfPoints[i - 1][j].r) / 2 + randomNum();
            greenValue =
              (greenValue + arrayOfPoints[i - 1][j].g) / 2 + randomNum();
            blueValue =
              (blueValue + arrayOfPoints[i - 1][j].b) / 2 + randomNum();
          }
        } else if (i > 0) {
          //Find color of circle to left
          redValue = arrayOfPoints[i - 1][j].r + randomNum();
          greenValue = arrayOfPoints[i - 1][j].g + randomNum();
          blueValue = arrayOfPoints[i - 1][j].b + randomNum();
        } else {
          //Create random colors
          redValue = colors.r;
          greenValue = colors.g;
          blueValue = colors.b;
        }

        //Set colors as values on object
        coords.r = redValue;
        coords.g = greenValue;
        coords.b = blueValue;
        ctx.fillStyle = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, 15, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    //Change first point
    // arrayOfPoints[0][0].r += 1;
    // arrayOfPoints[0][0].g += 1;
    // arrayOfPoints[0][0].b += 1;

    // setTimeout(() => setArrayOfPoints([...arrayOfPoints]), 1000)
  }
}
