import { getInputDirection } from "./input.js"

const snakeBody = [ {x: 10, y: 10} ]

export function updateSnake() {
    const inputDirection = getInputDirection()
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

function growSnakeUp(size) {
    for (let i = 0; i < size; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
}