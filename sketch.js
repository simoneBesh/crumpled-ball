
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var binBottom;
 //binLeft, binRight;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1280, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new paper(200, 400);

	binBottom=new dustbin(1000, 620, 100, 100);
	binBottom.shapeColor="red";
	//binLeft=new dustbin(1000, 610, 20, 100);
	//binLeft.shapeColor="red";
	//binRight=new dustbin(1200, 610, 20, 100);
	//binRight.shapeColor="red";

	ground=new Ground(800, 680, 1600, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);
  
  paper1.display();

  binBottom.display();
  //binLeft.display();
  //binRight.display();

  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:8, y:-8});
	}
}



