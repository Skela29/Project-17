

var garden,rabbit,k;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  k =Math.round(random(1,2))
  
  if(k == 1){
      createApples();
     }
  else{
    createLeaves();
  }
  
  drawSprites();
}

function createApples(){
  if(frameCount % 80==0){
    var apple = createSprite(400,0,20,20) 
    apple.velocityY = 2
    apple.x = Math.round(random(0,400))
    apple.addImage(appleImg)
    apple.scale = 0.1
    apple.lifetime = 400
     }
}

function createLeaves(){
  if(frameCount % 80==0){
     var leaf = createSprite(400,0,40,30)
     leaf.addImage(leafImg)
     leaf.velocityY = 2
     leaf.x = random(0,400)
     leaf.scale = 0.1
     leaf.lifetime = 400
     }
}





