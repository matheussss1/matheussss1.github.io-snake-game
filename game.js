import { drawSnake, updateSnake } from "./snake.js";
import { drawFood /*updateFood*/ } from "./food.js";


let lastRended = 0;
const SNAKE_SPEED = 5;
export const GAMEBOARD_SIZE = 17;

const gameBoard = document.getElementById("gameboard");
gameBoard.style.gridTemplateColumns = `repeat(${GAMEBOARD_SIZE}, 1fr)`;
gameBoard.style.gridTemplateRows = `repeat(${GAMEBOARD_SIZE}, 1fr)`;

function main(currentTime) {
    window.requestAnimationFrame(main)
    let secondsSinceLastRender = (currentTime - lastRended) / 1000
    
    if (secondsSinceLastRender  < 1 / SNAKE_SPEED) return

    lastRended = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}