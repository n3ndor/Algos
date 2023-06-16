// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
// with existing elements moved to other indices so that order of elements is reversed. 
// Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverse(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return console.log(arr);
}
reverse([0, 1, 2, 3, 4, 5])
reverse([3, 5, 7, 9, 11])

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
// 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotate(arr, shiftBy) {
    //

}

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range.
// Given arr and values min and max, retain only the array values between min and max.
// Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            result.push(arr[i]);
        }
    }

    return console.log(result);
}
filterRange([0, 1, 2, 3, 4, 5, 6, 7, 8], 2, 5);
filterRange([11, 21, 31, 41, 101, 202, 303], 21, 202);

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays.
// Return a new array containing the first array's elements, followed by the second array's elements.
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(a, b) {
    const add = [...a, ...b];
    return console.log(add);
}
concat(['a', 'b'], [1, 2])