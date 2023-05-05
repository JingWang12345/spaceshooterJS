class BaseEnemy extends GameObject{
    constructor(x, y, width, height, color = 'red', imageUrl){
        super(x, y, width, height, color, imageUrl);
        this.speed = 3;
        this.healthPoints = 1;
    }

    move(){
        this.y += this.speed
    }

    collision(){
        this.healthPoints--
        if (this.healthPoints <= 0) {
            this.isAlive = false;
        }
    }

}