var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20
var w21, w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33, w34, w35, w36, w37, w38, w39
var w40, w41, w42, w43, w44, w45, w46, w47, w48, w49, w50, w51, w52, w53, w54, w55, w56, w57, w58
var w59, w60, w61, w62, w63, w64, w65, w66, w67, w68, w69, w70, w71, w72, w73, w74, w75, w76, w77
var w78, w79, w80, w81, w82, w83, w84, w85, w86, w87, w88, w89, w90, w91, w92, w93, w94, w95, w96
var w97, w98, w99, w100, w101, w102, w103, w104, w105,w106, w107, w108, w109, w110, w111, w112, w113
var w114, w115, w116, w117, w118, w119
var coinImg, doorImg, keyImg, opendoorImg, boyImage, boy, boyImage2, grasshopperImg, ladybugImg, forestImg
var doorNoise, ladybugNoise, grasshopperNoise, winNoise, coinNoise
var key1, key2, key3, key4, key5, key6, key7, key8, key9
var door1, door2, door3, door4, door5, door6, door7, door8, door9
var insect1, insect2, insect3, insect4, insect5, insect6
var ladybug1, ladybug2, ladybug3, ladybug4, ladybug6
var wallGroup, keyGroup, insectGroup, ladybugGroup
var button1, button0
var lives = 5
var gameState = 0
var score = 0
function preload(){
boyImage = loadAnimation("images/boy2.png","images/boy5.png", "images/boy10.png", "images/boy15.png", "images/boy20.png", "images/boy25.png" )
boyImage2 = loadAnimation("images/boy2l.png","images/boy5l.png", "images/boy10l.png")
doorImg = loadImage("images/door.png")
keyImg = loadImage("images/key.png")
opendoorImg = loadImage("images/opendoor.png")
grasshopperImg = loadImage("images/grasshopper.png")
ladybugImg = loadImage("images/ladybug.png")
forestImg = loadImage("images/forest.jpg")
coinImg = loadImage("images/coin.png")

doorNoise = loadSound("sounds/doorNoise.mp3")
grasshopperNoise = loadSound("sounds/grasshopperHit.mp3")
ladybugNoise = loadSound("sounds/ladybugHit.mp3")
winNoise = loadSound("sounds/winSound.mp3")
coinNoise = loadSound("sounds/coinSound.mp3")

}
function setup() {
  createCanvas(800, 700);
  w1 = createSprite(800, 630, 150, 2);
  w2 = createSprite(720, 580, 2, 100);
  w4 = createSprite(755, 570, 2, 80);
  w5 = createSprite(800, 650, 60, 2);
  w6 = createSprite(670, 667, 2, 40);
  w7 = createSprite(630, 667, 2, 40);
  w8 = createSprite(646, 600, 54, 2);
  w9 = createSprite(620, 473, 2, 250);
  w10 = createSprite(646, 520, 54, 2);
  w11 = createSprite(646, 480, 54, 2);
  w12 = createSprite(670, 394, 2, 170);
  w14 = createSprite(715, 400, 2, 130);
  w15 = createSprite(737, 467, 44, 2);
  w16 = createSprite(757, 444, 2, 45);
  w17 = createSprite(780, 420, 45, 2);
  w18 = createSprite(740, 380, 45, 2);
  w19 = createSprite(760, 356, 2, 45);
  w20 = createSprite(730, 280, 40, 2);
  w21 = createSprite(718, 250, 2, 80);
  w23 = createSprite(755, 234, 2, 45);
  w24 = createSprite(674, 210, 90, 2);
  w25 = createSprite(675, 187, 2, 45);
  w26 = createSprite(630, 230, 2, 130);
  w27 = createSprite(610, 297, 45, 2);
  w28 = createSprite(610, 250, 45, 2);
  w29 = createSprite(590, 190, 2, 120);
  w30 = createSprite(600, 140, 130, 2);
  w31 = createSprite(600, 110, 2, 40);
  w32 = createSprite(518, 90, 170, 2);
  w33 = createSprite(480, 108, 2, 40);
  w34 = createSprite(790, 100, 100, 2);
  w35 = createSprite(745, 140, 2, 80);
  w37 = createSprite(730, 158, 2, 45);
  w38 = createSprite(700, 38, 2, 40);
  w41 = createSprite(500, 670, 2, 44);
  w42 = createSprite(520, 650, 44, 2);
  w43 = createSprite(540, 590, 2, 120);
  w43 = createSprite(560, 530, 44, 2);
  w44 = createSprite(580, 490, 2, 80);
  w45 = createSprite(560, 570, 45, 2);
  w46 = createSprite(580, 590, 2, 60);
  w47 = createSprite(560, 500, 45, 2);
  w49 = createSprite(520, 460, 45, 2);
  w50 = createSprite(500, 515, 2, 110);
  w51 = createSprite(580, 380, 80, 2);
  w52 = createSprite(470, 380, 55, 2);
  w53 = createSprite(580, 360, 2, 45);
  w54 = createSprite(445, 400, 2, 40);
  w55 = createSprite(400, 420, 90, 2);
  w56 = createSprite(355, 370, 2, 180);
  w57 = createSprite(350, 90, 2, 50); 
  w58 = createSprite(320, 113, 130, 2);
  w59 = createSprite(385, 130, 2, 40);
  w60 = createSprite(255, 130, 2, 90);
  w61 = createSprite(215, 140, 2, 90);
  w62 = createSprite(217, 85, 70, 2);
  w63 = createSprite(195, 100, 45, 2);
  w64 = createSprite(175, 120, 2, 45);
  w65 = createSprite(135, 140, 80, 2);
  w66 = createSprite(95, 120, 2, 45);
  w67 = createSprite(90, 110, 10, 2);
  w68 = createSprite(30, 110, 45, 2);
  w69 = createSprite(140, 140, 2, 80);
  w70 = createSprite(120, 180, 45, 2);
  w71 = createSprite(100, 220, 2, 80);
  w72 = createSprite(100, 255, 130, 2);
  w73 = createSprite(130, 300, 2, 90);
  w74 = createSprite(120, 350, 150, 2);
  w75 = createSprite(110, 380, 2, 70);
  w76 = createSprite(90, 380, 40, 2);
  w77 = createSprite(190, 380, 2, 70);
  w78 = createSprite(170, 400, 40, 2);
  w79 = createSprite(230, 415, 90, 2);
  w80 = createSprite(275, 380, 2, 120);
  w81 = createSprite(253, 320, 45, 2);
  w82 = createSprite(232, 293, 2, 110);
  w83 = createSprite(215, 240, 35, 2);
  w84 = createSprite(50, 440, 100, 2);
  w85 = createSprite(100, 490, 2, 100);
  w86 = createSprite(20, 540, 50, 2);
  w87 = createSprite(50, 470, 2, 40);
  w88 = createSprite(70, 490, 40, 2);
  w89 = createSprite(125, 540, 50, 2);
  w90 = createSprite(150, 500, 2, 80);
  w91 = createSprite(190, 500, 85, 2);
  w92 = createSprite(200, 480, 2, 40);
  w93 = createSprite(20, 650, 45, 2);
  w94 = createSprite(80, 600, 45, 2);
  w95 = createSprite(100, 640, 2, 90);
  w97 = createSprite(200, 670, 2, 45);
  w98 = createSprite(245, 650, 90, 2);
  w99 = createSprite(290, 630, 2, 45);
  w100 = createSprite(270, 610, 45, 2);
  w101 = createSprite(250, 590, 2, 45);
  w102 = createSprite(230, 570, 45, 2);
  w103 = createSprite(210, 590, 2, 45);
  w104 = createSprite(190, 610, 45, 2);
  w105 = createSprite(350, 640, 2, 150);
  w106 = createSprite(330, 565, 45, 2);
  w107 = createSprite(370, 660, 45, 2);
  w108 = createSprite(390, 585, 2, 150);
  w109 = createSprite(370, 510, 45, 2);
  w110 = createSprite(450, 550, 2, 180);
  w111 = createSprite(450, 250, 110, 2);
  w112 = createSprite(460, 210, 2, 80);
  w113 = createSprite(450, 300, 100, 2);
  w114 = createSprite(350, 200, 2, 70);
  w115 = createSprite(305, 165, 90, 2);
  w116 = createSprite(600, 20, 1500, 2);
  w117 = createSprite(500, 690, 1100, 2);
  w118 = createSprite(799, 698, 2, 1500);
  w119 = createSprite(1, 1, 2, 1500);

  button0 = createButton("start")
  button0.style("height", "50px")
  button0.style("width", "150px")
  button0.style("background", "606c38")
  button0.style("font-size", "30px")

  button1 = createButton("restart")

  wallGroup = new Group();
  wallGroup.add(w1)
  wallGroup.add(w2)
  wallGroup.add(w4)
  wallGroup.add(w5)
  wallGroup.add(w6)
  wallGroup.add(w7)
  wallGroup.add(w8)
  wallGroup.add(w9)
  wallGroup.add(w10)
  wallGroup.add(w11)
  wallGroup.add(w12)
  wallGroup.add(w14)
  wallGroup.add(w15)
  wallGroup.add(w16)
  wallGroup.add(w17)
  wallGroup.add(w18)
  wallGroup.add(w19)
  wallGroup.add(w20)
  wallGroup.add(w21)
  wallGroup.add(w23)
  wallGroup.add(w24)
  wallGroup.add(w25)
  wallGroup.add(w26)
  wallGroup.add(w27)
  wallGroup.add(w28)
  wallGroup.add(w29)
  wallGroup.add(w30)
  wallGroup.add(w31)
  wallGroup.add(w32)
  wallGroup.add(w33)
  wallGroup.add(w34)
  wallGroup.add(w35)
  wallGroup.add(w37)
  wallGroup.add(w38)
  wallGroup.add(w41)
  wallGroup.add(w42)
  wallGroup.add(w43)
  wallGroup.add(w44)
  wallGroup.add(w45)
  wallGroup.add(w46)
  wallGroup.add(w47)
  wallGroup.add(w49)
  wallGroup.add(w50)
  wallGroup.add(w51)
  wallGroup.add(w52)
  wallGroup.add(w53)
  wallGroup.add(w54)
  wallGroup.add(w55)
  wallGroup.add(w56)
  wallGroup.add(w57)
  wallGroup.add(w58)
  wallGroup.add(w59)
  wallGroup.add(w61)
  wallGroup.add(w62)
  wallGroup.add(w63)
  wallGroup.add(w64)
  wallGroup.add(w65)
  wallGroup.add(w66)
  wallGroup.add(w67)
  wallGroup.add(w68)
  wallGroup.add(w69)
  wallGroup.add(w70)
  wallGroup.add(w71)
  wallGroup.add(w72)
  wallGroup.add(w73)
  wallGroup.add(w74)
  wallGroup.add(w75)
  wallGroup.add(w76)
  wallGroup.add(w77)
  wallGroup.add(w78)
  wallGroup.add(w79)
  wallGroup.add(w80)
  wallGroup.add(w81)
  wallGroup.add(w82)
  wallGroup.add(w83)
  wallGroup.add(w84)
  wallGroup.add(w85)
  wallGroup.add(w86)
  wallGroup.add(w87)
  wallGroup.add(w88)
  wallGroup.add(w89)
  wallGroup.add(w90)
  wallGroup.add(w91)
  wallGroup.add(w92)
  wallGroup.add(w93)
  wallGroup.add(w94)
  wallGroup.add(w95)
  wallGroup.add(w97)
  wallGroup.add(w98)
  wallGroup.add(w99)
  wallGroup.add(w100)
  wallGroup.add(w101)
  wallGroup.add(w102)
  wallGroup.add(w103)
  wallGroup.add(w104)
  wallGroup.add(w105)
  wallGroup.add(w106)
  wallGroup.add(w107)
  wallGroup.add(w108)
  wallGroup.add(w109)
  wallGroup.add(w110)
  wallGroup.add(w111)
  wallGroup.add(w112)
  wallGroup.add(w113)
  wallGroup.add(w114)
  wallGroup.add(w115)
  wallGroup.add(w116)
  wallGroup.add(w117)
  wallGroup.add(w118)
  wallGroup.add(w119)


  keyGroup = new Group();
  key1 = createSprite(770, 595, 10, 10);
  keyGroup.add(key1)
  key2 = createSprite(560, 600, 10, 10);
  keyGroup.add(key2)
  key3 = createSprite(580, 120, 10, 10);
  keyGroup.add(key3)
  key4 = createSprite(20, 460, 10, 10);
  keyGroup.add(key4)
  key5 = createSprite(785, 115, 10, 10);
  keyGroup.add(key5)
  key6 = createSprite(240, 100, 10, 10);
  keyGroup.add(key6)
  key7 = createSprite(250, 400, 10, 10);
  keyGroup.add(key7)
  key8 = createSprite(750, 40, 10, 10);
  keyGroup.add(key8)
  //key9 = createSprite(700, 190, 10, 10);
  //keyGroup.add(key9)
  for(var i = 0; i<keyGroup.length; i++){
    keyGroup.get(i).addImage(keyImg)
    keyGroup.get(i).scale = 0.1
  }
  boy = createSprite(750, 675, 10, 10);
  boy.addAnimation("runningl", boyImage2)
  boy.addAnimation("running", boyImage)
  boy.scale = 0.125
  
  doorGroup = new Group();
  door1 = createSprite(695, 440, 10, 10);
  door2 = createSprite(525, 390, 10, 10);
  door3 = createSprite(360, 480, 10, 10);
  door4 = createSprite(350, 250, 10, 10);
  door5 = createSprite(70, 550, 10, 10);
  door6 = createSprite(180, 250, 10, 10);
  door8 = createSprite(360, 50, 10, 10);
 // door9 = createSprite(700, 55, 10, 10);
  doorGroup.add(door1)
  doorGroup.add(door2)
  doorGroup.add(door3)
  doorGroup.add(door4)
  doorGroup.add(door5)
  doorGroup.add(door6)
  doorGroup.add(door8)
  //doorGroup.add(door9)
  for(var i = 0; i<doorGroup.length; i++){
    doorGroup.get(i).addImage(doorImg)
    doorGroup.get(i).scale = 0.20

  }
  insectGroup = new Group();
  insect1 = createSprite(770, 600, 10, 10);
  insect2 = createSprite(770, 100, 10, 10);
  insect3 = createSprite(300, 50, 10, 10);
  insect4 = createSprite(270, 300, 10, 10);
  insect5 = createSprite(150, 650, 10, 10);
  insect6 = createSprite(500, 200, 10, 10);
  insectGroup.add(insect1)
  insectGroup.add(insect2)
  insectGroup.add(insect3)
  insectGroup.add(insect4)
  insectGroup.add(insect5)
  insectGroup.add(insect6)
  for(var i = 0; i<insectGroup.length; i++){
    insectGroup.get(i).addImage(grasshopperImg)
    insectGroup.get(i).scale = 0.1
    insectGroup.get(i).velocityY = 0.7
    insectGroup.get(i).setCollider("rectangle", 0, 0, 100, 50);


  }
  ladybugGroup = new Group();
  ladybug1 = createSprite(150, 530, 10, 10);
  ladybug3 = createSprite(300, 400, 10, 10)
  ladybug4 = createSprite(470, 350, 10, 10);
  ladybug5 = createSprite(400, 280, 10, 10);
  ladybug6 = createSprite(600, 120, 10, 10);
  ladybugGroup.add(ladybug1)
  ladybugGroup.add(ladybug3)
  ladybugGroup.add(ladybug4)
  ladybugGroup.add(ladybug5)
  ladybugGroup.add(ladybug6)
  ladybug2 = createSprite(500, 50, 10, 10);
  ladybug2.velocityY = 0.7
  ladybug2.scale = 0.1
  ladybug2.setCollider("rectangle", 0, 0, 100, 50);
  ladybug2.addImage(ladybugImg)
  for(var i = 0; i<ladybugGroup.length; i++){
    ladybugGroup.get(i).addImage(ladybugImg)
    ladybugGroup.get(i).scale = 0.1
    ladybugGroup.get(i).velocityX = 0.7
    ladybugGroup.get(i).setCollider("rectangle", 0, 0, 100, 50);

  }

  coinGroup = new Group();
  for(var i = 0; i<50; i++){
    coin = createSprite(i*90, Math.round(random(30, 650)), 10, 10)
    coin.addImage(coinImg)
    coin.scale = 0.1
    coinGroup.add(coin)
    
  }
  
}



