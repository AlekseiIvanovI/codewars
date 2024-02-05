// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
// and their sum is 15. Every other number occurs twice.

//Solution
function repeats(arr) {
    const frequencyMap = {};
    
    for (let num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    
    let sumOfSingles = 0;
    
    for (let num in frequencyMap) {
      if (frequencyMap[num] === 1) {
        sumOfSingles += parseInt(num);
      }
    }
    
    return sumOfSingles;
  }