function isAdult(age) {
    if ((age >= 0) && (age < 21)) {
        return false
    } else {
        if (age >= 21) return true
    }
    if (age < 0) return undefined
}

function sortArrayUp(arr = []) {
    arr.sort((a, b) => a - b)
    return arr
}

function isPalindrome(name) {
    if (typeof name !== 'string') return undefined
    let str = '';
    for (let i = name.length - 1; i >= 0; i--) {
        str += name[i];
    }
    if (str.toLowerCase() === name.toLowerCase()) return true
    else return false
}

function OddNumber(number) {
    if (typeof (number) !== 'number') {
        return undefined
    } else if (number % 2 === 1) return true
    else return false
}

function EvenNumber(number) {
    if (typeof (number) !== 'number') return undefined
    else if (number % 2 === 0) return true
    else return false
}

module.exports = {isAdult, sortArrayUp, isPalindrome, OddNumber, EvenNumber};