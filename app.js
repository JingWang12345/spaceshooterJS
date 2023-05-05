const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let animate;

let player = new Player(canvasWidth / 2 - 25, canvasHeight / 2 - 25, 50, 50, 'violet', './assets/player.png');

let enemySpawnCoolDown = 120;
let allEnemies = [];

function animator() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    animate = requestAnimationFrame(animator);

    if (player) {
        player.draw(ctx);
        player.controls(canvasWidth, canvasHeight);
    }


    enemySpawnCoolDown--;
    if (enemySpawnCoolDown <= 0) {
        enemySpawn()
        enemySpawnCoolDown = 120;
    }



    allEnemies.forEach(enemy => {
        enemy.draw(ctx);
        enemy.move();
    })


    if (player) {
        checkCollision();
    }


    checkCollision();
    allEnemies = allEnemies.filter(enemy => enemy.healthPoints > 0);
}


function enemySpawn() {
    const randomX = Math.random() * (canvasWidth - 50)
    let enemy = new BaseEnemy(randomX, -60, 50, 50, null, './assets/enemy.png');
    allEnemies.push(enemy);
}

function checkCollision() {
    let playerAssets = [player, ...player.projectiles];

    for (let i = 0; i < playerAssets.length; i++) {
        const pA = playerAssets[i];
        for (let j = 0; j < allEnemies.length; j++) {
            const enemy = allEnemies[j];

            if (pA.checkCollision(enemy)) {
                pA.collision()
                enemy.collision();

            }

            // if (enemy.x < (pA.x +pA.width) && 
            // (enemy.x + enemy.width) > pA.x &&
            // enemy.y < pA.y + pA.height &&
            // (enemy.y + enemy.height) > pA.y) {
            //     enemy.healthPoints--;
            //     console.log("enemy",enemy);

        }

    }
    allEnemies = allEnemies.filter(enemy => enemy.isAlive);
    player.projectiles = player.projectiles.filter(projectile => projectile.isAlive);
    if (!player.isAlive) {
        player = null;
    }
}



animator();