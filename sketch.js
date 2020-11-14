

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  engine = Engine.create()
  world =  engine.world
  createCanvas(1000,1000)
//ellipse(ball2.position.x,ball2.position.y,50,50)
var options={isStatic:true}
ground = Bodies.rectangle(500,950,1000,20,options)

World.add(world,ground)
box1 = new Box(400,300)
box2 = new Box(430,100)

ball1 = new Ball(200,400,50)
ball2 = new Ball(200,500,50)
}


function draw() {
  
  Engine.update(engine)
  background(0);  
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,20)
  box1.display()
  box2.display()
  //ball1.display()
  //ball2.display()
  drawSprites();
  
}