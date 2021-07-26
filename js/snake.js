import { getInputDirection, resetInputDirection } from "./input.js"
import { GAMEBOARD_SIZE, SNAKE_GROW } from "./config/gameConfig.js"

let snakeBody = [ {x: Math.floor(Math.random() * 12), y: Math.floor(Math.random() * 12)} ]

export function updateSnake() {
    const inputDirection = getInputDirection()
    turnFaceArround(inputDirection)
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function drawSnake(gameBoard){
    snakeBody.forEach( element => {
        const snakeElement =  document.createElement("div")
        snakeElement.style.gridColumnStart = element.x;
        snakeElement.style.gridRowStart = element.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
}

export function growSnakeUp(size = SNAKE_GROW) {
    for (let i = 0; i < size; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
}

function checkIfSnakeDied() {
    snakeBody.some(element => {
        if (element.x > GAMEBOARD_SIZE || element.x < 0 || element.y > GAMEBOARD_SIZE + 1 || element.y == 0) {
            alert(GAMEBOARD_SIZE)
            snakeBody = [ {x: 10, y: 10} ]
            resetInputDirection()
        }
    })
}

export function onSnake(foodObject) {
    return snakeBody[0].x == foodObject.x && snakeBody[0].y == foodObject.y
}

function turnFaceArround({ x, y }) {
    const snakeHead = getSnakeDOM()
    return rotateSnakeHeadCSS(snakeHead[0], x, y)
}

function getSnakeDOM() {
    return [].slice.call(document.getElementsByClassName('snake'));
}

function rotateSnakeHeadCSS(SnakeHTMLElement, x, y) {
    if (x == 0 && y == -1) {
        SnakeHTMLElement.style.transform = "rotate(0deg)"
    }
    else if(x == 0 && y == 1) {
        SnakeHTMLElement.style.transform = "rotate(180deg)"
    }else if(x == 1 && y == 0) {
        SnakeHTMLElement.style.transform = "rotate(90deg)"
    }else if (x == -1 && y == 0) {
        SnakeHTMLElement.style.transform = "rotate(270deg)"
    }
}