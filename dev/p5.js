function setup() {
  createCanvas(1600, 900);
}

function draw() {
  background(220);
  
  let circX = mouseX;
  let circY = mouseY;
  let mil = millis();
  timelimit = 25;
  
  //wall variables
  rect1X = 80;
  rect1Y = 70;
  rect1Length = 280;
  rect1Width = 10;
  
  
  
  
  //horizontal walls pt1
  
  fill(20,140,140);
  rect(80,70,280,10);
 if(circY >= 70 && circY <= 80){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
 
 
  fill(20,140,140);
  rect(80,130,230,10);
if(circY >= 130 && circY <= 140){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  //path
  
  fill(20,130)
  rect(80,80,230,50);
  
  //vertical walls
  
  fill(20,140,140);
  rect(360,70,10,180);
if(circX >= 360 && circX <= 370){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  
  fill(20,140,140);
  rect(300,130,10,60);
if(circY >= 70 && circY <= 80){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  // path
  
  fill(20,130)
  rect(310,80,50,160);

  
//horizontal walls pt2
  
  fill(20,140,140);
  rect(140,240,220,10);
if(circX >= 240 && circX <= 250){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  fill(20,140,140);
  rect(80,180,220,10);
if(circY >= 280 && circY <= 290){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  //path
  
  fill(20,130)
  rect(80,190,230,50);
  
  
  //vertical walls pt2
  
  fill(20,140,140);
  rect(70,180,10,170);
  if(circY >= 180 && circY <= 190){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  fill(20,140,140);
  rect(130,240,10,50);

  
  //correct path
  
  fill(20,130)
  rect(80,190,50,150);

  
  
  //walls pt3
  fill(20,140,140);
  rect(80,340,280,10);
if(circY >= 340 && circY <= 350){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  fill(20,140,140);
  rect(140,280,220,10);
if(circY >= 280 && circY <= 290){
    fill(255);
    stroke(0);
    textSize(24);
    text('Haha loser!!',80,60) 
    }
  
  //path
  
  fill(20,130)
  rect(80,290,270,50);
  
  
  
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
     text('Timer:'+gametime ,130,30);
     
   
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
