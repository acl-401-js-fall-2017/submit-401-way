function divide (a, b) {
    if(b===0){
        throw new Error('you can not divide by zero');
    }
    return a / b;
}

module.exports = divide;