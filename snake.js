import { getInputDirection, resetInputDirection } from "./input.js"
import { GAMEBOARD_SIZE, SNAKE_GROW } from "./gameConfig.js"

let snakeBody = [ {x: 10, y: 10} ]

export function updateSnake() {
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    checkIfSnakeDied()
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
        if (element.x > GAMEBOARD_SIZE || element.x < 0 || element.y > GAMEBOARD_SIZE || element.y < 0) {
            alert("perdeu")
            snakeBody = [ {x: 10, y: 10} ]
            resetInputDirection()
        }
    })
}

export function onSnake(foodObject) {
    return snakeBody[0].x == foodObject.x && snakeBody[0].y == foodObject.y
}