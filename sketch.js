var bag,bagImg,bagsGroup
var turtle,turtleImg 
var food = 0
var jellyfish,jellyfishImg,jellyfishsGroup
var sea,seaImg
function preload(){
    bagImg = loadImage("bag.png");
    turtleImg = loadImage("turtle.gif");
    jellyImg = loadImage("jellyfish.gif");
    seaImg = loadImage("sea.jpg")
}

function setup() {
    createCanvas(400,400);
  

    sea=createSprite(200,200);
    sea.addImage(seaImg);
    sea.velocityY = 2;
    sea.scale=1.3;
    
    
    bagsGroup=new Group()
    jellyfishsGroup = new Group()
  
    turtle = createSprite(200,200,50,50)
    turtle.addImage(turtleImg)
    turtle.scale=0.2

    
     
    

    
}

function draw() {
    background(200);
    
  
  if(sea.y > 400){
      sea.y = sea.y+300
    }

    if(keyDown("left_arrow")){
      turtle.x=turtle.x-3
    }

    if(keyDown("right_arrow")){
        turtle.x=turtle.x+3
    }

    if(keyDown("space")){
        turtle.velocityY=-5
    }
    turtle.velocityY=turtle.velocityY+0.8

   
    spawnbags()
    drawSprites()

  }

  function spawnbags(){
    if (frameCount%240===0){
      var bag = createSprite(200,-50)
      bag.addImage(bagImg)
     
      
   
      var jellyfish = createSprite(200,10)
      jellyfish.addImage(jellyfishImg)
   
      bag.x= Math.round(random(120,400))
      bag.velocityY = 2
   
      jellyfish.x=door.x
      jellyfish.velocityY= 2
     
      jellyfish.lifetime =800
      bag.lifetime =800
   
      bagsGroup.add(bag)
      jellyfishsGroup.add(jellyfish)
    }
  }
