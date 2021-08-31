
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground= Bodies.rectangle(200,200,200,20,ground_options);
  World.add(world,ground);
  
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate (ground,Angle)
  push();
  translate(ground.position.x,ground.position.y)
  rotate(Angle)
  rect(0,0,200,20)
  pop();
  Angle=Angle+0.01

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.



  
  
}

