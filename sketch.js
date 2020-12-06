
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy,boy_img;
var ground1;
var tree1,tree_img;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6;
var rope;
function preload()
{
   boy_img=loadImage("boy.png")	
   tree_img=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	boy=Matter.Bodies.rectangle(240,340,50,170);
	
	tree1= new Tree(660,300,60,165);
	ground1=new Ground(400,390,800,10);
	stone1=new Rock(150,300,10,10);
	mango1=new Mango(550,200,25);
	mango2=new Mango(570,120,25);
	mango3=new Mango(610,150,25);
	mango4=new Mango(640,90,25);
	mango5=new Mango(660,180,25);
	mango6=new Mango(690,110,25);
	mango7=new Mango(735,155,25);
	mango8=new Mango(765,200,25);
	thread=new Rope(stone1.body,{x:200,y:300});
  }
  function draw() {
	background("lightgrey");  
	Engine.update(engine);
	tree1.display(); 
    imageMode(CENTER);
	image(tree_img,650,220,300,350);
    
	ground1.display(); 
	stone1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	thread.display();
	imageMode(CENTER);
	image(boy_img,boy.position.x,boy.position.y,130,180);
	
	
	fill("black")
	textSize(15);
	text("Press Space to get a second chance to play",40,40);

	detectCollision(stone1,mango1)
	detectCollision(stone1,mango2)
	detectCollision(stone1,mango3)
	detectCollision(stone1,mango4)
	detectCollision(stone1,mango5)
	detectCollision(stone1,mango6)
	detectCollision(stone1,mango7)
	detectCollision(stone1,mango8)
  }
  function mouseDragged()
  {
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased()
  {
	thread.fly();
  }
  function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone1.body,{x:140,y:315});
    thread.attacher(stone1.body);
  }
}

function detectCollision(lRock,lMango){
	mangoBody=lMango.body.position
	stoneBody=lRock.body.position
   
   var distance =dist(stoneBody.x,stoneBody.y,mangoBody.x,mangoBody.y)
   
   if(distance<=lMango.radius+lRock.radius){
	  Matter.Body.setStatic(lMango.body,false);
   }
	} 



 