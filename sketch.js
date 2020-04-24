const World = Matter.World;
const Engine = Matter.Engine; 
const Bodies = Matter.Bodies;

var world,engine;
var room1,ground;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
   room1 = new Room(600,200,20,50);
   ground = new Ground(400,380,800,10);
   console.log(ground);
}

function draw() {
  background(0);
  Engine.update(engine); 
  room1.display(600,250,20,50);
  ground.display(400,380,800,10);
}