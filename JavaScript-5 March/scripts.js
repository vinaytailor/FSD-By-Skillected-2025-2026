// ! -- Day 1 --

// html -> structure banana
// css -> styling 
// JavaScripts -> Logic or Functibality

// What is javascript?
// javascript is a high-level, interpreterd scripting language used to cerate dynamic and interactive web applications

//  Why id javacript called a scripting language?
// script = small program that run inside another progranm 
// Browser ke andar run hota hai
// html ke sath embad hoti hai

// programming language and scripting language 
// compole hoti             usually interpreted
// standalone run           kisi environment run

// Morden JavaScript is a full programming language
// sirf scripting tak limited nahi he
// server pe bhi chalti he 

// Where JavaScript run today?
// Server and browser

// How javascript work 
/* memory heap       -> data store 
   call dtack        ->  code execute hota hai
   JavaScript Engine -> resp 
   web api           ->
   event loop        ->                  */ 


//! -- day 2 --  ----------- Feature of JavaScript ----------   


// 1. Interpreter Language
// typed define karne ki jarurt nahi
// no seprete compilation 
console.log("Skillected");

// 2. Dnyamically typed
// user action react karta hai
// int= x;

let x=10;
console.log(x)
x="hello";
console.log(x)

// 3. Event- Driver
// user action react karta hai
// click, hover, submit, keypress

// 4. Object-Orianted
// object use karta hai

let person = {
    name: "Vinay"
};

// 5. Prototype base
// JavaScripts classes nahi thi originally
// Prototype system use karta hai

// 6. Single-Threaded
// ek time pe ek hi task execute hota hai
// but:
// Asynchronous behvious support karta hai

console.log("Skillected");

// case sensitive 
// name != Name

// Keywords -> let, const, var, if, else, function
// cannot use as variable name

// 1995 -> created by Brendan Eich
// only 10 days
// ES6 (2015) -> biggest update



//! -- day 3 --  ----------- Variable ----------  

// a variable is a container that stores data 

// variable -> box (box of mobile)
// data -> item inside the box (mobile)
console.log("variables in js: ")

let box = "mobile";

console.log(box);


// javascripts is a case sensitive
// box != Box

// Memory work in js
// stack (primitive)
// heap (objects)


// var let and const

// var -> old way (before ES6 )

// Function Scoped
// can redclare
// hoisted
// causes bugs

var x1 = 10;
var x1 = 39;
console.log(x1);

// let (Introduction in ES6)

// block of scope
// cannot redclare
// can reasign


let x2 = 10;
x2 = 20;
console.log(x2)


// const

// block scope
// cannot redclare
// cannot reasign
const x3 = 20;


const obj ={
    name:"Skillected"
}
obj.name = "skillected"
console.log(obj)
/* whenever we use const keyword at this time
   refrence cannot change but object content can change */

// Glonbal scope 
let x4 = 29;
// accessible everyone 

// function scope
// only inside function

function test(){
    var x5 = 10;
}

// block scope 
// only inside block
/*
if (true){
    let y=20;
}
console.log(y)*/


//! -- day 4 --  ----------- hoisthing ----------  
 
// variable and function are moves to top of scope befor executions

// var x9;
console.log(x9);
var x9 =90;

// internally asumes -> var x; declared

// console.log(x10)
// let x10 = 10;

// let -> tdz -> temporal death zone 
// between declaration and initialization

// data types
// data types declared which type of data store in variables 

// type of data type
// 1. Primitive 
// Primitive data types stores single values

// 1. Number -> intiger, decimal, infinity, Nan -> not a number

let age = 18;

// console.log("Hello" -5)

// 2. String -> 
let name = "Vinay";   // "" '' ``

console.log(`Hello ${name}`);

// 3. Boolean

let isAdmin = true
console.log(isAdmin)

// 4.Undefined -> Declared but not assigned
let j;
console.log(j)

// 5. NUN -> Intention empty valyue 
let k=null;

// 6. Bigint -> For very large number 

let l = 13368874515484535;

// Symbol -> Unique identifiers
let id = Symbol();

console.log(id);

// 2. Non Primitive (Reference types)
// Non primitive data types stores referance type of data

// Object, Array, Function

