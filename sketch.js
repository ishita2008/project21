var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,50);
  thickness=random(22,83)

  bullet=createSprite(50, 200, 20,20);
  bullet.velocityX=speed;
  

  wall=createSprite(1395,200,thickness,height/2);
  wall.shapeColor=color("pink")

}


function draw() {
  background("black");
  
  bullet.collide(wall)

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0)
    } 
    if(damage<10)
    {
      bullet.shapeColor=color(0,255,0)
    }
    
  }
      drawSprites();
}

function hasCollided(lbullet, lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}
