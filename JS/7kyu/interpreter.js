// FRACTRAN is a Turing-complete esoteric programming language invented by John Conway.
// In Fractran, a program consists of a finite list of positive fractions. The input to a program is a positive integer 
// The program is run by updating the integer 
// n as follows:
// For the first fraction 
// f in the list for which 
// n⋅f is an integer, replace 
// n by 
// n⋅f
// Task:
// Your task is to write a function fractran(code, n) that runs the FRACTRAN program code with initial value n and returns the final n value after halting.
// code is a string, formatted like this: '455/33 11/13 1/11 3/7 11/2 1/3'
// n is an integer with n >= 1
// every program consists of at least one fraction
// if the program does not halt after 1000 cycles, return the n value after that many cycles

//Solution
function fractran(code, n) {
    const fractions = code.split(' ').map(fraction => {
        const [numerator, denominator] = fraction.split('/').map(BigInt);
        return [numerator, denominator];
    });
    for (let i = 0; i < 1000; i++) {
        let updated = false;
        for (const [numerator, denominator] of fractions) {
            const product = n * numerator;
            if (product % denominator === 0n) {
                n = product / denominator;
                updated = true;
                break;
            }
        }
        if (!updated) break;
    }
    return n;
}