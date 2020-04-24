class Ground{
   constructor(x,y,width,height){
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height); 
    this.width = width;
     this.height = height;
     World.add(world,this.body);
}
   display(){
      var pos = this.body.position;
     rectMode(CENTER);
     noStroke();
     fill("white");
     rect(this.x,this.y,this.width,this.height);
  }
}