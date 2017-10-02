function divide(x, y) {
    y === 0 ? throw new Error('Attempt to divide by zero (0)') : x/y
}

module.exports = divide;