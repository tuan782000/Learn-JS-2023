// FUNCTION EXPRESSIONS

// function declaration = define a reusable block of code that performs a specific task
// function tự định nghĩa (function exmpale (){}): xác định khối mã có thể tái sử dụng để thực hiện 1 tác vụ cụ thể

function gretting() {
    console.log("Hello world")
}

gretting();

// function expressions = a way to define functions as values or variables
// function expressions = một cách để xác định hàm dưới dạng giá trị hoặc biến

//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners

const hello = function () {
    console.log("Hello!!!")
}

// setTimeout(callback, 3000) // hàm gọi lại, 3s sau sẽ bắt đầu gọi

setTimeout(hello, 3000)

// Hoặc viết theo cách sau

setTimeout(function () {
    console.log("Hi!!!")
}, 3000)



