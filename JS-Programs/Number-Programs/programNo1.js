

// Create a function to checks given number is prime or not  


const prompt = require('prompt-sync')();

const num = +prompt('Enter a No: ');
function isPrime(num) {
    if (num == 1 || num <= 0) {
        console.log(`${num} is neither prime nor composite no`);
    }

    for (let i = 2; i <= Math.trunc(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(num));
