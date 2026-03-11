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


// -- day 2 --  ----------- Feature of JavaScript ----------   


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



// -- day 3 --  ----------- Variable ----------  

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




// -- day 4 --  -----------  ----------   