const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(300,300,20,10);
  ground2 = new Ground(800,400,20,10);
  ground3 = new Ground(300,160,20,10);
  block1 = new Box(330,320,30,40);
}

function draw() {
  background(255,255,255);  
  ground1.display();
  ground2.display();
  ground3.display();
  block1.display();
}