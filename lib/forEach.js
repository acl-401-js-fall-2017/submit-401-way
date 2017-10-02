const assert = require( 'assert' );

function forEach( array, callback ){
    for( let i = 0; i < array.length; i++) {
        const item = array [ i ];
        // call site below
        callback( item, i );
    }
}

describe( 'array methods', () => {
    it( 'forEach', () => {
        const array = [ 'a', 'b', 'c' ];
        const called = '';
        // defining a function "(letter, index...to });"
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal( called, 'a0b12c');
    });
});