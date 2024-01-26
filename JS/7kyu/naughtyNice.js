// In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

// If there is an equal amount of bad and good actions, return 'naughty'

//Solution
function whatListAmIOn(actions) {
    let naughtyCount = 0;
    let niceCount = 0;

    for (let i = 0; i < actions.length; i++) {
        const firstLetter = actions[i][0].toLowerCase();

        if (['b', 'f', 'k'].includes(firstLetter)) {
            naughtyCount++;
        } else if (['g', 's', 'n'].includes(firstLetter)) {
            niceCount++;
        }
    }

    if (naughtyCount > niceCount) {
        return 'naughty';
    } else if (niceCount > naughtyCount) {
        return 'nice';
    } else {
        return 'naughty';
    }
}