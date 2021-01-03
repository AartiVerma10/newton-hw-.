class Ball{
    constructor(x){
        var options={
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.4
        }
        this.body=Bodies.circle(x,400,20,options);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        push();
        fill("red");
        circle(pos.x,400,this.radius);
        pop();
           
    }
}