function draw() {
  background("black");  
  if(gameState === 0){
    gameStart();
  }
  else if(gameState === 1){
    button0.hide();
    boy.collide(doorGroup)
  boy.collide(wallGroup)
  handleBoyControls();
  handleInsectCollision();
  handleLadybugCollision();
  handleOpenDoorCollision();
  checkLives();
  handleCoinCollision();
  insect1.bounceOff(w1)
  insect1.bounceOff(w17)
  insect2.bounceOff(w17)
  insect2.bounceOff(w34)
  insect3.bounceOff(w116)
  insect3.bounceOff(w58)
  insect4.bounceOff(w81)
  insect4.bounceOff(w115)
  insect5.bounceOff(w117)
  insect5.bounceOff(w89)
  insect6.bounceOff(w32)
  insect6.bounceOff(w111)

  ladybug1.bounceOff(w90)
  ladybug1.bounceOff(w108)
  ladybug2.bounceOff(w116)
  ladybug2.bounceOff(w32)
  ladybug3.bounceOff(w56)
  ladybug3.bounceOff(w80)
  ladybug4.bounceOff(w56)
  ladybug4.bounceOff(w53)
  ladybug5.bounceOff(w26)
  ladybug5.bounceOff(w56)
  ladybug6.bounceOff(w35)
  ladybug6.bounceOff(w31)
  handleKeyCollision();
  textSize(20)
  fill("red")
  text("Lives:"+lives, 500, 50)
  text("Score:"+score, 100, 50)

  drawSprites();
  }
  else if(gameState === 2){
    textSize(30)
    fill("red")
    text("Game over", 350, 350 )
    button1.mousePressed(()=>{
      location.reload();
    })
  }
}

