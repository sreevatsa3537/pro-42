var issImg,space,spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4;
var spaceCraft,iss;
var hasDocked=false;


function preload(){
  issImg=loadImage("Docking-undocking/iss.png");
  space=loadImage("Docking-undocking/spacebg.jpg");
  spaceCraft1=loadImage("Docking-Undocking/spaceCraft1.png");
  spaceCraft2=loadImage("Docking-Undocking/spaceCraft2.png");
  spaceCraft3=loadImage("Docking-Undocking/spaceCraft3.png");
  spaceCraft4=loadImage("Docking-Undocking/spaceCraft4.png");
}


function setup() {
  createCanvas(800,400);
  spaceCraft=createSprite(400,250);
  spaceCraft.addImage(spaceCraft1);
  spaceCraft.scale=0.2;

  iss=createSprite(400,150);
  iss.addImage(issImg);
  iss.scale=0.7;
  
}

function draw() {
  background(space);
  spaceCraft.addImage(spaceCraft1);
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1);
    if(keyDown("up")){
      spaceCraft.y=spaceCraft.y-2;
           }    
     if(keyDown("down")){
      spaceCraft.y=spaceCraft.y+2;
      spaceCraft.addImage(spaceCraft2);
     }
     if(keyDown("left")){
      spaceCraft.x=spaceCraft.x-2;
      spaceCraft.addImage(spaceCraft4);
     }
     if(keyDown("right")){
      spaceCraft.x=spaceCraft.x+2;
      spaceCraft.addImage(spaceCraft3);
     }
  }
  
  if(spaceCraft.y<=(iss.y+70) && spaceCraft<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill(white);
    text("Docking Successfull!",100,200);

  }
  drawSprites();
}