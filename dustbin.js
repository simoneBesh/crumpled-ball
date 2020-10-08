class dustbin {
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
         }
         this.image = loadImage ("sprites/dustbin.png");
         this.width = width;
         this.height = height;
         this.x=x;
         this.y=y;
         this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
              
         World.add(world, this.body);
            }
            display(){
              var pos =this.body.position;
              push();
              translate(pos.x, pos.y);
              //rotate(angle);
              imageMode(CENTER);
              fill("pink");
              strokeWeight(4);
              stroke("white");
              image(this.image, 0, 0, this.width, this.height);
            pop();

    }

    //boxBottom=createSprite(400, 650, 200, 20);
	//boxBottom.shapeColor="red";

	//boxLeft=createSprite(300, 610, 20, 100);
	//boxLeft.shapeColor="red";
	
	//boxRight=createSprite(500, 610, 20, 100);
	//boxRight.shapeColor="red";

}