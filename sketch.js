var issImg , bgimg , scimg1 ,scimg2 ,scimg3 ,scimg4 ;
var ISS , spacecraft , hasDocked = false;
function preload(){
  issImg = loadImage("images/iss.png");
  bgimg = loadImage("images/spacebg.jpg");
  scimg1 = loadImage("images/spacecraft1.png");
  scimg2 = loadImage("images/spacecraft2.png");
  scimg3 = loadImage("images/spacecraft3.png");
  scimg4 = loadImage("images/spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
  ISS = createSprite(400, 200, 50, 50);
  ISS.addImage(issImg);
  ISS.scale = 0.6 ;

  spacecraft = createSprite(100, 300, 50, 50);
  spacecraft.addImage(scimg1);
  spacecraft.scale = 0.2 ;
  spacecraft.depth = 0 ;

  if(!hasDocked){
    spacecraft.x = Math.round(random (50,750));
  }
  
}

function draw() {
  console.log(spacecraft.x);
  console.log(spacecraft.y);
  background(bgimg); 
  if(keyDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x - 2;
    spacecraft.addImage(scimg3);
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x + 2;
    spacecraft.addImage(scimg4);
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.y = spacecraft.y + 2 ;
    spacecraft.addImage(scimg1);
  }
  if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y - 2;
    spacecraft.addImage(scimg2);
  }
if(spacecraft.x <= (ISS.x - 10) && spacecraft.y <= (ISS.y + 80) ){
    hasDocked = true ;
  }
  drawSprites();

  if(hasDocked == true){
    console.log("hasDocked true");
    textSize(20)
    text("docking Succesfull!",400,330);
  }
}