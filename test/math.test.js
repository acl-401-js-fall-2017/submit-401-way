const assert = require('assert');
const add = require('../lib/add');

describe ('math', () => {
    it('adds two numbers', () => {
        assert.equal(add(5, 2), 7);
    });
});