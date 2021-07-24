import { onSnake, growSnakeUp } from './snake.js'

let food = { x: 3, y: 1 }

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
    }
}