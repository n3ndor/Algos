// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one,
//from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
function Countdown(number) {
    newArray = []
    for (let i = number; i > -1; i--) {
        newArray.push(i)
    }
    console.log(newArray);
    console.log(newArray.length)
}
Countdown(5);

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function printReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}
printReturn([7, 3])

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length.
//What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
function firstPlusLength(arr) {
    return console.log(arr[0] + arr.length);
}
firstPlusLength([5, 4, 9, 1])
firstPlusLength(["what", 2, 5]) // "+" will concatenate the string with number


// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
let greaterThanSecond = [1, 3, 5, 7, 9, 13];
let values = [];
for (let i = 0; i < greaterThanSecond.length; i++) {
    if (greaterThanSecond[i] < greaterThanSecond[i + 1]) {
        values.push(greaterThanSecond[i + 1]);
    }
}
console.log(values);
console.log(values.length);


// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values
//that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
function greaterThanSecondGeneralized(arr) {
    let values = [];
    if (arr.length < 2) { console.log("Please insert more than one value"); }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                values.push(arr[i + 1]);
            }
        } return console.log(values);
    }
}
greaterThanSecondGeneralized([3, 7, 2, 8, 5, 9])
greaterThanSecondGeneralized([5]) //without the if statement returns an empty array

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
function lengthValue(num1, num2) {
    if (num1 === num2) {
        console.log("Jinx!");
    }

}
lengthValue(3, 3)


// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length,
//print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}
fitTheFirstValue([9, 1, 2, 3]);
fitTheFirstValue([4, 1, 2, 3]);
fitTheFirstValue([1, 1, 2, 3]);

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
//that accepts a number of degrees in Fahrenheit and returns the equivalent temperature
//as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
function fahrenheitToCelsius(fDegree) {
    return console.log(((fDegree - 32) * 5) / 9);
}
fahrenheitToCelsius(95) //35
fahrenheitToCelsius(72) //22.22

// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius,
//and returns the equivalent temperature expressed in Fahrenheit degrees.
function celsiusToFahrenheit(cDegrees) {
    return console.log((cDegrees * 9 / 5) + 32);
}
celsiusToFahrenheit(22); //71.6
celsiusToFahrenheit(1); //33.8
celsiusToFahrenheit(100); //212

// (Optional): Do Fahrenheit and Celsius values equate at a certain number?
//The scientific calculation can be complex, so for this challenge just try a series of Celsius
//integer values starting at 200, going downward (descending), checking whether it is equal
//to the corresponding Fahrenheit value.
function findEquivalentTemperature() {
    for (var cTemp = 200; cTemp >= -273; cTemp--) {
        var fTemp = (cTemp * (9 / 5)) + 32;
        if (cTemp === fTemp) {
            return console.log(cTemp);
        }
    }
}

findEquivalentTemperature();