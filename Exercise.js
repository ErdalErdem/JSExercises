// Opgave 1

// Function declaration = Naming an Action: Think of a function declaration as
// naming a specific action you want to perform. For example, you can create a
// function called addNumbers that adds two numbers together.
function add(n1, n2) {
    return n1 + n2;
}

// Function expression = A function expression in JavaScript
// is like giving a name to a set of
// instructions that you want to reuse later. It's a way to store a function inside a variable,
// just like you store numbers or words in variables.
const sub = function (n1, n2) {
    return n1 - n2
}

// Callback example = In JavaScript, a callback is like a function that
// you give to another function to be executed later when something specific happens.
// It's a way to say, "Hey, do this when that thing is done."
const cb = function (n1, n2, callback) {
    return "Result from the two number: " + n1 + "+" + n2 + "=" + callback(n1, n2);
}

// Opgave 2

console.log(add(1, 2)) // what will this print? Answer: I think it's going to print 3

console.log(add) // what will this print and what does add represent? Answer: Add represents a function and I think it will print nothing

console.log(add(1, 2, 3)); // What will it print? Answer: I think it's going to print 3,
// because when you call a function with more arguments than it expects, the extra argument will be ignored

console.log(add(1)); // What will this print? Answer: it gives us the NaN because its undefined

console.log(cb(3, 3, add)); // What will this print? Answer: 3+3=6

console.log(cb(4, 3, sub)); // What will this print? Answer: 4+3=1

// console.log(cb(3,3,add())); // What will it print (and what was the problem)
// The code console.log(cb(3, 3, add())); has a problem because it's attempting to use the
// result of the add() function as an argument without actually calling add as a function.
// To fix this issue, you should call add as a function by using
// parentheses when passing it as an argument to cb.

console.log(cb(3, "hh", add)); // What will this print? Answer: 3+hh=3hh

// Opgave 4

function mul(n1, n2) {
    return "Result from the two numbers are" + " " + n1 * n2;
}

function cb1(callback, n1, n2) {
    return callback(n1, n2);
}

let result = cb1(mul, 3, 5);

console.log(result)

// Opgave 5

function cb2(callback, num1, num2) {
    // Call the provided callback function with num1 and num2 as arguments
    return callback(num1, num2);
}

let result1 = cb2(function(x, y) {
    return x / y;
}, 10, 2);

console.log(result1);