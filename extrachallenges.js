// Challenge #1
const evenOdd = (number) => {
    if ((number % 2) === 0) {
        return 'even';
    } 
     return 'odd';
}

console.log('Challenge #1:');
console.log('The number 4 is',evenOdd(4));
console.log('The number 99 is',evenOdd(99));

// Challenge #2
const getOpposite = (number) => {
    if (number > 0) {
        return (number - (number * 2));}
    else {
        return (number - (number * 2));
    }
}

console.log('Challenge #2:');
console.log('The opposite of 5 is',getOpposite(5));
console.log('The opposite of -27 is',getOpposite(-27));
console.log('The opposite of 0 is',getOpposite(0));

// Challenge #3

//function to remove punctuation and spaces
const removePunct = (rawString) => {
    const punctuation = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const splitRawString = rawString.split("");
    const cleanSplitString = splitRawString.filter(letter => punctuation.indexOf(letter) === -1);
    const cleanString = (cleanSplitString.join("")).toLowerCase();
    return cleanString;
}

//function to check if string is a palindrome
const isPalindrome = (stringToCheck) => {
    //remove punctuation, spaces and capitalization
    const string = removePunct(stringToCheck);
    // split string into two halves
    const firstHalf = (string.slice(0, Math.ceil(string.length / 2)));
    const secondHalf = (string.slice(Math.floor(string.length / 2), string.length));
    // reverse second half
    const splitSecondHalf = secondHalf.split("");
    const reverseArray = splitSecondHalf.reverse();
    const reverseSecondHalf = reverseArray.join("");
    // check if it's a palindrome
    if (firstHalf === reverseSecondHalf) {
        return true;
    };
    return false;
}

console.log('Challenge #3:');
const test1 = "I'm not one";
const test2 = "Do Geese See God?";
const test3 = "123421";
const test4 = "1234321";
const test5 = "Doc, Note: I Dissent. A Fast Never Prevents A Fatness. I Diet On Cod.";

console.log(test1, "is a palindrome:",isPalindrome(test1));
console.log(test2, "is a palindrome:",isPalindrome(test2));
console.log(test3, "is a palindrome:",isPalindrome(test3));
console.log(test4, "is a palindrome:",isPalindrome(test4));
console.log(test5, "is a palindrome:",isPalindrome(test5));
