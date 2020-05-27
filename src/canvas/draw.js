export default function draw(ctx, width, height) {
  //Draw a grid
  for (let i = 0.5; i < width; i += 30) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }
  for (let i = 0.5; i < height; i += 30) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
  }

  //Draw a rainbow grid
  for (let i = 1; i < width; i += 30) {
    for (let j = 1; j < height; j += 30) {
      const redValue = Math.floor(Math.random() * 255);
      const greenValue = Math.floor(Math.random() * 150 - (255 - redValue));
      ctx.strokeStyle = `rgb(${redValue}, ${greenValue}, 0)`;
      ctx.beginPath();
      ctx.arc(i + 15, j + 15, 15, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}
