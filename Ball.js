class Ball{
    constructor(x,y,width,height){
        var options = {
            frictionAir:0.005,
            density: 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}