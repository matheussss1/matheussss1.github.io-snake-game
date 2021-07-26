import { onSnake, growSnakeUp } from './snake.js'

let food = { x: 6, y: 5 }

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
}

// function setNewRandomFoodPosition {
//     if ()
// }