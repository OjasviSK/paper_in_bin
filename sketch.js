
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var cradle1, cradle2, cradle3, cradle4;
var stand;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand=new Stand(337,300,250,30);
	cradle1=new Cradle(250,50,50);
	cradle2=new Cradle(310,50,50);
	cradle3=new Cradle(370,50,50);
	cradle4=new Cradle(430,50,50);

	thread1 = new Attach(cradle1.body , stand.body);
	thread2 = new Attach(cradle2.body , stand.body);
	thread3 = new Attach(cradle3.body , stand.body);
	thread4 = new Attach(cradle4.body , stand.body);

}


function draw() {
  background("white");
  Engine.update(engine);
  rectMode(CENTER);
 
  stand.display();
  cradle1.display();
  cradle2.display();
  cradle3.display();
  cradle4.display();
  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(cradle1.body, cradle1.body.position,{x:-0.1,y:-0.01});
	}
}

