
const prompt = require('prompt-sync')();

const num = Number(prompt('Enter a No: '));
function Factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact = fact*i
    }

    console.log(fact);
}
Factorial(num);