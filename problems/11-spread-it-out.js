/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array.



Examples:
spreadItOut([3,5,6], [1,2,3]); // => [3,5,6,1,2,3];
spreadItOut([], [1,2,3]); // => [1,2,3];
spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];
***********************************************************************/

function spreadItOut(array1, array2) {
  // Your code here
 let array3 = [...array1, ...array2]
 return array3
}

console.log(spreadItOut(['tree',3,"apples"],[4,9,6]))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;
