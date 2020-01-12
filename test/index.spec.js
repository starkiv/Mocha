const {expect} = require('chai');

const {isAdult, sortArrayUp, isPalindrome, OddNumber, EvenNumber, arithmetic, numberReversal, changeDotsToSpace, withoutCoins, isItem} = require('../index');


describe('function isAdult', () => {
  it('should function isAdult works correct', () => {
    expect(isAdult(6)).false;
  });
  it('should function isAdult works correct', () => {
    expect(isAdult(21)).true;
  });

  it('should function isAdult works correct', () => {
    expect(isAdult(20)).false;
  });

  it('should function isAdult works correct', () => {
    expect(isAdult('6z66')).undefined;
  });

  it('should function isAdult works correct', () => {
    expect(isAdult(-5)).undefined;
  });
});

describe('function sortArrayUp', () => {
  it('should function sort array correct', () => {
    expect(sortArrayUp([2, 3, 4, 0, 1])).deep.eq([0, 1, 2, 3, 4]);
  });

  it('should function sort array correct', () => {
    expect(sortArrayUp([34, 54, 76, 2, 7, 78, 3])).deep.eq([2, 3, 7, 34, 54, 76, 78]);
  });

  it('should function sort array correct', () => {
    expect(sortArrayUp([233, 44, 76, 21, 90, 1, 23])).deep.eq([1, 21, 23, 44, 76, 90, 233]);
  });

  it('should function sort array correct', () => {
    expect(sortArrayUp([])).deep.eq([]);
  });

  it('should function sort array correct', () => {
    expect(sortArrayUp()).deep.eq([]);
  });
});

describe('function isPalindrome', () => {
  it('should function works correct', () => {
    expect(isPalindrome('oko')).true;
  });

  it('should function works correct', () => {
    expect(isPalindrome('london')).false;
  });

  it('should function works correct', () => {
    expect(isPalindrome('level')).true;
  });

  it('should function works correct', () => {
    expect(isPalindrome(12321)).undefined;
  });
});

describe('function OddNumber', () => {
  it('should function OddNumber return odd number', () => {
    expect(OddNumber(9)).true;
  });

  it('should function OddNumber return odd number', () => {
    expect(OddNumber('9')).undefined;
  });

  it('should function OddNumber return odd number', () => {
    expect(OddNumber(8)).false;
  });

  it('should function OddNumber return odd number', () => {
    expect(OddNumber(65)).true;
  });

  it('should function OddNumber return odd number', () => {
    expect(OddNumber(56)).false;
  });
});

describe('function EvenNumber', () => {
  it('should function EvenNumber return even number', () => {
    expect(EvenNumber(6)).true;
  });

  it('should function EvenNumber return even number', () => {
    expect(EvenNumber('seven')).undefined;
  });

  it('should function EvenNumber return even number', () => {
    expect(EvenNumber(13)).false;
  });

  it('should function EvenNumber return even number', () => {
    expect(EvenNumber(894)).true;
  });

  it('should function EvenNumber return even number', () => {
    expect(EvenNumber(999)).false;
  });
});

describe('function arithmetic', () => {
  it('should function arithmetic add values', () => {
    expect(arithmetic(7, 3, 'add')).eq(10);
  });

  it('should function arithmetic add values', () => {
    expect(arithmetic(5, 9, 'sub')).eq(undefined);
  });

  it('should function arithmetic add values', () => {
    expect(arithmetic(19, 4, 'subtract')).eq(15);
  });

  it('should function arithmetic add values', () => {
    expect(arithmetic(-2, 2, 'multiply')).eq(-4);
  });

  it('should function arithmetic add values', () => {
    expect(arithmetic(8, 0, 'divide')).eq(Infinity);
  });

  it('should function arithmetic add values', () => {
    expect(arithmetic(8, 2, 'divide')).eq(4);
  });
});

describe('function numberReversal', () => {
  it('should function sort and reversal numbers', () => {
    expect(numberReversal(432536)).eq(654332);
  });

  it('should function sort and reversal numbers', () => {
    expect(numberReversal('234675')).undefined;
  });

  it('should function sort and reversal numbers', () => {
    expect(numberReversal(-435693)).undefined;
  });

  it('should function arithmetic add values', () => {
    expect(numberReversal(NaN)).NaN;
  });

  it('should function arithmetic add values', () => {
    expect(numberReversal(53241)).eq(54321);
  });
});

describe('function changeDotsOnSpace', () => {
  it('should function changes dots to space', () => {
    expect(changeDotsToSpace('I.go.to.gym')).eq('I go to gym');
  });

  it('should function work without space', () => {
    expect(changeDotsToSpace('conversation')).eq('conversation');
  });

  it('should function changes dots to space', () => {
    expect(changeDotsToSpace(435693)).undefined;
  });

  it('should function changes dots to space', () => {
    expect(changeDotsToSpace('djgj?">{}...udsf@£$/.238.9]')).eq('djgj?">{}   udsf@£$/ 238 9]');
  });
});

describe('function withoutCoins', () => {
  it('should function return integer number', () => {
    expect(withoutCoins(32.45)).eq(32);
  });

  it('should function return correct answer if we put string with numbers', () => {
    expect(withoutCoins('5.50')).eq(5);
  });
  it('should function return correct answer if we put string without numbers', () => {
    expect(withoutCoins('fdheef')).NaN;
  });
  it('should function return integer number with argument mark', () => {
    expect(withoutCoins(-56.65)).eq(-56);
  });
  it('should function return integer number', () => {
    expect(withoutCoins('10.3' / 2)).eq(5);
  });
});

describe('function isItem', () => {
  it('should function if the item belongs to the list', () => {
    expect(isItem([3, 4, 5, 8, 3, 5], 8)).true;
  });

  it('should function if the item belongs to the list', () => {
    expect(isItem(['one', 'two', 'six', 'nine'], 'ten')).false;
  });

  it('should function if the item belongs to the list', () => {
    expect(isItem([],)).false;
  });

  it('should function if the item belongs to the list', () => {
    expect(isItem([1], 1)).true;
  });
});
