var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg
var heart1Img,heart2Img,heart3Img
var bulletImg
var score = 0

//loadImages for player, background and shooter player 
function preload() {
bgImg = loadImage("assets/bg.jpeg")
shooterImg = loadImage("assets/shooter_2.png")
shooter_shooting = loadImage("assets/shooter_3.png")
zombieImg=loadImage("assets/zombie.png")
heart1Img=loadImage("assets/heart_1.png")
heart2Img=loadImage("assets/heart_2.png")
heart3Img=loadImage("assets/heart_3.png")
bulletImg=loadImage("assets/bullet.png")



}




function setup() {

 
  createCanvas(windowWidth,windowHeight);

  //adding the background image
bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale=1.1

//creating the player sprite
player=createSprite(displayWidth-1150,displayHeight-300,50,50)
player.addImage(shooterImg)
player.scale=0.3
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

  heart1= createSprite(displayWidth-159,40,20,20)
  heart1.addImage(heart1Img)
  heart1.scale=0.4
  heart1.visible=false
  
  heart2= createSprite(displayWidth-100,40,20,20)
  heart2.addImage(heart2Img)
  heart2.scale=0.4
  heart2.visible=false
 
  heart3= createSprite(displayWidth-150,40,20,20)
  heart3.addImage(heart3Img)
  heart3.scale=0.4
  
  zombieGroup = new Group ()
  bulletGroup=new Group()
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("down")){
  player.y+=30

  }

  if(keyDown("up")){
    player.y-=30
  
    }


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
player.addImage(shooter_shooting)
 var bullet=createSprite(displayWidth-1150,player.y-30,20,10)
bullet.addImage(bulletImg)
bullet.scale=0.05
bullet.velocityX=20
player.depth=bullet.depth
player.depth+=2
bullet.depth-=1
bulletGroup.add(bullet)
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
  player.addImage(shooterImg)
// player.addImage(shooter_1.png)

}
if(zombieGroup.isTouching(bulletGroup)){
  for(i=0;i<zombieGroup.length;i++){
    if(zombieGroup[i].isTouching(bulletGroup)){
      zombieGroup[i].destroy()
      bulletGroup.destroyEach()
      score+=5
    }
  }
  }
if(zombieGroup.isTouching(player)){
 for(var i=0;i<zombieGroup.length;i++){
  if(zombieGroup[i].isTouching(player)){
   zombieGroup[i].destroy()
    }

 }

}
spawnZombies()
drawSprites();

fill ("green")
textSize(25)
 text("Score="+score,displayWidth-200,displayHeight-220)

 fill ("red")
textSize(25)
 text("Heart="+heart,displayWidth-100,displayHeight-120)

}



function spawnZombies(){
if(frameCount % 60===0){
zombie=createSprite(random(400,1110),random(100,550),100,100)
zombie.addImage(zombieImg)
zombie.scale = 0.2
    zombie.velocityX = -3
    zombie.lifetime = 200
    zombie.setCollider("rectangle",0,0,400,400)
    zombieGroup.add(zombie)
    
    
}

}




