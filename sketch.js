
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball1 = new Ball(300);
   ball2 = new Ball(350);
   ball3 = new Ball(400);
   ball4 = new Ball(450);
   ball5 = new Ball(500);
   ball6 = new Ball(550);
   roof = new Ground();
   string1 = new String(ball1.body,{x:300,y:300});
   string2 = new String(ball2.body,{x:350,y:300});
   string3 = new String(ball3.body,{x:400,y:300});
   string4 = new String(ball4.body,{x:450,y:300});
   string5 = new String(ball5.body,{x:500,y:300});
   string6 = new String(ball6.body,{x:3550,y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
    
  stroke("Black");
  strokeWeight(2);
  background(250);
  Engine.update(engine);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  roof.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  string6.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})

  }
}



