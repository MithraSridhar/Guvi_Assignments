//a. Print odd numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8];
const printOdd = (array) => {
    let oddarray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddarray.push(array[i]);
        }
    }
    console.log("Print odd numbers in an array", oddarray);
}
printOdd(array);

//b. Convert all the strings to title caps in a string array
let stringarray = ["mithra gopal", "sridhar s", "dheeshi sm"];
const stringCap = (stringarray) => {
    for (let i = 0; i < stringarray.length; i++) {
        let str = stringarray[i].split(" ");
        for (let j = 0; j < str.length; j++) {
            str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
        }
        stringarray[i] = str.join(" ");

    }
    console.log("Convert all the strings to title caps in a string array", stringarray);
}
stringCap(stringarray);

//c. Sum of all numbers in an array
let intarray = [2, 4, 5, 6, 7, 8];
const arraysum = (intarray) => {
    let sum = 0;
    for (let i = 0; i < intarray.length; i++) {
        sum = sum + intarray[i];
    }
    console.log("Sum of all numbers in an array is ", sum)
}
arraysum(intarray);

//d. Return all the prime numbers in an array

let primearray = [1, 12, 4, 5, 6, 7, 8, 23];

function isPrimeCheck(number) {
    let isPrime = true;
    if (number === 1) {
        console.log("Not a prime");
    }

    else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }

}
const primeCheck = (primearray) => {
    let isPrime = true;
    for (let i = 0; i < primearray.length; i++) {
        isPrimeCheck(primearray[i]);
    }
}
primeCheck(primearray);

//e. Return all the palindromes in an array

function isPalindrome(a) {
    return a == a.split("").reverse().join("");
}
let palindromeArray = ["cbc", "car", "ada", "racecar", "cool"];
const palindromeCheck = (palindromeArray) => {
    let palarray = [];
    for (let i = 0; i < palindromeArray.length; i++) {
        if (isPalindrome(palindromeArray[i])) {
            palarray.push(palindromeArray[i]);
        }
    }
    console.log("Return all the palindromes in an array", palarray)
}
palindromeCheck(palindromeArray);