class Player extends GameObject{
    constructor(x, y, width, height, color = 'green', imageUrl){
        super(x, y, width, height, color, imageUrl);
        this.speed = 10;
        this.controller = {};
        this.projectiles = [];
        this.attackCoolDown = 10;
        this.healthPoints = 5;
    }

    collision(){
        this.healthPoints--;
        if(this.healthPoints <= 0){
            this.isAlive = false;
        }
    }

    draw(ctx){
        super.draw(ctx);
        this.attackCoolDown--;
        this.projectiles.forEach(projectile => {
            projectile.draw(ctx);
            projectile.move();
        })
    }

    controls(canvasWidth, canvasHeight){
        document.onkeydown = (keyEvent) => {
            // console.log("keyEventDown", keyEvent);
            this.controller[keyEvent.key] = true;
        }
        document.onkeyup = (keyEvent) => {
        //    console.log("keyEventUp", keyEvent);
           this.controller[keyEvent.key] = false;
        }

        // console.log(this.controller);
        if (this.controller.ArrowUp){
            this.y =  this.y > 0 ? (this.y - this.speed) : 0;
        }
        if (this.controller.ArrowDown){
            this.y = this.y <= (canvasHeight - this.height) ? (this.y + this.speed) : (canvasHeight - this.height);
        }
        if (this.controller.ArrowLeft){
            this.x =  this.x > 0 ? (this.x - this.speed) : 0;
        }
        if (this.controller.ArrowRight){
            this.x = this.x <= (canvasWidth - this.width) ? (this.x + this.speed) : (canvasWidth - this.width);
        }
                  
        if(this.controller[" "]) {

            this.baseAttack();
        }


        // document.onkeydown = (keyEvent) => {
        //     console.log("keyEvent", keyEvent);
        //     if (keyEvent.key === "ArrowUp") {
        //         this.y-= this.speed;
        //     }
        //     if (keyEvent.key === "ArrowDown") {
        //         this.y+= this.speed;
        //     }
        //     if (keyEvent.key === "ArrowLeft") {
        //         this.x-= this.speed;
        //     }
        //     if (keyEvent.key === "ArrowRight") {
        //         this.x+= this.speed;
        //     }
        // }
    }

    baseAttack(){
        if (this.attackCoolDown <= 0) {
            let projectile = new Projectile(this.x , this.y, 5, 20);
            let projectile2 = new Projectile(this.x + this.width -5 , this.y, 5, 20);
            this.projectiles.push(projectile, projectile2);
            this.attackCoolDown = 10;
        }
        
    }
}