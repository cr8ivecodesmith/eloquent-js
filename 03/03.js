/**
 * Minimum
 *
 */

function min(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return NaN;
    }
    if (num1 < num2) {
        return num1;
    }
    else {
        return num2;
    }
}


/**
 * Recursion
 *
 */

function isEven(num) {
    if (typeof num !== 'number') {
        return NaN;
    }
    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else if (num < 0) {
        return false;
    }
    else {
        return isEven(num - 2);
    }
}


/**
 * Bean counting
 *
 */
function countBs(str) {
    var ctr = 0;
    for (var c=0; c < str.length; c++) {
        if (str.charAt(c) === 'B') {
            ctr += 1;
        }
    }
    return ctr;
}

function countChars(str1, str2) {
    var ctr = 0;
    for (var c=0; c < str1.length; c++) {
        if (str1.charAt(c) === str2) {
            ctr += 1;
        }
    }
    return ctr;
}


/**
 * Tests
 *
 */

// Minumum
console.log('Minumum');
console.log(((10 === min(12, 10))?'[pass]':'[fail]'), 'Expected', 10, 'Got', min(12, 10));
console.log(((isNaN(min(12)))?'[pass]':'[fail]'), 'Expected', NaN, 'Got', min(12));
console.log(((isNaN(min('a', 45)))?'[pass]':'[fail]'), 'Expected', NaN, 'Got', min('a', 45));
console.log(((10.56 === min(10.56, 45))?'[pass]':'[fail]'), 'Expected', 10.56, 'Got', min(10.56, 45));

// Recursion
console.log('Recursion');
console.log(((true === isEven(0))?'[pass]':'[fail]'), 'Expected', true, 'Got', isEven(0));
console.log(((false === isEven(1))?'[pass]':'[fail]'), 'Expected', false, 'Got', isEven(1));
console.log(((true === isEven(50))?'[pass]':'[fail]'), 'Expected', true, 'Got', isEven(50));
console.log(((false === isEven(-1))?'[pass]':'[fail]'), 'Expected', false, 'Got', isEven(-1));

// Bean counting
console.log('Bean counting: countBs');
var str = 'aBcdBf';
console.log(((2 === countBs(str))?'[pass]':'[fail]'), 'Expected', 2, 'Got', countBs(str));
str = 'asdfv';
console.log(((0 === countBs(str))?'[pass]':'[fail]'), 'Expected', 0, 'Got', countBs(str));
str = 'B';
console.log(((1 === countBs(str))?'[pass]':'[fail]'), 'Expected', 1, 'Got', countBs(str));

console.log('Bean counting: countChars');
var str1 = 'aaacdx',
    str2 = 'a';
console.log(((3 === countChars(str1, str2))?'[pass]':'[fail]'), 'Expected', 3, 'Got', countChars(str1, str2));
str1 = 'aaacdx';
str2 = 'c';
console.log(((1 === countChars(str1, str2))?'[pass]':'[fail]'), 'Expected', 1, 'Got', countChars(str1, str2));
str1 = 'aaacdx';
str2 = 'y';
console.log(((0 === countChars(str1, str2))?'[pass]':'[fail]'), 'Expected', 0, 'Got', countChars(str1, str2));
