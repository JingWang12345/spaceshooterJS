class GameObject{

    constructor(x, y, width, height, color = 'black', imageUrl){
        this.isAlive = true;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        if (imageUrl) {
            this.image = new Image();


            this.image.onload = ()=>{
                this.hasImage = true;
            }
            this.image.src = imageUrl;
        }
       
    }

    draw(ctx){
        if(this.hasImage){
            console.log(this.image);
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        }else { 
               
           

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    
    }
     
    isColliding(other){

        const isCollidingX = other.x < (this.x + this.width) && (other.x + other.width) > this.x;
        const isCollidingY = other.y < (this.y + this.height) && (other.y + other.hasImage) > this.y;
if (isCollidingX && isCollidingY) {
    return true;
}else {
    return false;
}
    }
}