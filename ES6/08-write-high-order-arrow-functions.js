// PERSONAL SOLUTION

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";

  const arrayPosInt = arr.filter(numArr => numArr > 0 && Number.isInteger(numArr))
  const squaredIntegers = arrayPosInt.map(number => number * number)
  
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



// OFFICIAL SOLUTION

// const squareList = (arr) => {
//     "use strict";
//     const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
//     return squaredIntegers;
// };

// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);