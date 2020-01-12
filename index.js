function isAdult(age) {
  if ((age >= 0) && (age < 21)) {
    return false;
  } else {
    if (age >= 21) return true;
  }
  if (age < 0) return undefined;
}

function sortArrayUp(arr = []) {
  arr.sort((a, b) => a - b);
  return arr;
}

function isPalindrome(name) {
  if (typeof name !== 'string') return undefined;
  let str = '';
  for (let i = name.length - 1; i >= 0; i--) {
    str += name[i];
  }
  return str.toLowerCase() === name.toLowerCase();
}

/**
 * @return {boolean}
 */
function OddNumber(number) {
  if (typeof (number) !== 'number') {
    return undefined;
  } else return number % 2 === 1;
}


/**
 * @return {boolean}
 */
function EvenNumber(number) {
  if (typeof (number) !== 'number') return undefined;
  return number % 2 === 0;
}

function arithmetic(a, b, operator) {
  if (operator === 'add') return a + b;
  if (operator === 'subtract') return a - b;
  if (operator === 'multiply') return a * b;
  if (operator === 'divide') return a / b;
}

function numberReversal(n) {
  if ((typeof n !== 'number') || (n < 0)) return undefined;
  let s = n + '';
  let a = s.split('').sort((a, b) => b - a).join('');
  return +a;
}

function changeDotsToSpace(str) {
  if (typeof str !== 'string') return undefined;
  return str.replace(/[.]/g, ' ');
}

function withoutCoins(dollars) {
  return Math.trunc(dollars);
}

function isItem(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return true;
  }
  return false;
}

module.exports = {
  isAdult,
  sortArrayUp,
  isPalindrome,
  OddNumber,
  EvenNumber,
  arithmetic,
  numberReversal,
  changeDotsToSpace,
  withoutCoins,
  isItem
};