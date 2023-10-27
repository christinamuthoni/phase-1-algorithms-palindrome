function isPalindrome(str) {
  // Write your algorithm here
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Compare the original string with its reverse
  return str === str.split('').reverse().join('');
}

/* 
  Add your pseudocode here
function isPalindrome(str):
    // Remove non-alphanumeric characters and convert to lowercase
    sanitizedStr = removeNonAlphanumericAndLowercase(str)
    
    // Compare the original string with its reverse
    return sanitizedStr equals reverse(sanitizedStr)

function removeNonAlphanumericAndLowercase(str):
    // Initialize an empty result string
    result = ""
    
    // Iterate through each character in str
    for character in str:
        // If character is alphanumeric
        if isAlphanumeric(character):
            // Add the lowercase version to result
            result += lowercase(character)
    
    return result

function isAlphanumeric(char):
    // Check if char is a letter or a digit
    return isLetter(char) OR isDigit(char)

function isLetter(char):
    // Check if char is a letter (A-Z or a-z)
    return char matches /[A-Za-z]/

function isDigit(char):
    // Check if char is a digit (0-9)
    return char matches /[0-9]

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(str) {
  const sanitizedStr = removeNonAlphanumericAndLowercase(str);
  return sanitizedStr === sanitizedStr.split('').reverse().join('');
}

function removeNonAlphanumericAndLowercase(str) {
  let result = '';
  for (const char of str) {
      if (isAlphanumeric(char)) {
          result += char.toLowerCase();
      }
  }
  return result;
}

function isAlphanumeric(char) {
  return isLetter(char) || isDigit(char);
}

function isLetter(char) {
  return char.match(/[A-Za-z]/);
}

function isDigit(char) {
  return char.match(/[0-9]/);
}

// Test cases
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true