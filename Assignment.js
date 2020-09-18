// 1. Write a function that checks if an inputted value is a palindrome. The function should return true/false (bool). You can assume that all input will be a string type and lower case.

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("A man, a plan, a canal. Panama"));

//   https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

// 2. Write a function that checks if an inputted value is a numerical range "100-200". Inputted values can be an integer or a string in the previously stated format. The return should be a true/false (bool) value. Ranges should also allow floats (e.g. "100.00"). The range should also be listed as min/max order. Valid values: 100-200, 100.0-200.1. Invalid Values: 100, 200-100.