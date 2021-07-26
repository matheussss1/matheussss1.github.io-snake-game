import { getInputDirection, resetInputDirection } from "./input.js"
import { endGame } from "../game.js"
import { GAMEBOARD_SIZE, SNAKE_GROW } from "./config/gameConfig.js"

let snakeBody = [{
    x: Math.floor(Math.random() * 12),
    y: Math.floor(Math.random() * 12)
}]

export function updateSnake() {
    const inputDirection = getInputDirection()
    turnSnakeFaceArround(inputDirection)

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
        console.log(snakeBody[i])
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function drawSnake(gameBoard){
    snakeBody.forEach( element => {
        if (snakeIsDead(element.y, element.x))
            return endGame()

        const snakeElement =  document.createElement("div")
        snakeElement.style.gridColumnStart = element.x;
        snakeElement.style.gridRowStart = element.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
}

export function growSnakeUp(size = SNAKE_GROW) {
    for (let i = 0; i < size; i++) {
        snakeBody.push({...snakeBody[snakeBody.length]})
    }
}

function snakeIsDead(x, y) {
    if (x > GAMEBOARD_SIZE || x < 0 || y > GAMEBOARD_SIZE || y == 0) {
        return true
    }

    snakeBody.some(element =>  onSnake(element))
}

export function onSnake(Object) {
    return snakeBody[0].x == Object.x && snakeBody[0].y == Object.y
}

export function turnSnakeFaceArround({ x, y }) {
    const snakeHead = getSnakeDOM()
    return rotateSnakeHeadCSS(snakeHead[0], x, y)
}

function getSnakeDOM() {
    return [].slice.call(document.getElementsByClassName('snake'));
}

function rotateSnakeHeadCSS(SnakeHTMLElement, x, y) {
    if (x == 0 && y == -1)
        SnakeHTMLElement.style.transform = "rotate(0deg)"

    else if (x == 0 && y == 1)
        SnakeHTMLElement.style.transform = "rotate(180deg)"

    else if(x == 1 && y == 0)
        SnakeHTMLElement.style.transform = "rotate(90deg)"

    else if (x == -1 && y == 0)
        SnakeHTMLElement.style.transform = "rotate(270deg)"
}