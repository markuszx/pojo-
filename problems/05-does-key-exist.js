/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/


function doesKeyExist(obj, key) {
  // Your code here
  for(let k in obj)
  if(k !== key){
      return false
  }
  else{return true}

}
let abc = {count:123}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
