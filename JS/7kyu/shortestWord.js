// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

//Solution
function findShort(s) {
    const words = s.split(" ");
    let shortest = words[0].length;
    
    words.slice(1).forEach(word => {
        if (word.length < shortest) {
            shortest = word.length;
        }
    });
    return shortest;
}