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

  //Reset color1 values
  const resetColor1Values = (coords) => {
    coords.r1 = coords.r2;
    coords.g1 = coords.g2;
    coords.b1 = coords.b2;
  };

  //Get color2 values
  const getColor2Values = (coords, i, j, order = 'initial') => {
    //Set color2 values using values of circle to left
    if (i > 0) {
      coords.r2 = arrayOfPoints[i - 1][j].r1;
      coords.g2 = arrayOfPoints[i - 1][j].g1;
      coords.b2 = arrayOfPoints[i - 1][j].b1;
    } else if (i === 0 && j === 0 && order === 'initial') {
      //Or if they are at the far left top corner, set a new value
      coords.r2 = coords.r1 + randomNum();
      coords.g2 = coords.g1 + randomNum();
      coords.b2 = coords.b1 + randomNum();
    } else if (order === 'initial') {
      //Or if they are on the left side, but not the top left corner
      coords.r2 =
        (coords.r1 + randomNum() + arrayOfPoints[i][j - 1].r) / 2 + randomNum();
      coords.g2 =
        (coords.g1 + randomNum() + arrayOfPoints[i][j - 1].g) / 2 + randomNum();
      coords.b2 =
        (coords.b1 + randomNum() + arrayOfPoints[i][j - 1].b) / 2 + randomNum();
    } else if (i === 0 && j === rows - 1 && order === 'update') {
      //If they are at the left bottom corner, while updating
      coords.r2 = coords.r1 + randomNum();
      coords.g2 = coords.g1 + randomNum();
      coords.b2 = coords.b1 + randomNum();
    } else if (order === 'update') {
      //They are on the left hand side, but not in the bottom corner
      coords.r2 =
        (coords.r1 + randomNum() + arrayOfPoints[i][j + 1].r) / 2 + randomNum();
      coords.g2 =
        (coords.g1 + randomNum() + arrayOfPoints[i][j + 1].g) / 2 + randomNum();
      coords.b2 =
        (coords.b1 + randomNum() + arrayOfPoints[i][j + 1].b) / 2 + randomNum();
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
            //Find color of circle to left, average, and add/minus up to 10
            redValue = (redValue + arrayOfPoints[i - 1][j].r) / 2 + randomNum();
            greenValue =
              (greenValue + arrayOfPoints[i - 1][j].g) / 2 + randomNum();
            blueValue =
              (blueValue + arrayOfPoints[i - 1][j].b) / 2 + randomNum();
          }
        } else if (i > 0) {
          //Find color of circle to left and add/minus up to 10
          redValue = arrayOfPoints[i - 1][j].r + randomNum();
          greenValue = arrayOfPoints[i - 1][j].g + randomNum();
          blueValue = arrayOfPoints[i - 1][j].b + randomNum();
        } else {
          //Create random colors from component props
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

  //If array is full and rgb values have been assigned, do an update
  if (arrayOfPoints.length !== 0 && arrayOfPoints[0][0].r) {
    for (let i = 0; i < columns; i++) {
      for (let j = rows - 1; j >= 0; j--) {
        const coords = arrayOfPoints[i][j];
        //Increment rgb values by color2 value - color1 value / 50
        coords.r += (coords.r2 - coords.r1) / 50;
        coords.g += (coords.g2 - coords.g1) / 50;
        coords.b += (coords.b2 - coords.b1) / 50;
        //Reset color values after count of 50
        if (count % 50 === 0) {
          resetColor1Values(coords);
          getColor2Values(coords, i, j, 'update');
        }
        ctx.fillStyle = `rgb(${coords.r}, ${coords.g}, ${coords.b})`;
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, 15, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}
