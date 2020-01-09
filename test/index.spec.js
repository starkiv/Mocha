const assert = require('assert');
const {expect} = require('chai');

const {isAdult, sortArrayUp, isPalindrome, OddNumber, EvenNumber} = require('../index');


describe('function isAdult', () => {
    it('should function isAdult works correct', () => {
        expect(isAdult(6)).false;
    })
    it('should function isAdult works correct', () => {
        expect(isAdult(21)).true;
    })

    it('should function isAdult works correct', () => {
        expect(isAdult(20)).false;
    })

    it('should function isAdult works correct', () => {
        expect(isAdult('6z66')).undefined;
    })

    it('should function isAdult works correct', () => {
        expect(isAdult(-5)).undefined;
    })
})

describe('function sortArrayUp', () => {
    it('should function sort array correct', () => {
        expect(sortArrayUp([2, 3, 4, 0, 1])).deep.eq([0, 1, 2, 3, 4]);
    })

    it('should function sort array correct', () => {
        expect(sortArrayUp([34, 54, 76, 2, 7, 78, 3])).deep.eq([2, 3, 7, 34, 54, 76, 78]);
    })

    it('should function sort array correct', () => {
        expect(sortArrayUp([233, 44, 76, 21, 90, 1, 23])).deep.eq([1, 21, 23, 44, 76, 90, 233]);
    })

    it('should function sort array correct', () => {
        expect(sortArrayUp([])).deep.eq([]);
    })

    it('should function sort array correct', () => {
        expect(sortArrayUp()).deep.eq([]);
    })
})

describe('function isPalindrome', () => {
    it('should function works correct', () => {
        expect(isPalindrome('oko')).true;
    })

    it('should function works correct', () => {
        expect(isPalindrome('london')).false;
    })

    it('should function works correct', () => {
        expect(isPalindrome('level')).true;
    })

    it('should function works correct', () => {
        expect(isPalindrome(12321)).undefined;
    })
})

describe('function OddNumber', () => {
    it('should function OddNumber return odd number', () => {
        expect(OddNumber(9)).true;
    })

    it('should function OddNumber return odd number', () => {
        expect(OddNumber('9')).undefined;
    })

    it('should function OddNumber return odd number', () => {
        expect(OddNumber(8)).false;
    })

    it('should function OddNumber return odd number', () => {
        expect(OddNumber(65)).true;
    })

    it('should function OddNumber return odd number', () => {
        expect(OddNumber(56)).false;
    })
})

describe('function EvenNumber', () => {
    it('should function EvenNumber return even number', () => {
        expect(EvenNumber(6)).true;
    })

    it('should function EvenNumber return even number', () => {
        expect(EvenNumber('seven')).undefined;
    })

    it('should function EvenNumber return even number', () => {
        expect(EvenNumber(13)).false;
    })

    it('should function EvenNumber return even number', () => {
        expect(EvenNumber(894)).true;
    })

    it('should function EvenNumber return even number', () => {
        expect(EvenNumber(999)).false;
    })
})

