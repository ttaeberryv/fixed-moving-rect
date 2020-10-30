var fixedR, movingR
function setup() {
  createCanvas(800,400);
 fixedR= createSprite(400, 200, 50, 50);
 movingR= createSprite(400,300,50,70)
 fixedR.debug=true
 movingR.debug=true
}

function draw() {
  background("black");  
  movingR.y=mouseY
  movingR.x=mouseX
  movingR.shapeColor="purple"
  fixedR.shapeColor="purple"
 if(movingR.x-fixedR.x < movingR.width/2+fixedR.width/2
  && fixedR.x-movingR.x < movingR.width/2+fixedR.width/2
  && fixedR.y-movingR.y < fixedR.height+2/movingR.height/2
  && movingR.y-fixedR.y < fixedR.height+2/movingR.height/2
  ){
   fixedR.shapeColor="blue"
   movingR.shapeColor="blue"
  }
  else{ 
    movingR.shapeColor="purple"
    fixedR.shapeColor="purple"
  }




  drawSprites();
  
}