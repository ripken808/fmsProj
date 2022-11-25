function setup() {
    createCanvas(1600, 900);
}
  
function draw() {
    background(220);
    let mil = millis()/1000;
    let timer = 30;
    fill(0);
    textSize(24);
    text(`Timer: ${round(timer- mil)}`, 1450, 30);

    //coin on screen
    ellipseMode(CENTER);
    fill(255,223,0);
    ellipse(1200,460,100,40);
    ellipseMode(CENTER);
    ellipse(1200,450,100,40);
    line(1149,450,1149,460);
    line(1250,450,1250,460);

    //Table
    fill(78,53,36);
    rect(550, 575, 400, 20);
    rect(570, 595, 17, 175);
    rect(913, 595, 17, 175);

    //coin();
}



function coin(){
    // if (mouseisPressed === true && (mouseX >= 1150 && mouseX <= 1250) == true){
    //     let dime = false;
    //     if ((mouseX >= 1150 && mouseX <= 1250)){
    //         dime = true;
    //     }
        

    //     if (dime == true){
    //         x = mouseX;
    //         y = mouseY;
           
    //         ellipseMode(CENTER);
    //         fill(255,223,0);
    //         ellipse(x,460,100,40);
    //         line(x-51,450,x-51,460);
    //         line(x+50,450,x+50,460);
    //         ellipseMode(CENTER);
    //         fill(255,223,0);
    //         ellipse(x,450,100,40);
    //       ellipse(x, y, 20, 20);
    //     }

    // }
    // fill(255,223,0);
    // ellipse(mousex,(mouseY + 30), 100,40);
}
