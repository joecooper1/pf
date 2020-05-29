export default function dynamicRainbowGrid(
  ctx,
  width,
  height,
  arrayOfPoints,
  setArrayOfPoints,
  colors,
  count,
  type
) {
  //Draw a dynamic rainbow grid

  //Set diameter and radius of elements based on screen size
  const diameter = width > 1024 * 0.9 ? 30 : 10;
  // const diameter = 30;
  const radius = diameter / 2;

  //Determine number of rows and columns
  const columns = Math.floor(width / diameter + 2);
  const rows = Math.floor(height / diameter + 2);

  //Create array of arrays representing rows, with objects as {x: 15, y: 15} etc
  const newArrayOfPoints = [];
  if (arrayOfPoints.length === 0) {
    for (let i = 0; i < columns; i++) {
      newArrayOfPoints.push([]);
      for (let j = 0; j < rows; j++) {
        newArrayOfPoints[i].push({
          x: i * diameter - radius,
          y: j * diameter - radius,
        });
      }
    }
    setArrayOfPoints([...newArrayOfPoints]);
  }

  //Make function to get random number between -15 and 15
  const randomNum = () => {
    return Math.floor(Math.random() * diameter - radius);
  };

  //Make function to get small random number
  const smallRandomNum = (n = diameter / 3) => {
    return Math.floor(Math.random() * n);
  };

  //Draw circle
  const drawCircle = (coords) => {
    ctx.beginPath();
    ctx.arc(coords.x, coords.y, radius, 0, Math.PI * 2);
    ctx.fill();
  };

  //Draw square
  const drawSquare = (coords) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillRect(coords.x - radius, coords.y - radius, diameter, diameter);
    if (width > 1024 * 0.9)
      ctx.strokeRect(coords.x - radius, coords.y - radius, diameter, diameter);
  };

  //Draw abstract
  const drawAbstract = (coords) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();

    ctx.moveTo(coords.points[0], coords.points[1]);
    ctx.lineTo(coords.points[2], coords.points[3]);
    ctx.lineTo(coords.points[4], coords.points[5]);
    ctx.lineTo(coords.points[6], coords.points[7]);
    ctx.lineTo(coords.points[0], coords.points[1]);
    if (width > 1024 * 0.9) ctx.stroke();
    ctx.fill();
  };

  //Reset color1 values
  const resetColor1Values = (coords) => {
    coords.r1 = coords.r2;
    coords.g1 = coords.g2;
    coords.b1 = coords.b2;
  };

  //Get color2 values
  const getColor2Values = (coords, i, j, order = "initial") => {
    //Set color2 values using values of circle to left
    if (i > 0) {
      coords.r2 = arrayOfPoints[i - 1][j].r1;
      coords.g2 = arrayOfPoints[i - 1][j].g1;
      coords.b2 = arrayOfPoints[i - 1][j].b1;
    } else if (i === 0 && j === 0 && order === "initial") {
      //Or if they are at the far left top corner, set a new value
      coords.r2 = coords.r1 + randomNum();
      coords.g2 = coords.g1 + randomNum();
      coords.b2 = coords.b1 + randomNum();
    } else if (order === "initial") {
      //Or if they are on the left side, but not the top left corner
      coords.r2 =
        (coords.r1 + randomNum() + arrayOfPoints[i][j - 1].r) / 2 + randomNum();
      coords.g2 =
        (coords.g1 + randomNum() + arrayOfPoints[i][j - 1].g) / 2 + randomNum();
      coords.b2 =
        (coords.b1 + randomNum() + arrayOfPoints[i][j - 1].b) / 2 + randomNum();
    } else if (i === 0 && j === rows - 1 && order === "update") {
      //If they are at the left bottom corner, while updating
      coords.r2 = coords.r1 + randomNum();
      coords.g2 = coords.g1 + randomNum();
      coords.b2 = coords.b1 + randomNum();
    } else if (order === "update") {
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
  //Array of values Points is used to determine layout of abtract shapes
  //Values r g b are values used to draw color
  //Values r1 g1 b1 are values used to set the starting point
  //Values r2 g2 b2 are values of the circle behind it, or if there is no behind it, are created
  if (arrayOfPoints.length !== 0 && !arrayOfPoints[0][0].r) {
    //Make colors and draw circles
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const coords = arrayOfPoints[i][j];

        if (type === "abstract") {
          //Create points array of coordinates, depending on if they at edges or not
          coords.points = [];
          //Top left corner
          if (j === 0 && i === 0) {
            coords.points[0] = coords.x - radius - smallRandomNum();
            coords.points[1] = coords.y - radius - smallRandomNum();
          } else if (j > 0) {
            coords.points[0] = arrayOfPoints[i][j - 1].points[6];
            coords.points[1] = arrayOfPoints[i][j - 1].points[7];
          } else if (i > 0) {
            coords.points[0] = arrayOfPoints[i - 1][j].points[2];
            coords.points[1] = arrayOfPoints[i - 1][j].points[3];
          }
          //Top right corner
          if (j === 0) {
            coords.points[2] = coords.x + smallRandomNum(diameter * 1.4);
            coords.points[3] = coords.y - radius - smallRandomNum();
          } else {
            coords.points[2] = arrayOfPoints[i][j - 1].points[4];
            coords.points[3] = arrayOfPoints[i][j - 1].points[5];
          }
          //Bottom right corner
          coords.points[4] = coords.x + radius + smallRandomNum(diameter);
          coords.points[5] = coords.y + radius + smallRandomNum(diameter);
          //Bottom left corner
          if (i === 0) {
            coords.points[6] = coords.x - radius - smallRandomNum();
            coords.points[7] = coords.y + smallRandomNum(diameter);
          } else {
            coords.points[6] = arrayOfPoints[i - 1][j].points[4];
            coords.points[7] = arrayOfPoints[i - 1][j].points[5];
          }
        }

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

        //Limit color values to be in certain range
        if (redValue < 50) redValue += 10;
        if (greenValue < 50) greenValue += 10;
        if (blueValue < 50) blueValue += 10;

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
          getColor2Values(coords, i, j, "update");
        }
        ctx.fillStyle = `rgb(${coords.r}, ${coords.g}, ${coords.b})`;
        if (type === "circle") drawCircle(coords);
        else if (type === "square") drawSquare(coords);
        else if (type === "abstract") {
          drawAbstract(coords);
        }
      }
    }
  }
}
