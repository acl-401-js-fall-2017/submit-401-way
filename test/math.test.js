const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');


describe('math', () => {
    it('adds two numbers', () => {
        assert.equal(add(5, 2), 7);
    });
    it('finds the difference between numbers', () => {
        assert.equal(subtract(5, 2), 3);
    });
    it('multiples two numbers', () => {
        assert.equal(multiply(5, 2), 10);
    });
    it(' divides a number by another', () => {
        assert.equal(divide(6, 2), 3);
    });
    it.skip('error when dividing by zero', () => {
        throw new Error('Attempt to divide by zero (0)');
    });
});