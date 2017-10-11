const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require ('../lib/multiply');
const divide = require ('../lib/divide');

describe('math', () => {
    it('adds two numbers', () => {
        assert.equal( add(5, 2), 7 );
    });

    it('subtracts two numbers', () => {
        assert.equal( subtract(5, 2), 3 );
    });

    it('multiplies two numbers', () => {
        assert.equal( multiply(5,2), 10 );
    });

    it('divides two numbers', () => {
        assert.equal( divide(5,2), 2.5 );
    });

    it('error when dividing by zero', () => {
        try {
            divide(5,0);
            assert.fail('expected error not thrown');
        } catch (err) {
            assert.equal(err.message, 'dont divide by 0');
        }
    });


});