const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, box1, box2, ground;

function preload(){
	
}

function setup(){
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Box(400,380,900,20);
	box1=new Box(780,320,20,100);
	box2=new Box(600,320,20,100);
	ball=new Ball(100,300,30,30);
 
}


function draw(){
  	rectMode(CENTER);
  	background(0);
  	Engine.update(engine);
  
	ground.display();
	ball.display();
	box1.display();
	box2.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:0, y:-50});
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:50, y:0});
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:-50, y:0});
	}
}

