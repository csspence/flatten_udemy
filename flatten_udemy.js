/*
JavaScript Algorithms and Data Structures Masterclass

flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

function flatten(array){
  let newArr = [];
  if(array[array.length - 1].length === 1) {
    newArr.push(array[array.length - 1]);
    if((array.length - 1) > 1) {
      newArr.push(flatten(array.slice(0, array.length - 1)));
    }
  } else {
    newArr.push(array[array.length - 1]);
  }
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]