class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            friction:1,
            restitution: 0.8,
            density: 0.04
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
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}