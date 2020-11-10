
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	d1=new Dustbin(1300,665,170,20);
	d2=new Dustbin(1205,615,20,120);
	d3=new Dustbin(1395,615,20,120);

	ground=new Ground(800,690,2600,30)
	paper=new Paper(100,360,30);
	//Create a Ground
	

	// var render = Render.create({
	//   element: document.body,
	//   engine: engine,
	//   options: {
	//     width: 1200,
	//     height: 700,
	//     wireframes: false
	//   }
	// });

	//Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightblue");
 
  d1.display();
  d2.display();
  d3.display();
  ground.display();
  paper.display();
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		//Matter.Body.applyForce(body,position,{force});
		
    
  	}
}





