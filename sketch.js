function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(17, 17, 17);

  let angle = 0.01;
  let gap = 15;
  let len = 9;
  let red = 0;
  let blue = 0;
  for (let x = 0; x < width; x += gap) {
    for (let y = 0; y < height; y += gap) {
      let startX = x;
      let startY = y;

      red += 0.001;
      blue += 0.005;
      for (let j = 0; j < 20; j++) {
        let ncolor = noise(red, blue) * 255;
        stroke(0, ncolor, ncolor);
        let nx = noise(x * angle, y * angle);
        let ang = nx * PI * 2;
        let newX = sin(ang) * len + x;
        let newY = cos(ang) * len + y;
        line(x, y, newX, newY);
        x = newX;
        y = newY;
      }
      x = startX;
      y = startY;
    }
  }
}
