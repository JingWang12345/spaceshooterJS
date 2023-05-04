class Projectile extends GameObject{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.speed = 15;
    }

    move(){
        this.y -= this.speed;
    }
}