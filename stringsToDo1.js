// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
function removeBlanks(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return console.log(result);
}
removeBlanks(" Pl ayTha tF u nkyM usi c ")
removeBlanks("I can not BELIEVE it's not BUTTER")

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
// You are allowed to use isNaN() and Number().
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
function getDigits(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            result += str[i];
        }
    }
    return console.log(result);
}
getDigits("abc8c0d1ngd0j0!8")
getDigits("0s1a3y5w7h9a2t4?6!8?0")

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). 
// You are allowed to use .split() and .toUpperCase().
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronym(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            result += words[i][0].toUpperCase();
        }
    }
    return console.log(result);
}
acronym(" there's no free lunch - gotta pay yer way. ")
acronym("Live from New York, it's Saturday Night!")

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string.
// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11
function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return console.log(count);
}
countNonSpaces("Honey pie, you are driving me crazy")
countNonSpaces("Hello world !")


// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value,
// returns an array that only contains strings longer than or equal to the given value.
// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
function removeShorterStrings(arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= value) {
            result.push(arr[i]);
        }
    }
    return console.log(result);
}
removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)