function handleBoyControls(){
  if(keyIsDown(LEFT_ARROW)){
    boy.x = boy.x - 2
    boy.changeAnimation("runningl", boyImage2)
  }
  if(keyIsDown(RIGHT_ARROW)){
    boy.x = boy.x + 2
    boy.changeAnimation("running", boyImage)
  }
  if(keyIsDown(UP_ARROW)){
    boy.y = boy.y - 2
  }
  if(keyIsDown(DOWN_ARROW)){
    boy.y = boy.y + 2
  }
}

function handleKeyCollision(){
  for(var i = 0; i<keyGroup.length; i++){
    if(keyGroup.get(i).isTouching(boy)){
      doorGroup.get(i).destroy();
      keyGroup.get(i).destroy();
      doorNoise.play();
    }
  }
  }

  function handleInsectCollision(){
    for(var i = 0; i<insectGroup.length; i++){
      if(insectGroup.get(i).isTouching(boy)){
        boy.x = 750
        boy.y = 675
        grasshopperNoise.play();
        lives = lives - 1
        
      }
    }
  }

  function handleOpenDoorCollision(){
      openDoor = createSprite(30, 50, 10, 10);
      openDoor.addImage(opendoorImg)
      openDoor.scale = 0.15
      for(var i = 0; i<openDoor.length; i++)
      if(openDoor.get(i).isTouching(boy)){
      textSize(50)
      fill("red")
      text("Congratulations, you won!")
    }
  }

  function handleLadybugCollision(){
    for(var i = 0; i<ladybugGroup.length; i++){
      if(ladybugGroup.get(i).isTouching(boy)){
        boy.x = 750
        boy.y = 675
        ladybugNoise.play();
        lives = lives - 1
      }
    }
  }

  function handleCoinCollision(){
    for(var i = 0; i<coinGroup.length; i++){
      if(coinGroup.get(i).isTouching(boy)){
        score += 5
        coinNoise.play();
        coinGroup.get(i).destroy();
        
        
      }
    }
  }

  function checkLives(){
    
    if(lives===0){
      gameState = 2
    }
    
    if(gameState===2){
      
      button1.position(400, 360)
      
    }

  }

  function gameStart(){
    background(forestImg)
    textSize(40)
    fill("black")
    text("Forest Hunt", 300, 300)
    textSize(20)
    fill("black")
    text("You and your family decided to go camping for the weekend. ",130, 450)
    textSize(20)
    fill("black")
    text("While getting ready for the night you decided to find sticks to make a fire! ",110, 480)
    textSize(20)
    fill("black")
    text("After searching for a while, you realized your lost. ", 170, 510)
    textSize(17)
    fill("black")
    text("Suddenly, you find a maze! 'Maybe this can lead me back home' You think to yourself. ", 90, 540)
    textSize(20)
    fill("black")
    text("Instructions: ", 200, 565)
    textSize(18)
    fill("black")
    text("Escape the maze to finding keys that open doors! ", 200, 585)
    textSize(18)
    fill("black")
    text("Don't run into any insects! (Makes you lose a life) ", 200, 605)
    textSize(18)
    fill("black")
    text("And have fun! ", 200, 625)

     button0.position(340, 350)
     button0.mousePressed(()=>{
     button0.hide();
     gameState = 1
     
     })
    }

  