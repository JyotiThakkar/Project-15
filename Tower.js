class Tower{
    constructor(x,y,width,height)
    {

        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("assets/tower.png");




    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,150,50,this.width,this.height);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);


    }
}