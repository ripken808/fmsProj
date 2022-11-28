function setup() {
  createCanvas(1600, 900);
  background(220);
}
function draw() {
    let mil = millis()/1000;
    let TIME = 30;
    let timer = TIME;
    let over = TIME;
    if (mil <= TIME){
        fill(0);
        textSize(24);
        text(`Timer: ${round(timer - mil)}`, 1450, 30);
    }
    if (mil > TIME){
        over = 0;
    }
    if (over <= 0) {
        fill(0);
        textSize(24);
        text(`Timer: 0`, 1450, 30);
        fill(220);

noStroke();
  fill(220);
circle(800,450,300);
    }
  if(mouseIsPressed) {
    fill(123,63,0);
  }
  else{
    noFill(220);
  }
  ellipse(mouseX,mouseY,120,120);
}
