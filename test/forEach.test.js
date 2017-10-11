const assert = require('assert');

function forEach(array,callback) {
  for(let i = 0; i < array.length; i++) {
    const item = array[i];
    callback(item, i);
  }
}

describe('array methods', () => {
  it('forEach', () => {
    const array = ['a', 'b', 'c'];
    let called = '';
    forEach(array, (letter, index) => {
      called += letter + index;
    });
    assert.equal(called, 'a0b1c2');
  });
});