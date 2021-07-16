const canvas = document.getElementById("game");
const game = canvas.getContext("2d");
const appleImg = document.getElementById("maça");
const placar = document.getElementById("Score");

const HEIGHT = 600;
const WIDHT = 600;
const SNAKE_WIDTH = 50;
const SNAKE_HEIGHT = 50;

const snake = {
    x : WIDHT / 12 * Math.floor(Math.random() * 12),
    y: HEIGHT / 12 * Math.floor(Math.random() * 12),
    score: 0,
}

placar.innerHTML = snake.score;

const apple = {
    x : WIDHT / 12 * Math.floor(Math.random() * 12),
    y: HEIGHT / 12 * Math.floor(Math.random() * 12),
}

game.fillStyle = "red";
game.fillRect(snake.x, snake.y, SNAKE_WIDTH, SNAKE_HEIGHT);

game.drawImage(appleImg, apple.x, apple.y, 50, 50);

document.addEventListener("keypress", (e) => {
    moveObject(e, snake);
    getScore(snake,apple);
})

function moveObject(e, objeto) {
    game.clearRect(objeto.x, objeto.y, 50, 50);

    switch (e.key) {
        case "s" :
            objeto.y += 50;
            break;
        case "w": 
            objeto.y -= 50;
            break;
        case "a": 
            objeto.x -= 50;
            break;
        case "d": 
            objeto.x += 50;
            break;
    }

    game.fillRect(objeto.x, objeto.y, SNAKE_WIDTH, SNAKE_HEIGHT);
}

function moveImage(objeto) {
    game.clearRect(objeto.x, objeto.y, 50, 50);
    game.drawImage(appleImg, apple.x, apple.y, 50, 50);
}

function getScore(cobra, maça) {
    if (cobra.x == maça.x && cobra.y == maça.y) {
        maça.x =  WIDHT / 12 * Math.floor(Math.random() * 12),
        maça.y =  HEIGHT / 12 * Math.floor(Math.random() * 12),
        moveImage(maça);
        cobra.score++;
        writeScore();
    }
}

function writeScore() {
     placar.innerHTML = snake.score;
}