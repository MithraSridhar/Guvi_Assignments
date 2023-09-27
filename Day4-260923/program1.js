
//a. Print odd numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8];
(function (array) {
    let oddarray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddarray.push(array[i]);
        }
    }
    console.log("Print odd numbers in an array",oddarray);
})(array);

//b. Convert all the strings to title caps in a string array
let stringarray = ["mithra gopal", "sridhar s", "dheeshi sm"];
(function (stringarray) {
    for (let i = 0; i < stringarray.length; i++) {
        let str = stringarray[i].split(" ");
        for (let j = 0; j < str.length; j++) {
            str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
        }
        stringarray[i] = str.join(" ");

    }
    console.log("Convert all the strings to title caps in a string array",stringarray);
})(stringarray);

//c. Sum of all numbers in an array
let intarray = [2, 4, 5, 6, 7, 8];
(function (intarray) {
    let sum = 0;
    for (let i = 0; i < intarray.length; i++) {
        sum = sum + intarray[i];
    }
    console.log("Sum of all numbers in an array is ", sum)
})(intarray);

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
(function (primearray) {
    let isPrime = true;
    for (let i = 0; i < primearray.length; i++) {
        isPrimeCheck(primearray[i]);
    }
})(primearray);

//e. Return all the palindromes in an array

function isPalindrome(a) {
    return a == a.split("").reverse().join("");
}
let palindromeArray = ["cbc", "car", "ada", "racecar", "cool"];
(function (palindromeArray) {
    let palarray = [];
    for (let i = 0; i < palindromeArray.length; i++) {
        if (isPalindrome(palindromeArray[i])) {
            palarray.push(palindromeArray[i]);
        }
    }
    console.log("Return all the palindromes in an array",palarray)
})(palindromeArray);

//g. Remove duplicates from an array

let duplicateArray = [3, 4, 5, 5, 6, 2, 4, 3];
(function (duplicateArray) {
    let newarray = new Set(duplicateArray);
    console.log("Remove duplicates from an array",newarray);
})(duplicateArray);

//h. Rotate an array by k times
let rotatearray = [1, 2, 3, 4, 5];
let k = 2;
(function (rotatearray) {
    for (let i = 0; i < k; i++) {
        rotatearray.unshift(rotatearray.pop());
    }
    console.log("Rotate an array by k times",rotatearray);
})(rotatearray);