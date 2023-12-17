/*
    Ternary operator: A shortcut to if {} and else statements help to assign a variable based on a condition 
                      Condition ? codeIftrue : codeIffalse
*/

// ex1

const age = 21
const message = age >= 18 ? "You're an adult" : "You're too young";

console.log(message)



// ex2

const time = 12;
const greeting = time <= 12 ? "Good Morning" : time <= 18 ? "Good Afternoon" : "Good Evening"

console.log(greeting)

// ex3

const student = true

const mess = student ? "You are Student" : "You aren't Student"

console.log(mess)

// ex4

const productPrice = 2110;

const tax = productPrice < 100 ? "Tax free" : productPrice < 1000 ? `Tax 10%: ${productPrice * 0.1}` : `Tax 20%: ${productPrice * 0.2}`

console.log(tax)

const total = productPrice < 100 ? `${ productPrice + productPrice * 0.1}` : `${productPrice + productPrice * 0.2}`

console.log(total)