function divide(a , b) {
    if(b === 0) throw new Error('Attempt to divide by zero (0)');
    return a / b;
}

module.exports = divide;