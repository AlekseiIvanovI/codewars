// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

///Solution
const catchSignChange = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) 
      (arr[i] < 0 && arr[i + 1] >= 0) ? count++ : 
      (arr[i] >= 0 && arr[i + 1] < 0) ? count++ : 
      null;
    return count;
  };