function setup() {
  createCanvas(400, 400);
   background (255);
}
function draw() {
  noStroke();
  fill(255);
circle(200,300,150);

  if(mouseIsPressed) {
    fill(123,63,0);
  }
  else{
    noStroke();
    fill(123,63,0);
  }
  ellipse(mouseX,mouseY,80,80);
}
