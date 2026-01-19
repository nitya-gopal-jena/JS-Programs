

// Write a function to print a string in reverse


function reverseStr(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i] + ' '
    }
    console.log(rev);

}

reverseStr('JavaScript');