import { onSnake, growSnakeUp } from './snake.js'
import { GAMEBOARD_SIZE } from './config/gameConfig.js'

let food = {
    x: Math.floor(Math.random() * GAMEBOARD_SIZE),
    y: Math.floor(Math.random() * GAMEBOARD_SIZE)
}

export function drawFood(gameBoard) {
    const foodElement =  document.createElement("img")
    foodElement.src = "./food.png"
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

export function updateFood() {
    if (onSnake(food)){
        growSnakeUp()
        setNewRandomFoodPosition()
    }
    return
}

function setNewRandomFoodPosition(){
    food && (
        food = {
            x: Math.floor(Math.random() * GAMEBOARD_SIZE),
            y: Math.floor(Math.random() * GAMEBOARD_SIZE)
        }
    )
}