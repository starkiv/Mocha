function isAdult(age) {
    if ((age >= 0) && (age < 21)) {
        return false
    } else {
        if (age >= 21) return true
    }
}

function sortArrayUp(arr) {
    arr.sort ((a, b) => a - b)
    return arr
}

function isPalindrome(name){
    let str = '';
    for(let i = name.length - 1; i >= 0; i--){
        str += name[i];
    }
    if(str.toLowerCase() === name.toLowerCase()) return true
    else return false
}

module.exports = {isAdult, sortArrayUp, isPalindrome};