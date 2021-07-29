var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,30,30);
  
}

function draw() 
{


   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    ball.position.x = ball.position.x +5;
    background('purple');
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    ball.position.x= ball.position.x -5;
    
    background('lightgreen');
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    ball.position.y = ball.position.y - 5;
background('orange');
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    ball.position.y = ball.position.y + 5;
  background('violet');
  }

  drawSprites();
}




