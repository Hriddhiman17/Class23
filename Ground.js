class Ground{
    constructor(x, y, width, height){
        var body_options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, body_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    
    display(){
        var hri = this.body.position;
        rectMode(CENTER);
        rect(hri.x, hri.y, this.width, this.height);
    }
}