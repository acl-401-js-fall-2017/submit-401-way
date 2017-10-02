const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiple = require('../lib/multiple');




describe('math', () => {
    it('adds two numbers', () => {
        assert.equal(add(5, 2), 7);
    });

    it('subtract two numbers', () => {
        assert.equal(subtract(5, 2), 3);
    });

    it('multiplies two numbers', () => {
        assert.equal(add(5, 2), 10);
    });

});