function setup() {
  createCanvas(1600, 900);
  background (220);
}
function draw() {

  noStroke();
  fill(220);
circle(800,450,300);

  if(mouseIsPressed) {
    fill(123,63,0);
  }
  else{
    noStroke();
    fill(123,63,0);
  }
  ellipse(mouseX,mouseY,80,80);
}
