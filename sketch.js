
//name spacing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object,ball;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world = engine.world;
  object_options ={
    isStatic :true  
  }

  ball_options ={
    restitution :1.1
  }
  object = Bodies.rectangle(200,380,400,50,object_options);
  ball= Bodies.circle(200,200,15,ball_options);
  World.add(world,object);
  World.add(world,ball);
  console.log(ball);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER) ;
 

 rect(object.position.x,object.position.y,400,50);
 ellipse(ball.position.x,ball.position.y,30,30);
 
}








