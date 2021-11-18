// Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(number) {
  return number + 1;
}

// - Write a Function Expression
let addOne = function (number) {
  return number + 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (number) => number + 1;

// - Write an Arrow Function with curly brackets
let addOne = (number) => {
  return number + 1;
}

// - Execute the function
addOne(18);

// - Execute the function and store the return value in a variable.
let retrnVal = addOne(999);

// - What is the typeof returnValue
// typeof retrnVal is a number

/* 2. Subtract one

Write a function named `subtractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(n) {
  return n - 1;
}

// - Write a Function Expression
let subtractOne = function (n) {
  return n - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (n) => n - 1;

// - Write an Arrow Function with curly brackets
let subtractOne = (n) {
  return n - 1;
}

// - Execute the function
subtractOne(3435);

// - Execute the function and store the return value in a variable.
let returnValues = subtractOne(235);

// - What is the typeof returnValue
// typeof returnValues is 'number'

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a, b) {
  return a + b;
}

// - Write a Function Expression
let sum = function(a, b) {
  return a + b;
}

// - Write an Arrow Function without curly brackets(if possible)
let sum = (a, b) => a + b;

// - Write an Arrow Function with curly brackets
let sum = (a, b) {
  return a + b;
}

// - Execute the function
sum(234, 297);

// - Execute the function and store the return value in a variable
let returnVariable = sum(356, 29876);

// - What is the typeof returnValue
// typeof returnVariable is 'number'

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(m) {
  return m * m;
}

// - Write a Function Expression
let square = function (m) {
  return m * m;
}

// - Write an Arrow Function without curly brackets(if possible)
let square = (m) => m * m;

// - Write an Arrow Function with curly brackets
let square = (m) => {
  return m * m;
}

// - Execute the function
square(44);

// - Execute the function and store the return value in a variable
let returnValue = square(20);

// - What is the typeof returnValue
// typeof returnValue is 'number'

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

- Write a Function Declaration
function isGreater(x, y) {
  if (x > y === true) {
    return true;
  } else {
    return false;
  }
}

// - Write a Function Expression
let isGreater = function(x, y) {
  if (x > y === true) {
    return true;
  } else {
    return false;
  }
}


- Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => (x > y) ? 'true' : 'false';

// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  if (x > y === true) {
    return true;
  } else {
    return false;
  }
}

// - Execute the function
isGreater(376, 234);

// - Execute the function and store the return value in a variable
let returnValue = isGreater(22345, 2345);

- What is the typeof returnValue
typeof returnValue is 'boolean'

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

- Write a Function Declaration
function oddOrEven (number) {
  if (number % 2 === 0) {
    return `Number is odd.`;
  } else {
    return `Number is even.`;
  }
}

// - Write an anonymous Function Expression
let oddOrEven = function (number) {
  if (number % 2 === 0) {
    return `Number is odd.`;
  } else {
    return `Number is even.`;
  }
}

// - Write an named Function Expression
let oddOrEven = function check (number) {
  if (number % 2 === 0) {
    return `Number is odd.`;
  } else {
    return `Number is even.`;
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) => (number % 2 === 0) ? 'Number is odd' : 'Number is even';

// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// - Execute the function
oddOrEven(67);

// - Execute the function and store the return value in a variable
let returnValue = oddOrEven(3456);

// - What is the typeof returnValue
// typeof returnValue is
