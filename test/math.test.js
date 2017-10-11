const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');

describe('math', () => {
    describe('addition', () => {
        it('adds two num', () => {
            assert.equal(add(5,2), 7);
        });
    });

    describe('subtraction', () => {
        it('subtracts two numbers', () => {
            assert.equal(subtract(5,2), 3);
        });
    });
    
    describe('multiplication', () => {
        it('multiplies two num', () => {
            assert.equal(multiply(5,2), 10);
        });
    });

    describe('division', () => {
        it('divides two numbers', () => {
            assert.equal(divide(5,2), 2.5);
        });
        
        it('returns "Error" when denominator is 0', () => {
            try{
                divide(5, 0);
                assert.fail('expected error not thrown');
            }
            catch(err) {
                assert.equal(err.message, 'Attempt to divide by zero (0)');
            }
        });
    });
});