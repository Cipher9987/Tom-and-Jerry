var tom, tom_Still, tom_Moving, tom_Happy
var jerry, jerry_Still, jerry_Moving, jerry_Happy
var background_Image


function preload() {
    //load the images here
    tom_Still=loadImage("images/cat1.png");
    tom_Moving=loadAnimation("images/cat2.png", "images/cat3.png") ; 
    tom_Happy=loadAnimation("images/cat4.png");

    jerry_Still=loadImage("images/mouse4.png");
    jerry_Moving=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry_Happy=loadAnimation("images/mouse1.png");

    background_Image=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1600,800);
    //create tom and jerry sprites here
    tom=createSprite(1300,600,90,90);
    tom.addImage(tom_Still);
    tom.addAnimation("happy", tom_Happy);
    tom.addAnimation("moving", tom_Moving);
    tom.scale=0.25;
    tom.setCollider("rectangle",0,0,1200,850);

    jerry=createSprite(100,630,50,50);
    jerry.addImage(jerry_Still);
    jerry.addAnimation("happy2", jerry_Happy);
    jerry.addAnimation("moving2", jerry_Moving);
    jerry.scale=0.16;
    jerry.setCollider("rectangle",0,0,600,750);


}

function draw() {

    background(background_Image);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("left")){
    tom.x=tom.x-9;
    tom.scale=0.3;
    tom.changeAnimation("moving", tom_Moving);
    jerry.changeAnimation("moving2", jerry_Happy);
}

  if (tom.isTouching(jerry)){
     tom.x=330;
     tom.changeAnimation("happy",tom_Happy);
     jerry.changeAnimation("happy2", jerry_Happy);
}

}
