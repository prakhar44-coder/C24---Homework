
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1,rectangle2,rectangle3
function preload()
{
	
}

function setup () {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1200,20)
	
	rectangle1 = new Wall(900,340,30,100);
	
	rectangle2 = new Wall(1000,380,200,20);
	
	rectangle3 = new Wall(1100,340,30,100);
	
	 
	ball1 = new Ball(35,340,30);
	
	

    
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball1.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();


 drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:160, y:-160});
	
	}
}


