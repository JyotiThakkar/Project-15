const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   tower=new Tower(150,350,100,300);

 
}

function draw(){
    background(0);
    
    Engine.update(engine);
  tower.display();
}