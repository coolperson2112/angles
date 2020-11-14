class Box {
    constructor(x,y){
        var option1 = {restitution:0.2,friction:0.3,density:1}
        this.body = Bodies.rectangle(x,y,70,120,option1)
World.add(world,this.body)


}
display(){
    var angle = this.body.angle
    console.log(angle)
    push()
    
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    rect(0,0,70,110)
    pop()
}

}