let arr = [1, 2, 3];

function greet(){

}


//! -- day 5 --  ----------- Operators in JS ----------
//  An operator is a symbol that performs an operations on value and variables

let num=30;
let num1=20;
let result = num+num1;


// Operators -> = + 
// Operands -> num, num1 and result

// 1.Arithmetic Operators -> +, -, *, /, %, **, ++, --
// These perform mathematical calculations


// 2.Assigment Operators :- =, +=, -=, *=, /=, 
// Used to assign values

// 3.Comparison Operators :- ==, ===, !=, =>, <= 
// Used to compare values
// Result always true/false

console.log(10==="10") //type coercion

// 4.Logical Operators -> &&, ||,!
// Used for multiple conditions
// && -> and
// || -> or
//*  -> not


//! -- day 6 --

// 5. Conditions Statement
// Conditional statement allow a program to make decision based on conditions

//^ if statement
//     syntex
// if (condition){
// code to execute
// }

age = 19;
if (age >= 18){
    console.log("You are eligible to vote")
}

// step 1. -> chak condition
// step 2. -> if conditon true -> run code
// step 3. -> if false -> skip block

// Condition 
    // |
    // ^
    // true -> code run
    // false -> skip


//^ if-else Statement
// Sometimes we need two possible outcome
// ex : if student passes -> congratulation 
//      else -> try again 

marks = 84;
if (marks >= 35){
    console.log("Congratulation you are pass");
}
else{
    console.log("Try agin")
}

//^ if else if statement (ladder if / Multipul conditions)
// Sometimes these are many conditions
// Independent

// syntax->
// if (condition){
//     code
// }else if (condition2){
//     code
// }else if (condition3){
//     code
// }else{
//     code    
// }

// web grading system 

mark = 88;
if (mark >= 90){
    console.log("Gread => A")
}
else if (mark >= 70){
    console.log("Gread => B")
}
else if (mark >= 50){
    console.log("Gread => C")
}
else console.log("Fail")



//! -- day 7 --  ----------- Nested if and Switch case ---------- 
// if inside if another if
// Jab mujhe ek condition dusri condition ke uper dependent rakhni ho jab use karte he


let username = "admin";
let password = "1234";
if (username==="admin"){
    if (password==="1234"){
        console.log("Login Successfull")
    }
    else {
        console.log("please enter correct password")
    }
}else{
    console.log("user not found")
}

// step-1 -> chech username 
// step-2 -> password
// card valid 
// pin corerct -> withdraw

//? Switch statement 

// used when many fixd values exist 

// better alternative of else if

//^ syntax

// switch(expression){
// case value1;
//     code
//     break;
// case value2;
//     code 
//     break;
// case value3;
//     code 
//     break;
// default;
//     code
// }


let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wed");

    case 4:
        console.log("Thu");
        break;

    case 5:
        console.log("Fri");
        break;

    default:
        console.log("Invalid day");
}

//* Ternary operator
// Short form of if else 
//^ Syntex
// condition ? value1 : value2
let age8 = 20;
let result9 = age8>=18 ? "Adult": "Minor";
console.log(result9);

console.log(5>3>2);

//! -- day 8 --  ----------- Control Loop ----------
// A loop is used to execute a block of code repeatedly until a condition becomes false

//* 1. for loop
// for(initialization/condition/update){
// }

console.log("For loop: ")
for(let i=1;i<=5;i++){
    console.log(i)
}

// Flow
// initilize -> condition chack -> true -> execute block -> update -> repeated
                    // |
                    // false (stop the code)

//& Print number 1-100
console.log("Number 1-100: ")

for(let i=1;i<=100;i++){
    console.log(i)
}

//& Print even numbers
console.log("Even numbers 0-50: ")

for (let i=0; i<=50; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

//& Sum of numbers 
console.log("Sum of numbers: ")

let sum = 0;
for (let i=1; i<=20; i++){
    sum += i;
}
console.log(sum)

//& Multiplication Table
console.log("Multiplication")

let multi = 17;
for (let i=1; i<=10;i++){
    console.log( multi*i)
}

//& Print 10-1 reverce number
console.log("10-1 Reverce number: ")
for(let i=10;i>=1;i--){
    console.log(i);
}



