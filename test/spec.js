const expect = require('chai').expect;
const fizzbuzz = require('../fizzbuzz');


describe('fizzbuzz', ()=>{
    it('exists', ()=>{
        expect(fizzbuzz).to.be.ok;
    });
    it('logs fizz if the num is divisible by 3', () =>{
        expect(fizzbuzz(3)).to.eql('fizz');
    });
    it('logs buzz if the num is divisible by 5', () =>{
        expect(fizzbuzz(5)).to.eql('buzz');
    });
    it ('logs fizzbuzz if the num is divisible by 3 and 5', () =>{
        expect(fizzbuzz(15)).to.eql('fizzbuzz');
    });
    it ('logs the num if its not divisible by either', () =>{
        expect(fizzbuzz(2)).to.eql(2);
    });
});

