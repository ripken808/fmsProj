function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let circX = mouseX;
  let circY = mouseY;
  let mil = millis();
  timelimit = 25;
  
  c1 = createDiv("");
  c2 = createDiv("");
  c3 = createDiv("");
  c4 = createDiv("");
  c5 = createDiv("");
  
  i1 = createDiv("");
  i2 = createDiv("");
  i3 = createDiv("");
  i4 = createDiv("");
  i5 = createDiv("");
  i6 = createDiv("");
  i7 = createDiv("");
  i8 = createDiv("");
  i9 = createDiv("");
  i10 = createDiv("");
  
  //horizontal walls pt1
  
  fill(20,140,140);
  rect(80,70,280,10);
  i1.position(80,60);
  i1.size(280,10);
 if(circY >= 70 && circY <= 80){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
 
 
  fill(20,140,140);
  rect(80,130,230,10);
  i2.position(80,120);
  i2.size(230,10);
if(circY >= 130 && circY <= 140){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  fill(20,130)
  rect(80,80,230,50);
  c1.position(80,80);
  c1.size(230,50);
  
  //vertical walls
  
  fill(20,140,140);
  rect(360,70,10,180);
  i3.position(360,60);
  i3.size(10,180);
if(circX >= 350 && circX <= 360){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  
  fill(20,140,140);
  rect(300,130,10,60);
  i4.position(300,120);
  i4.size(10,60);
if(circY >= 70 && circY <= 80){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  
  fill(20,130)
  rect(310,80,50,160);
  c2.position(310,80);
  c2.size(50,160);
  
//horizontal walls pt2
  
  fill(20,140,140);
  rect(140,240,220,10);
  i5.position(140,230);
  i5.size(220,10);
if(circY >= 240 && circY <= 250){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  fill(20,140,140);
  rect(80,180,220,10);
  i6.position(80,170);
  i6.size(220,10);
if(circY >= 180 && circY <= 190){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  fill(20,130)
  rect(80,190,230,50);
  c3.position(80,190);
  c3.size(230,50);
  
  //vertical walls pt2
  
  fill(20,140,140);
  rect(70,180,10,170);
  i7.position(70,170);
  i7.size(10,170);
  
  fill(20,140,140);
  rect(130,240,10,50);
  i8.position(130,230);
  i8.size(10,50);
  
  //correct path
  
  fill(20,130)
  rect(80,190,50,150);
  c4.position(80,190);
  c4.size(50,150);
  
  
  //walls pt3
  fill(20,140,140);
  rect(80,340,280,10);
  i9.position(80,330);
  i9.size(280,10);
if(circY >= 340 && circY <= 350){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  fill(20,140,140);
  rect(140,280,220,10);
  i10.position(140,270);
  i10.size(220,10);
if(circY >= 280 && circY <= 290){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  fill(20,130)
  rect(80,290,270,50);
  c5.position(80,290);
  c5.size(270,50);
  
  
  
  fill(200,140,170);
  rect(330,290,30,50);
  
  fill(255,20,30);
  ellipse(circX,circY,25,25);
  
  //timer
    totaltime = int(mil/1000);
  
    gametime = timelimit-totaltime;
  
     fill(255);
     stroke(0);
     textSize(24);
     text('Timer:',130,30);
     
   
///conclusionofgame
  
  d = int(dist(circX, circY, 330, 300));
  
///win screen 
  if(d<30){
     fill(255);
     stroke(0);
     textSize(20);
     text('Congratulations, much proud !!',80,60);
    
  
  //lose screen
    function lose(){
     fill(255);
     stroke(0);
     textSize(44);
     text('Haha loser!!',130,30) 
    }
    
    if(gametime <= 0){
     fill(255);
     stroke(0);
     textSize(44);
     text('Haha loser!!',130,30)
    }
    
  
  //try again
   
  
  }
  
}
