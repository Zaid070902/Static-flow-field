function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0);

  let angle = 0.005;
  let gap = 20;
  let len = 50;
  let red = 0;
  let blue = 0;
  
  let t = frameCount * 0.005;
  
  for (let x = 0; x < width; x += gap) {
    for (let y = 0; y < height; y += gap) {
      let startX = x;
      let startY = y;

      red += 0.001;
      blue += 0.003;

      for (let j = 0; j < 5; j++) {
        let ncolor = noise(red, blue) * 255;

        stroke(ncolor,0,ncolor*t,ncolor);
        strokeWeight(0.1)

        let nx = noise(x * angle, y * angle,t);let ang = nx * 3.14*2;
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
