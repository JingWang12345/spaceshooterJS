class BaseEnemy extends GameObject{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.speed = 3;
        this.healthPoints = 1;
    }

    move(){
        this.y += this.speed
    }
}