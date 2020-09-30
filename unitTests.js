const {reverseString} = require('./PS1.P1');
const {getFunc} = require('./PS1.P2');
const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('reverse test', () => {
    it('should return reverse', () => {
        let reverse = reverseString('supercalifragilisticexpialidocious');
        expect(reverse).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
    })
})
describe('op test', () => {
    it('should eval expression', () => {
        let val1 = getFunc('4+2')();
        expect(val1).to.be.equal(6)
        let val2 = getFunc('5*7')();
        expect(val2).to.be.equal(35)
        let val3 = getFunc('6-1')();
        expect(val3).to.be.equal(5)
        let val4 = getFunc('9/2')();
        expect(val4).to.be.equal(4.5)
        let val5 = getFunc('2^8')();
        expect(val5).to.be.equal(256)
    })
})
// let foo = reverseString(‘supercalifragilisticexpialidocious’)
// console.log('foo = ${foo}');
// const {describe, it} = require('mocha');
// const {expect} = require('chai');
//
// describe('test', () => {
//     console.log('printing');
// })
//
// describe('High level', () => {
//     it('bbbb', () => {
//         let reverse = reverseString('‘supercalifragilisticexpialidocious’');
//         expect(reverse).to.be.equal('suoicodilaipxecitsiligarfilacrepus')
//     })
// })