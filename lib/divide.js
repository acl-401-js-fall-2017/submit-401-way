function divide(x, y) {
    if (y === 0 ) throw new Error('Attempt to divide by zero (0)');
    return x/y;
}

module.exports = divide;