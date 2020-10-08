class paper {
    constructor(x, y) {
    var options = {
        isStatic: false,
        restitution: 0.5,
        friction:0,
        density:1.2

     }
     this.image = loadImage ("sprites/paper.png");
     this.x=x;
     this.y=y;
     this.body = Bodies.circle(this.x, this.y, 70/2, options);
     //this.width = 20;
     //this.height = 20;
          
     World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          //rotate(angle);
          imageMode(CENTER);
          fill("green");
          //strokeWeight(4);
          //stroke("white");
          image(this.image, 0, 0, 70, 70);
          pop();
        }
     

}