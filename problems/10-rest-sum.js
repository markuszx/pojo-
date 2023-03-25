/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/
function restSum(...otherNums) {
  let sum = 0;

   for (let i = 0; i < otherNums.length; i++) {
       let num = otherNums[i];
       sum += num;
   }

   return sum;
}

console.log(restSum(1,4,5,7,9,0,8,9,9,6,7,76,9))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
