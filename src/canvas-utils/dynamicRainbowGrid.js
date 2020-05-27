export default function dynamicRainbowGrid(
  ctx,
  width,
  height,
  arrayOfPoints,
  setArrayOfPoints,
  colors,
  count
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

  //Get color2 values
  const getColor2Values = (coords, i, j) => {
    //Set color2 values using values of circle to left
    if (i > 0) {
      coords.r2 = arrayOfPoints[i - 1][j].r;
      coords.g2 = arrayOfPoints[i - 1][j].g;
      coords.b2 = arrayOfPoints[i - 1][j].b;
    } else if (i === 0 && j === 0) {
      //Or if they are at the far left top corner, set a new value
      coords.r2 = coords.r1 + randomNum();
      coords.g2 = coords.g1 + randomNum();
      coords.b2 = coords.b1 + randomNum();
    } else {
      //Or if they are on the left side, but not the top left corner
      coords.r2 =
        (coords.r1 + randomNum() + arrayOfPoints[i][j - 1].r) / 2 + randomNum();
      coords.g2 =
        (coords.g1 + randomNum() + arrayOfPoints[i][j - 1].g) / 2 + randomNum();
      coords.b2 =
        (coords.b1 + randomNum() + arrayOfPoints[i][j - 1].b) / 2 + randomNum();
    }
  };

  //If array is not empty and array does not have rgb values yet
  //Values r g b are values used to draw color
  //Values r1 g1 b1 are values used to set the starting point
  //Values r2 g2 b2 are values of the circle behind it, or if there is no behind it, are created
  if (arrayOfPoints.length !== 0 && !arrayOfPoints[0][0].r) {
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

        //Set color1 values
        coords.r1 = redValue;
        coords.g1 = greenValue;
        coords.b1 = blueValue;

        //Set color2 values
        getColor2Values(coords, i, j);

        //Set colors as values on object
        coords.r = redValue;
        coords.g = greenValue;
        coords.b = blueValue;
        ctx.fillStyle = `rgb(${coords.r}, ${coords.g}, ${coords.b})`;
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, 15, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  //If array is full and rgb values have been assigned
  if (arrayOfPoints.length !== 0 && arrayOfPoints[0][0].r) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const coords = arrayOfPoints[i][j];
        //Increment rgb values by color2 value - color1 value / 10
        coords.r += (coords.r2 - coords.r1)/10;
        coords.g += (coords.g2 - coords.g1)/10;
        coords.b += (coords.b2 - coords.b1)/10;
        //Reset color values after count of 10
        if (count % 10 === 0) getColor2Values(coords, i, j);
        ctx.fillStyle = `rgb(${coords.r}, ${coords.g}, ${coords.b})`;
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, 15, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}
