let food = { x: 3, y: 1 }

export function drawFood(gameBoard) {
    const foodElement =  document.createElement("img")
    foodElement.src = "./food.png"
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

export function onFood(snakeHead) {
    if (snakeHead.x == food.x && snakeHead.y == food.y) {
        updateFood()
        return true
    }
}

function updateFood() {
    
}