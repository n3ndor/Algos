// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
let myNumber = 42;
let myName = "ChatGPT";
[myNumber, myName] = [myName, myNumber];

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
for (let i = -52; i <= 1066; i++) {
    console.log(i);
}

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function noWorry() {
    console.log("good morning!");
}
for (let i = 0; i < 98; i++) {
    noWorry();
}

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (let i = -300; i <= 0; i += 3) {
    if (i != -3 && i != -6) {
        console.log(i);
    }
}

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
let i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", 
//else log "Just another day...." 


// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, 
//it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
function leapYear(year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
leapYear(2020);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
let count = 0;
for (let i = 512; i <= 4096; i++) {
    if (i % 5 == 0) {
        console.log(i);
        count++;
    }
}
console.log(`Total: ${count}`);

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
let j = 6;
while (j <= 60000) {
    console.log(j);
    j += 6;
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 5 == 0) output += "Coding";
    if (i % 10 == 0) output += " Dojo";
    console.log(output || i);
}

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
function whatDoYouKnow(incoming) {
    console.log(incoming);
}
whatDoYouKnow("Hello");

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
let sum = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}
console.log(sum); // If we add the negative and positive pair numbers together we always get 0. 0+0+0+...+0 = 0

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
let k = 2016;
while (k > 0) {
    console.log(k);
    k -= 4;
}

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult 
//from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
function flexibleCountdown(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult == 0) {
            console.log(i);
        }
    }
}
flexibleCountdown(2, 9, 3);

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful,
// but the problem is essentially identical; don’t be thrown off! Given 4 parameters
// (param1,param2,param3,param4), print the multiples of param1, starting at param2
// and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it.
// Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3
//     between 5 and 17, and excluding the value 9).
function finalCountdown(param1, param2, param3, param4) {
    let i = param2;
    while (i <= param3) {
        if (i % param1 == 0 && i != param4) {
            console.log(i);
        }
        i++;
    }
}
finalCountdown(3, 5, 17, 9);