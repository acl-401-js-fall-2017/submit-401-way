function division (x, y) {
  if (y === 0) throw new Error ('Attempt to divide by zero');
  return x / y;
}

module.exports = division;