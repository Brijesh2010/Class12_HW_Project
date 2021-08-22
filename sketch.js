//creating variables
var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaves, leavesImg;

function preload(){
    //loading the images in variables
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg = loadImage("apple.png");
    leavesImg = loadImage("orangeLeaf.png")
}

function setup(){
  
    createCanvas(400,400);
  
    // Moving background
    garden=createSprite(200,200);
    garden.addImage(gardenImg);

    //creating rabbit running
    rabbit = createSprite(180,340,30,30);
    rabbit.scale =0.09;
    rabbit.addImage(rabbitImg);
}


function draw() {
    background(0);
  
    //moving the rabbit the mouse x position
    rabbit.x = World.mouseX;

    //creating edge sprites and colliding then with rabbit
    edges= createEdgeSprites();
    rabbit.collide(edges);

    //creating a random number  
    var select_sprites = Math.round(random(1,2));

    //swapning the apples and leaves at 80 frames
    if(frameCount % 80 === 0){
      if(select_sprites == 1){
        createApples();
      }
      else{
        createLeaves();  
        }
    }

    drawSprites();
}


//creating the apple spawn function
function createApples(){
    apple = createSprite(100,10,20,20);
    apple.addImage(appleImg);
    apple.x = Math.round(random(50,350));
    apple.scale = 0.07;
    apple.velocityY = 4
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
}


//creating the leaves spawn function
function createLeaves(){
    leaves = createSprite(100,10,20,20);
    leaves.addImage(leavesImg);
    leaves.x = Math.round(random(50,350));
    leaves.scale = 0.07;
    leaves.velocityY = 3
    leaves.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
}






    
 