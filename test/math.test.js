const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiplication = require('../lib/multiplication');
const division = require('../lib/division');


describe('math', () => {
  it('adds two numbers', () => {
    assert.equal(add(5, 2), 7);
  });

  it('subtracts two numbers', () => {
    assert.equal(subtract(5, 2), 3);
  });

  it('multiplies two numbers', () => {
    assert.equal(multiplication(3, 5), 15);
  });

  it('divides two numbers', () => {
    assert.equal(division(6, 3), 2);
  });

  it.skip('error when dividing by zero', () => {

  });
});