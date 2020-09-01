function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";

}

function draw() {
  background(255,255,255);  


movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

console.log(movingRect.x);


  drawSprites();
}