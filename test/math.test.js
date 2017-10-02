const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');

describe ('math', () => {
    it('adds two numbers', () => {
        assert.equal(add(5, 2), 7);
    });
    it('subtracts two functions', ()=> {
        assert.equal(subtract(15, 5),10);
    });
    it('multiplies two functions', ()=> {
        assert.equal(multiply(15, 3),45);
    });
    it('divides two functions', ()=> {
        assert.equal(divide(15, 5),3);
        try { 
            assert.equal(divide(15, 0),0);
        } catch(e) {
            console.log(e);
        }

    });
    it('divides by 0', ()=> {
        try { 
            assert.equal(divide(15, 0),0);
            assert.fail('expected error not thrown');
        } catch(e) {
            assert.equal(e.message, 'Attempt to divide by zero (0)');
        }

    });
});

