const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');

describe('math', () => {
    it('adds two numbers', () => {
        assert.equal(add(5,2), 7);
    });
});

describe('subtract', () => {
    it('subtracts two numbers', () => {
        assert.equal(subtract(10,2), 8);
    });
});

describe('multiply', () => {
    it('multiplies two numbers', () => {
        assert.equal(multiply(5,2), 10);
    });
});

describe('divide', () => {
    it('divides two numbers', () => {
        assert.equal(divide(6,2), 3);
    });
    
    it('error when dividing by zero', () => {
        try {
            divide(6,0);
            assert.fail('expected error not thrown');
        
        }
        catch(err) {
            assert.equal(err.message, 'Attempt to divide by zero (0)');
        
        }
        
    });
    
});


