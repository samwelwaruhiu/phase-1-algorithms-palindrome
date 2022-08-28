function isPalindrome(word) {
        let regularexpression = /[\W_]/g
        let lowerstring = word.toLowerCase().replace(regularexpression, ``);
        let reverandsplit = lowerstring.split(``).reverse().join(``);
        return lowerstring === reverandsplit;


  
}
 // Write your algorithm here
//Return true if the given string is a palindrome. Otherwise, return false.
//A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//We will need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes using /[\W_]/g.

/* 
  Add your pseudocode here

  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  // Step 2. Use built-in functions of reverse, join and split to achieve our objective
   // Step 3. Check if lowerstring is equals to reverandsplit and return a Boolean
*/

/*
  Add written explanation of your solution here
The toLowerCase() method to return the calling string value converted to lowercase.
The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.
The split() method splits a String object into an array of strings by separating the string into sub strings.
The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
The join() method joins all elements of an array into a string.
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
