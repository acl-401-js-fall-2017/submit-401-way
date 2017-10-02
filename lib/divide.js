function divide(a, b) {
    if (a===0 || b === 0)  throw new Error('Attempt to divide by 0');
    return a / b;
}

module.exports = divide;