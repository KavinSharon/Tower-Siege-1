class Box{
    constructor(x, y ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.width = 30;
        this.height = 40;

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}