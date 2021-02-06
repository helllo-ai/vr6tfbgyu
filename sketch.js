 var ladydetective
 var gamestate
 var score
 var notebook,bottle,pen,canopener,rose
 var sharpener,paper,pencilbox,ruler,target,pin
 //var array=["notebook","bottle","pen","canopener","rose"]
 //var array2=["sharpner","paper","pencilbox","ruler","target","pin"]
   gamestate="screen"

 function preload(){
 ladyd=loadImage("Myowngame/lady.png")
 notebook1=loadImage("Myowngame/notebook.png")
 bottle1=loadImage("Myowngame/bottle.png")
 pen1=loadImage("Myowngame/pen.jpg")
 canopener1=loadImage("Myowngame/can.png")
 rose1=loadImage("Myowngame/rose.png")
 sharpener1=loadImage("Myowngame/sharpner.png")
 paper1=loadImage("Myowngame/paper.png")
 pencilbox1=loadImage("Myowngame/pencilb.png")
 ruler1=loadImage("Myowngame/ruler.png")
 target1=loadImage("Myowngame/target.png")
 pin1=loadImage("Myowngame/pin.png")
 background1=loadImage("Myowngame/screen.jpg")
 background2=loadImage("Myowngame/library.png")
 background3=loadImage("Myowngame/living.jpg")

 //background3=loadImage("Myowngame/screen.jpg")
 
 }


 function setup() {
  createCanvas(800,400);
 ladydetective= createSprite(400, 200, 50, 50);
 button=createButton("Switch places")
 button.position(300,100,20,20)
 button2=createButton("Switch places")
 button2.position(300,100,20,20)
 notebook1=createSprite(100,200,10,10)
 pin1=createSprite(100,200,10,10)
 sharpener1=createSprite(100,200,10,10)
 target1=createSprite(100,200,10,10)
 paper1=createSprite(100,200,10,10)
 canopener1=createSprite(100,200,10,10)
 pencilbox1=createSprite(100,300,10,10)
 pen1=createSprite(200,200,10,10)
 notebook=createSprite(100,200,10,10)
 rose1=createSprite(100,200,10,10)
 ruler1=createSprite(100,200,10,10)


}

function draw() {
  background(255,255,255);  
  drawSprites();
   
 function living() {
background(background3)

  }
  function library() {
    background(background2)
    
      }

    
  


if (gamestate==="screen"){
  background(background1,100)
  image (ladyd,100,200)
  button.hide()
  button2.hide()
  if (keyIsDown(UP_ARROW)){
    gamestate="l1"
  }
}

if (gamestate==="l1"){
  //background()
  text ("SCORE"+score,100,200)
  image(ladyd,100,200)
  button.show();
  button2.hide();
  if (mousePressedOver(notebook)){
   score=score+1
 }
 if (mousePressedOver(target)){
  score=score+1
}
if (mousePressedOver(pen)){
  score=score+1
}
if (mousePressedOver(rose)){
  score=score+1
}
if (mousePressedOver(bottle)){
  score=score+1
}
 

  //if (mousePressed(button)){
    //if (gamestate_l1==="living ")
    //{gamestate_l1==="library"}
    //else{gamestate_l1="living"
   // } 
 // }
  if (score===5){
    gamestate="l2"
  }
}


if (gamestate==="l2"){
 // background()
  image(ladyd,100,200)
  button2.show();
  button.hide();
  if (mousePressedOver(pin)){
    score=score+1
  }
  if (mousePressedOver(canopener)){
    score=score+1
  }
  if (mousePressedOver(pencilbox)){
    score=score+1
  }
  if (mousePressedOver(ruler)){
    score=score+1
  }
  if (mousePressedOver(paper)){
    score=score+1
  }
  if (mousePressedOver(sharpener)){
    score=score+1
  }

  /* button.mousePressed(function(){
    if (gamestate_l2==="living")
    gamestate_l2="library"
   else {gamestate_l2="living"
  
    } 
   })
   */
  if (score===5){
    gamestate="screen"
  }
}
/*if (gamestate===array[0]) 
{
  image(notebook,200,100)
}
if (gamestate===array[1]){
  image(bottle,300,200)
}
if (gamestate===array[4]){
  image(rose,400,100)
}
if (gamestate===array[3]){
  image(canopener,450,100)
}
if (gamestate===array[2]){
  image(pen,400,100)
}
if (gamestate===array2[0]){
  image(sharpener,400,100)
}
if (gamestate===array2[1]){
  image(paper,400,100)
}
if (gamestate===array2[2]){
  image(pencilbox,400,100)
}
if (gamestate===array2[3]){
  image(ruler,400,100)
}
if (gamestate===array2[4]){
  image(target,400,100)
}
if (gamestate===array2[5]){
  image(pin,400,100)
}
*/
}
function mousePressed(button){
  if (gamestate_l1==="living ")
  {gamestate_l1==="library"}
  else{gamestate_l1="living"
  } 
}
button.mousePressed(function(){
  if (gamestate_l2==="living")
  gamestate_l2="library"
 else {gamestate_l2="living"

  } 
})
