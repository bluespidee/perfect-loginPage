// ************************ JS Basics - 1 ****************************
// ***1.comments
// Single line comment

/*
Multiline comment
*/

// ***2.Create an array consisting of fruits names and when we click on a button sort it in descending order. 


// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// function sortFruitsDescending() {
//   fruits.sort();
//   fruits.reverse();
// }
// document.getElementById('sort-button').addEventListener('click', function() {
//   sortFruitsDescending();
//   console.log(fruits)
// });

// ***3.for/in


// const numbers = [1, 2, 3, 4, 5]
// for (let i in numbers) {
//   console.log(`Index: ${i}, Value: ${numbers[i]}`)
// }

// ***4. Create an object "person" with properties firstname and lastname. Display these properties using 2 different ways of accessing. 

// const person = {
//     firstname: 'mohammed',
//     lastname: 'ali'
//   }
  
//   // dot 
//   console.log(` First name: ${person.firstname}`)
//   console.log(`Last name: ${person.lastname}`)
  
//   //bracket 
//   console.log(`First name: ${person['firstname']}`)
//   console.log(` Last name: ${person['lastname']}`)

// ***5.Write a program with variable hoisting(initialization first then declaration). 

// Initialization
// let x = 10;

// // Declaration
// console.log(x);  // Output: 10


// ***6.Use strict mode in your program and understand why variable not declared causes error. 


// "use strict";

// Uncaught ReferenceError ReferenceError: x is not defined
//     at <anonymous> (d:\coding\justcodingtopic\script.js:62:13)


// Variable not declared will cause an error
// console.log(x);  // Error: x is not defined

// Declare the variable before using it
// console.log(x);  

// ************************ JS Basics -2 ****************************

// ***1.Program using this keyword when we click on button, it should be disappear


// document.getElementById('btn').addEventListener('click', function() {
//     this.style.display = 'none';
// });

// ***2.Invoke a function using call() and apply(). Also Spot the difference between them.


// Invoke a function using call() and apply()

// Both call() and apply() are used to invoke a function with a different context (this value).

// The main difference between them is how they pass arguments to the function.

// The call() method calls a function with a given this value and arguments provided one by one.

// The apply() method calls a function with a given this value and arguments provided as an array.

// function greet(greeting) {
//     console.log(greeting +','+ this.name);
// }

// const person= {
//     name: 'mohammed',
          
// }
// // call()
// greet.call(person, 'Hello');  // Output: Hello, mohammed
// // apply()
// greet.apply(person, ['Hi']);  // Output: Hi,mohammed

// ***3. Write a program for COUNTER. Whenever we click on a "Count" button, value should increment.
 
// document.getElementById('countButton').addEventListener('click', function() {
//     const countButton = document.getElementById('countButton');
//     const count = parseInt(countButton.textContent.split(': ')[1]);
//     countButton.textContent = 'Count: ' + (count + 1);
// });

// ***4.Create a Counter with the help of getter and setter accessors.

// class Counter {
//     constructor() {
//         this._count = 0;
//     }

//     // Getter
//     get count() {
//         return this._count;
//     }

//     // Setter
//     set count(value) {
//         if (typeof value === 'number') {
//             this._count = value;
//         } else {
//             throw new Error('Value must be a number.');
//         }
//     }
// }

// const counter = new Counter();

// //initial count value
// console.log(counter.count);  // Output: 0

// // Increment the count value by 1
// counter.count = 1;

// //updated count value
// console.log(counter.count);  // Output: 1

// // Increment the count value by 2
// counter.count = 2;

// //updated count value
// console.log(counter.count);  // Output: 2


//***5.Add some more properties to an existing function using object prototypes. 

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Add some more properties to the Person function using object prototypes
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// };

// Person.prototype.setAge = function(age) {
//     if (typeof age === 'number' && age >= 0) {
//         this.age = age;
//     } else {
//         throw new Error('Age must be a non-negative number.');
//     }
// };

// Person.prototype.getAge = function() {
//     return this.age;
// };

// // Create an instance of the Person function
// const person1 = new Person('mphammed', 'ali');

// // full name of the person
// console.log(person1.getFullName());  // Output: John Doe

// // Set the age of the person
// person1.setAge(30);

// // age of the person
// console.log(person1.getAge());  // Output: 30