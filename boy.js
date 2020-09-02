class Boy{
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("sprites/boy.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      rectMode(CENTER);
      fill(80);
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };