
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy= new Boy(200,300,20,20)
rock= new Rock(200,300,20,20)
mango1= new Mango(200,300,20,20)
mango2= new Mango(200,300,20,20)
mango3= new Mango(200,300,20,20)
mango4 = new Mango(200,300,20,20)
mango5= new Mango(200,300,20,20)
tree= new Tree(200,300,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  rock.display();

}



