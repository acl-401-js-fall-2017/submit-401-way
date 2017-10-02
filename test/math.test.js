const assert = require('assert');

const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');

describe('math', () => {
    it('adds two numbers', () => {
        assert.equal(add(5, 2), 7);
    });

    it('subtracts two numbers', () => {
        assert.equal(subtract(4,3), 1);
    });

    it('multiplies two numbers', () => {
        assert.equal(multiply(4, 6), 24);
    });

    it('divides two numbers', () => {
        assert.equal(divide(12,4), 3);
    });

    it.skip('error when dividing by zero', () => {
        try {
            divide(6, 0);
            assert.fail('expected error not thrown');
        }
        catch(err) {
            assert.equal(err.message, 'Attempt to divide by zero (0');
        }
    });
});