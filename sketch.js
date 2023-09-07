function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(17, 17, 17);

  let angle = 0.005;
  let gap = 10;
  let len = 20;
  let red = 0;
  let blue = 0;
  
  let t = millis() * 0.00005;
  for (let x = 0; x < width; x += gap) {
    for (let y = 0; y < height; y += gap) {
      let startX = x;
      let startY = y;

      red += 0.001;
      blue += 0.003;

      for (let j = 0; j < 20; j++) {gap
        let ncolor = noise(red, blue) * 255;

        stroke(ncolor,0,ncolor*t);

        let nx = noise(x * angle, y * angle,t);let ang = nx * TWO_PI;
        let newX = sin(ang) * len + x;
        let newY = cos(ang) * len + y;
        line(x, y, newX, newY);gap
        x = newX;
        y = newY;
      }
      x = startX;
      y = startY;
    }
  }
}
