const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');

describe('math', () => {
  it('adds two numbers', () => {
    assert.equal(add(5, 2), 7);
  });

  it('subtracts two numbers', () => {
    assert.equal(subtract(5, 2), 3);
  });
});