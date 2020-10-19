// Implement a function to delete all duplicated 
// characters in a string and keep only the first occurrence 
// of each character. For example, if the input is string “google”, 
// the result after deletion is “gole”. Test your program with a sentence 
// as well such as "google all that you think can think of".

const removeDuplicates = function(str) {
    let noDuplicates = new HashMap();
    let newString = '';

    for (const char of str) {
        if (char === ' ') {
            newString += char;
        } else {
            let slot = noDuplicates._findSlot(char);

            if (!noDuplicates._hashTable[slot]) {
                noDuplicates.set(char);
                newString += char;
            }
        }
    }
    
    console.log(newString)
}

let str1 = 'google';
let str2 = 'google all that you think can think of';

removeDuplicates(str1);
