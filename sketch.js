var fixedRect, movingRect;
var a, b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a = createSprite(900,400,30,60);
  a.shapeColor = "white";
  
  b = createSprite(400,550,60,80);
  b.shapeColor = "cyan";

}

function draw() {
  background("pink");  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  a.x = mouseX;
  a.y = mouseY;

  //b.x = mouseX;
  //b.y = mouseY;

 if (isTouching(a,fixedRect))
 {
  // movingRect.shapeColor = "red";
  a.shapeColor="red"
  fixedRect.shapeColor = "red";
 }
 else
 {
 // movingRect.shapeColor = "green";
  a.shapeColor="green"
  fixedRect.shapeColor = "green";
 }
 
  drawSprites();
}

