// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"


//Solution
var isAnagram = function(test, original) {
    test = test.replace(/\s/g, '').toLowerCase();
    original = original.replace(/\s/g, '').toLowerCase();
    
    return (test.length !== original.length) ? false : 
            test.split('').sort().join('') === original.split('').sort().join('');
  };