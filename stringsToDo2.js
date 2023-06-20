// Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed.
// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!
function reverseString(str) {
    let string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return console.log(string)
}
reverseString("creature") //erutaerc
reverseString("longwordnospacesbetween") //neewtebsecapsondrowgnol

// Remove Even-Length Strings
// Build a standalone function to remove strings of even lengths from a given array.
// For array containing
// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."],
// change that same array to ["Nope!","Its","Chris","."].
function removeEvenLengthStrings(arr) {
    return console.log(arr.filter(str => str.length % 2 !== 0))
}
removeEvenLengthStrings(["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."])

// Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing
// that value in Roman numeral representation. In this representation,
// I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000.
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV. !!!!!!!!!!! IL is not valid!
let romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
function intToRoman(num) {
    let result = '';
    while (num > 0) {
        if (num >= 1000) {
            result += 'M';
            num -= 1000;
        } else if (num >= 900) {
            result += 'CM';
            num -= 900;
        } else if (num >= 500) {
            result += 'D';
            num -= 500;
        } else if (num >= 400) {
            result += 'CD';
            num -= 400;
        } else if (num >= 100) {
            result += 'C';
            num -= 100;
        } else if (num >= 90) {
            result += 'XC';
            num -= 90;
        } else if (num >= 50) {
            result += 'L';
            num -= 50;
        } else if (num >= 40) {
            result += 'XL';
            num -= 40;
        } else if (num >= 10) {
            result += 'X';
            num -= 10;
        } else if (num >= 9) {
            result += 'IX';
            num -= 9;
        } else if (num >= 5) {
            result += 'V';
            num -= 5;
        } else if (num >= 4) {
            result += 'IV';
            num -= 4;
        } else {
            result += 'I';
            num -= 1;
        }
    }
    return console.log(result)
}

intToRoman(4) // IV
intToRoman(349) // CCCXLIX
intToRoman(444) // CDXLIV

// Roman Numerals to Integer
// Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”.
// Comprising 30 bronze gears, its wooden frame features 2000 characters.
// Given a string containing a Roman numeral representation of a positive integer,
// return the integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.
function romanToInteger(s) {
    let accumulator = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                if (s[i + 1] === 'V') {
                    accumulator += 4;
                    i++;
                } else if (s[i + 1] === 'X') {
                    accumulator += 9;
                    i++;
                } else {
                    accumulator += romanHash[s[i]];
                }
                break;
            case 'X':
                if (s[i + 1] === 'L') {
                    accumulator += 40;
                    i++;
                } else if (s[i + 1] === 'C') {
                    accumulator += 90;
                    i++;
                } else {
                    accumulator += romanHash[s[i]];
                }
                break;
            case 'C':
                if (s[i + 1] === 'D') {
                    accumulator += 400;
                    i++;
                } else if (s[i + 1] === 'M') {
                    accumulator += 900;
                    i++;
                } else {
                    accumulator += romanHash[s[i]];
                }
                break;
            default:
                accumulator += romanHash[s[i]];
                break;
        }
    }
    return accumulator;
}
console.log(romanToInteger("III"));  // 3
console.log(romanToInteger("DCIX"));  // 609
console.log(romanToInteger("MCDXCII"));  // 1492
