const assert = require('assert');
const {isAdult, sortArrayUp, isPalindrome, OddNumber, EvenNumber} = require('../index');


describe('function isAdult', () => {
    it('should function isAdult works correct', () => {
        assert.equal(isAdult(6), false)
    })

    it('should function isAdult works correct', () => {
        assert.equal(isAdult(21), true)
    })

    it('should function isAdult works correct', () => {
        assert.equal(isAdult(20), false)
    })

    it('should function isAdult works correct', () => {
        assert.equal(isAdult(666), true)
    })

    it('should function isAdult works correct', () => {
        assert.equal(isAdult(-5), undefined)
    })
})

describe('function sortArrayUp', () => {
    it('should function sort array correct', () => {
        assert.deepEqual(sortArrayUp([2, 3, 4, 0, 1]), [0, 1, 2, 3, 4])
    })

    it('should function sort array correct', () => {
        assert.deepEqual(sortArrayUp([34, 54, 76, 2, 7, 78, 3]), [2, 3, 7, 34, 54, 76, 78])
    })

    it('should function sort array correct', () => {
        assert.deepEqual(sortArrayUp([233, 44, 76, 21, 90, 1, 23]), [1, 21, 23, 44, 76, 90, 233])
    })
})

describe('function isPalindrome', () => {
    it('should function works correct', () => {
        assert.equal(isPalindrome('oko'), true)
    })

    it('should function works correct', () => {
        assert.equal(isPalindrome('london'), false)
    })

    it('should function works correct', () => {
        assert.equal(isPalindrome('level'), true)
    })

    it('should function works correct', () => {
        assert.equal(isPalindrome('Anna'), true)
    })
})

describe('function OddNumber', () => {
    it('should function OddNumber return odd number', () => {
        assert.equal(OddNumber(9), true)
    })

    it('should function OddNumber return odd number', () => {
        assert.equal(OddNumber('9'), undefined)
    })

    it('should function OddNumber return odd number', () => {
        assert.equal(OddNumber(8), false)
    })

    it('should function OddNumber return odd number', () => {
        assert.equal(OddNumber(65), true)
    })

    it('should function OddNumber return odd number', () => {
        assert.equal(OddNumber(56), false)
    })
})

describe('function EvenNumber', () => {
    it('should function EvenNumber return even number', () => {
        assert.equal(EvenNumber(6), true)
    })

    it('should function EvenNumber return even number', () => {
        assert.equal(EvenNumber('seven'), undefined)
    })

    it('should function EvenNumber return even number', () => {
        assert.equal(EvenNumber(13), false)
    })

    it('should function EvenNumber return even number', () => {
        assert.equal(EvenNumber(894), true)
    })

    it('should function EvenNumber return even number', () => {
        assert.equal(EvenNumber(999), false)
    })
})

