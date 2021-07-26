let inputDirection = { x:0, y:0}
let lastInputDirection = inputDirection

window.addEventListener('keydown', (e) => {
    setInputDirection(e.key)
})

export function getInputDirection() {
    return inputDirection
}

function setInputDirection(keyCode) {
    lastInputDirection = inputDirection

    if (lastInputDirection.y !== 1 && (keyCode == 'w' || keyCode == 'ArrowUp')) {
        return inputDirection = { x: 0, y: -1}
    }
    else if (lastInputDirection.x !== 1 && (keyCode == 'a' || keyCode == 'ArrowLeft')) {
        return inputDirection = { x: -1, y: 0}
    }
    else if (lastInputDirection.y !== -1 && (keyCode == 's' || keyCode == 'ArrowDown')) {
        return inputDirection = { x: 0, y : 1}
    }
    else if (lastInputDirection.x !== -1 && (keyCode == 'd' || keyCode == 'ArrowRight')) {
        return inputDirection = { x: 1, y : 0}
    }
}

export function resetInputDirection() {
    inputDirection = { x:0, y:0}
    return true
}
