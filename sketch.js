var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 4;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -4;
  gameObject1 = createSprite(300,100,50,50);
  gameObject1.shapeColor = "orange";
  gameObject1.velocityX = 4;
  gameObject2 = createSprite(500,100,50,50);
  gameObject2.shapeColor = "brown";
  gameObject2.velocityX = -4;
}

function draw() {
  background(255,255,255);  
 // object1.x = World.mouseX;
 // object1.y = World.mouseY;
  
 bounceOff(gameObject1, gameObject2);
 bounceOff(movingRect, fixedRect);

  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2 ){

    object1.velocityX = object1.velocityX*(-1);
    object2.velocityX = object2.velocityX*(-1);
    }
    if ( object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
    object1.velocityY = object1.velocityY*(-1);
    object2.velocityY = object2.velocityY*(-1);
  
    }
}
