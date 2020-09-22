// 1. Write a function that checks if an inputted value is a palindrome. The function should return true/false (bool). You can assume that all input will be a string type and lower case.

//takes in string
testPalindrome = (string) => {
  //checks for lowercase
  string = string.toLocaleLowerCase();
  //Array.from creates a new copied Array instance and then .toString() converts the array to a String this result is then compared using the Strict Equality Comparison (===) to a new copied array instance that is reversed and then converted to a String. If these are indeed strictly equal (or not) a corresponding boolean is returned.
  return (
    Array.from(string).toString() === Array.from(string).reverse().toString()
  );
  //There are various ways in Javascript to check for palindromes that each have their performance tradeoffs depending on the circumstances and functional requirements of the function.
};
//test cases
console.log(testPalindrome("level")); //true
console.log(testPalindrome("stepstone")); //false

// 2. Write a function that checks if an inputted value is a numerical range "100-200". Inputted values can be an integer or a string in the previously stated format. The return should be a true/false (bool) value. Ranges should also allow floats (e.g. "100.00"). The range should also be listed as min/max order. Valid values: 100-200, 100.0-200.1. Invalid Values: 100, 200-100.

function checkRange(input) {
  //checks integer range values for min/max order
  if (input < 0) {
    return true;
  }
  //converts every input into a String
  let stringTest = input.toString();
  // Take their input and split it at the '-' (hyphen mark)
  // numbers variable will then look like this
  // numbers = ['value1', 'value2']
  let numbers = stringTest.split("-");
  //removes empty strings in array (caused by edge case of negative min to max range ex: "-100-300")
  let filterednumbers = numbers.filter((item) => item);
  // parseFloat parses argument and returns floating point number, then point numbers are compared using the < (less than) mathematical symbol
  // Because we are using the < in the return, this will only return a true or false based off the values.
  return parseFloat(filterednumbers[0]) < parseFloat(filterednumbers[1]);
}
//test cases
console.log(checkRange("100.0-200")); //true
console.log(checkRange(100 - 200)); //true
console.log(checkRange(-100 - 300)); //true
console.log(checkRange("-100-300")); //true
console.log(checkRange(100)); //false
console.log(checkRange(200.0 - 100)); //false
console.log(checkRange(200 - 100)); //false
console.log(checkRange("237-236.9")); //false

//3.What are traits and in what scenarios would you want to use them?
//PHP does not support Multiple Inheritance, so traits helps solve the Single Inheritance problem where you may want to pass multiple functions from different classes. Traits were introduced in PHP 5.4. Traits are similar to Classes but they are used for grouping methods in a specific and consistent way. A trait is not allowed to instantiate a trait on its own. Trait are declared with the trait keyword.

//PHP Single Trait example 1 : In the example below jokeStart is declared as a trait. Class JokeMachine is created. Class JokeMachine uses the jokeStart trait and will have access to all of the methods written into the trait. If other classes need to use the start() function they can use the jokeStart trait in those classes. This supports code being DRY (Do Not Repeat Yourself).

// <?php
// trait jokeStart {
// public function start() {
//   echo "Knock, Knock!";
// }
// }
// class JokeMachine {
//   use jokeStart;
// }

// $obj = new JokeStart();
// $obj->start();
// ?>

// BROWSER OUTPUT:
// Knock, Knock!

//PHP Multiple Trait Example 2: In this example two traits are declared (jokeStart, jokeResponse). Two classes were created (JokeMachine, JokeMachine2). The first class uses the jokeStart trait and the second class uses the jokStart and jokeResponse traits. Note: if you have functions of the same name written in Classes and traits, the order in which the same named function is called is as follows: 1) the same name function will run first it is called within the class 2) if the function with the same name is not in the class if will then be called within the trait 3) if the function with the same name is not in the class or trait then it will be called in the subtrait (a function located within a trait that is located within a trait (trait->trait->function))

// <?php
// trait jokeStart {
//   public function start() {
//     echo "Knock, Knock!";
//   }
// }

// trait jokeResponse {
//   public function end() {
//     echo "Who's there?";
//   }
// }

// class JokeMachine {
//   use jokeStart;
// }

// class JokeMachine2 {
//   use jokeStart, jokeResponse;
// }

// $obj = new JokeMachine();
// $obj->start();
// echo "<br>";

// $obj2 = new JokeMachine2();
// $obj2 ->start();
// $obj2 ->end();
// ?>

// BROWSER OUTPUT:
// Knock, Knock!
// Knock, Knock! Who's there?

//Written responses created by Rudy Becker (rudy.becker@gmail.com)
