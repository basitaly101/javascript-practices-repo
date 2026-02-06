// varaibles are used to store data in a program. They can be used to store numbers, strings, and other types of data.

// In JavaScript, we can declare a variable using the var, let, or const keyword. The var keyword is used to declare 
// a variable that can be reassigned, while the let and const keywords are used to declare variables that cannot be reassigned.
// VAR
// Here is an example of how to declare a variable using the var keyword:
// console.log(fruit); answer is undefined because the variable fruit is hoisted but not assigned a value yet.
// var fruit = "apple";
// In this example, we have declared a variable called fruit and assigned it the value "apple". We can then use this variable 
// in our program to refer to the value "apple".
// console.log(fruit); answer is apple because the variable fruit is now assigned a value.

// We can also declare a variable using the let keyword:
// console.log(fruit); 
// fruit = "banana";
// In this example, we have declared a variable called fruit and assigned it the value "banana". We can then use this variable 
// in our program to refer to the value "banana".
// console.log(fruit); answer is banana because the variable fruit is now assigned a new value.
//  finnaly we can declare a variable using the let keyword:
// console.log(fruit); error because the variable fruit is not declared yet.
// LET  
// let fruit = "orange";
// In this example, we have declared a variable called fruit and assigned it the value "orange". We can then use this variable 
// in our program to refer to the value "orange".
// console.log(fruit); answer is orange because the variable fruit is now assigned a value.
// answer is orange because the variable fruit is now assigned a new value.
// console.log(fruit); answer is orange because the variable fruit is now assigned a new value.
// fruit = "grape"; commenting this line will cause the variable fruit to be reassigned a new value, which is "grape". We can then use this variable
// console.log(fruit); answer is grape because the variable fruit is now assigned a new value.

// CONST
// console.log(fruit); error because the variable fruit is not declared yet.
// const fruit = "melon";  
// In this example, we have declared a variable called fruit and assigned it the value "melon". We can then use this variable
// in our program to refer to the value "melon".
// console.log(fruit); answer is melon because the variable fruit is now assigned a value.
// console.log(fruit); answer is melon because the variable fruit is now assigned a value.
// fruit = "watermelon"; // error because the variable fruit is declared using the const keyword, which means it cannot be reassigned a new value. We can only use the variable fruit to refer to the value "melon" in our program.
// console.log(fruit); error because the variable fruit is declared using the const keyword, which means it cannot be reassigned a new value. We can only use the variable fruit to refer to the value "melon" in our program.


// testing in  function scope
// function testScope() {
//     console.log(fruit);
//     var fruit = "kiwi";
//     console.log(fruit);
// // } 
// testScope(); answer is undefined because the variable fruit is hoisted but not assigned a value yet.
    // console.log(fruit);

// answer is kiwi because the variable fruit is now assigned a value.

// testing in block scope
// if (true) {
//     console.log(fruit);
//     let fruit = "papaya";
//     console.log(fruit);
// }
// answer is error because the variable fruit is not declared yet.
// answer is papaya because the variable fruit is now assigned a value.
// console.log(fruit);

// Summary:
// In this lesson, we learned about variables in JavaScript and how to declare them using the var, let, and const keywords. 
// We also learned about variable scope and how variables declared with var are function-scoped, while variables declared 
// with let and const are block-scoped.
