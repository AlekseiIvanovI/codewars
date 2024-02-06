// Task
// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
// So max_rot (or maxRot or ... depending on the language) is such as:
// max_rot(56789) should return 68957
// max_rot(38458215) should return 85821534

//Solution
function maxRot(n) {
    let str = n.toString();
    let maxRotation = n;
    
    for (let i = 0; i < str.length - 1; i++) {
        str = str.slice(0, i) + str.slice(i + 1) + str[i];
        maxRotation = Math.max(maxRotation, parseInt(str, 10));
    }
    return maxRotation;
}