class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.Sling= Constraint.create(options);
        World.add(world, this.Sling);
    }
    display(){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
      
        line(pointA.x, pointA.y-25, pointA.x,pointA.y-300);
    }
}