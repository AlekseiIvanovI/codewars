// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

//Solution
function capitalize(s){
    let evenIndexed = '';
      let oddIndexed = '';
      
      for (let i = 0; i < s.length; i++) {
          if (i % 2 === 0) {
              evenIndexed += s[i].toUpperCase();
              oddIndexed += s[i];
          } else {
              evenIndexed += s[i];
              oddIndexed += s[i].toUpperCase();
          }
      }
      
      return [evenIndexed, oddIndexed];
};