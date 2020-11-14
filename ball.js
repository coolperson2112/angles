class Ball {
    constructor(x,y,r){
        var option1 = {restitution:0.8}
        this.body = Bodies.circle(x,y,r,option1)
        World.add(world,this.body)
        this.r = r
    }
display(){
    ellipseMode(CENTER)
  fill("blue") 
  ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
  
}

}