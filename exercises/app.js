// ================================================================================== //
// CONSOLE LOG EXERCISE August 16 2019
// ================================================================================== //
//
// console.log("Hello World");
// console.log(123);
// console.log(true);

// var greeting = "Hello";
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error("ERROR ERROR");
// console.clear();
// console.warn("This is a warning");

// console.time('Hello');
//   console.log('Hello World')
//   console.log('Hello World')
//   console.log('Hello World')
//   console.log('Hello World')
// console.timeEnd("Hello");

// ================================================================================== //

// VAR, LET CONST EXERCISE August 16 2019

// ================================================================================== //

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// ================================================================================== //

// INITIALIZER VAR EXERCISE August 16 2019

// ================================================================================== //
// var greeting; // initialzer var
// console.log(greeting); // undefined
// greeting = 'Hello';
// console.log(greeting);

// ================================================================================== //

// LETTERS, NUMBERS, _, $ August 16 2019
  // Cannot start with numbers

// ================================================================================== //

// var 1name = 'John'; DO NOT DO THIS 
// var _name = 'John' DO NOT DO THIS

// ================================================================================== //

// MULTI-WORD VARS EXERCISE August 16 2019

// ================================================================================== //

// var firstName = 'John'; // Camcel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// ================================================================================== //

// LET EXERCISE August 16 2019

// ================================================================================== //

// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// ================================================================================== //

// CONST EXERCISE August 16 2019

// ================================================================================== //

// const name = "John";
// console.log(name);
// Can not reassign
// name = 'Sara';
// Const has to have a value assigned to it
// const greeting;

const person = {
  name: 'John',
  age: 30
}

console.log(person);

person.name = 'Sara'; // You can reassigned the value of name and age, but not const person.
person.age = '25';

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);