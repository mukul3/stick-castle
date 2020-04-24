class Room{
  constructor(x,y,width,height){
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
    this.height=height;
    this.width=width;
    World.add(world,this.body);
 }
  display(){
    var pos = this.body.position; 
    rectMode(CENTER);
    noStroke();
    fill("white");
    rect(0,0,this.width,this.height);
  }
}