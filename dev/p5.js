function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(255,20,30);
  ellipse(mouseX,mouseY,25,25);
  s = true;
  
  fill(20,140,140);
  rect(80,70,280,10);
  if(mouseX > 80 && mouseX < 270 && mouseY > 10 && mouseY < 10){
      s = false;
      setup();
     }
  
  fill(20,140,140);
  rect(80,120,230,10);
  
  
  fill(20,140,140);
  rect(350,70,10,180);
  
  fill(20,140,140);
  rect(300,120,10,70);
   
  fill(20,140,140);
  rect(140,240,210,10);
  
  
  fill(20,140,140);
  rect(90,180,220,10);
   
  fill(20,140,140);
  rect(80,180,10,170);
  
  fill(20,140,140);
  rect(140,240,10,50);
  
  
  fill(20,140,140);
  rect(80,340,280,10);
  
  fill(20,140,140);
  rect(140,280,220,10);
  
  
  fill(200,140,170);
  rect(330,290,30,50);
  
  d = int(dist(mouseX, mouseY, 650, 450));
  
}
