//accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: 
// [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 
// donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.
// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

//Solution
function newAvg(arr, newavg) {
    if (arr.length === 0) return newavg;

    const actualAvg = arr.reduce((a, c) => a + c, 0) / arr.length;
    const amtToAdd = Math.ceil(arr.length * (newavg - actualAvg) + newavg);

    if (amtToAdd > 0) {
        return amtToAdd;
    } else {
        throw new Error('Expected New Average is too low');
    }
}