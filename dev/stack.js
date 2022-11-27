function setup() {
    createCanvas(1600, 900);
}
  
function draw() {
    background(220);
    let mil = millis()/1000;
    let TIME = 30;
    let timer = TIME;
    let points = 0;
    let over = TIME;
    let button;
    
    

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
        rect(200, 100, 1200, 700);
        fill(0);
        text("Restart?", 750, 450);
        button = createButton('Restart');
        button.position(700, 400);
        button.size(200, 100);
        button.mousePressed(res);

    }

    if(mouseIsPressed == true){
        coin();
    }
    
}

function res(){
    location.reload();
}

function coin(){
    let test;
    x = mouseX;
    y = mouseY;
    if (x >= 1100 && x <= 1300){
        if (y >= 400 && y <= 500){
            fill(255,223,0);
            test = ellipse(mouseX,mouseY,100,40);
        }
    }
}
