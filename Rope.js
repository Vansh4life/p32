class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

        this.pointB = pointB;
    }

    attach(body){
        this.rope.bodyA = body;
    }


    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        push();
        stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                //image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                //image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
        pop();
    }

}
