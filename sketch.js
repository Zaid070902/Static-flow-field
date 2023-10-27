function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0);

  let angle = 0.004;
  let gap = 35;
  let len = 20;
  let red = 5;
  let blue =5;
  let green = 5;
    
  let t = frameCount * 0.005;
  
  for (let x = 0; x < width; x += gap) {
    for (let y = 0; y < height; y += gap) {
      let startX = x;
      let startY = y;

      red += 0.005;
      blue += 0.007;
      green += 0.003;

      for (let j = 0; j < 20; j++) {
        let ncolor = noise(red) * 255;
        let ncolor2 = noise(blue) * 255;
        let ncolor3 = noise(green) * 255;

        stroke(ncolor,ncolor3,ncolor2,100);
        strokeWeight(0.2)

        let nx = noise(x * angle, y * angle,t);
        let ang = nx * 3.14 * 4;
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
