

// write a function to print each  character in a string 

function charOfStr(str) {
    let char = ''
    for (let i = 0; i <= str.length - 1; i++){
        char+= str[i] + ' '
        
    }
    console.log(char);
    
}

charOfStr('JavaScript')