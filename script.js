let pos = {x: 100, y: 50};
let col = {r: 0, g: 0, b:0};
let radius = 30;
let r = 0;
let b = 255;
let stop = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(1.5);
}

function draw() {
  stroke("gold");
  noFill();
  col.b = random(10,250);
  stroke(0, 0,col.b);
  //random position
  pos.x = random(width);
  pos.y = random (height);
  //random size
  radius = random(10, 100);
  polygon(pos.x, pos.y, radius, 6);
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  let r =1;
  let s =1;
  while (r<radius){
    strokeWeight(s);
    beginShape();
      for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * r;
      let sy = y + sin(a) * r;
      vertex(sx, sy);
      }
    endShape(CLOSE);
    r+=5;
    s+=0.15;
  }
}
