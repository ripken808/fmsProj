function setup() {
    createCanvas(1600, 900);
}
  
function draw() {
    background(220);

    //coin on screen
    ellipseMode(CENTER);
    fill(255,223,0);
    ellipse(1200,460,100,40);
    line(1149,450,1149,460);
    line(1250,450,1250,460);
    ellipseMode(CENTER);
    fill(255,223,0);
    ellipse(1200,450,100,40);
    coin();
}



function coin(){
    
    if (mouseisPressed === true && (mouseX >= 1150 && mouseX <= 1250)){
        //let dime = false;
        //if ((mouseX >= 1150 && mouseX <= 1250)){
        //    dime = true;
        //}
        

        //if (dime == true){
            fill(255,223,0);
            ellipse(-mouseX,-mouseY,100,40);
        //}

    }
    fill(255,223,0);
    //ellipse(mousex,(mouseY + 30), 100,40);
}
