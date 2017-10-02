function divide (a, b) {
    if (b === 0) throw new Error('Attemped to divide by (0)')
    return a / b

}

module.exports = divide;