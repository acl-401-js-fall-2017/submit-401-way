const expect = require('chai').expect;
let math = require('./math');


describe('math', function() {
    describe('add', function() {
        it('should return sum of two arguments', function() {
            expect(math.add(5,10)).to.equal(15);
            expect(math.add(325,-325)).to.equal(0);
        });
    });

    describe('subtract', function() {
        it('should return a result of subraction of two arguments', function() {
            expect(math.subtract(5,10)).to.equal(-5);
        });
    });

    describe('multiply', function() {
        it('should return a result of multiplication of two arguments one of which is a 0', function() {
            expect(math.multiply(1,0)).to.equal(0);
        });
        it('should return a result of multiplication of two arguments one of which is a neggative', function() {
            expect(math.multiply(5,-20)).to.equal(-100);
        });
    });

    describe('divide', function() {
        it('should return a result of division', function() {
            expect(math.divide(15,5)).to.equal(3);
            expect(function () {math.divide(15,0);}).to.throw();
        });  
    });
});