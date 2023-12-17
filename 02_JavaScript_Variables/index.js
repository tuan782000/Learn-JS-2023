/**
 * Variable = A container that stores a value.
 *            Behaves as if it were the value it contains.
 * 
 * Biến = Vùng chứa lưu trữ một giá trị.
 *        Hành xử như thể đó là giá trị mà nó chứa.
 * 
 * 1. Declaration (khai báo) 
 * 
 * let x;
 * 
 * 2. assignment
 * 
 * x = 100;
 * 
 */

// Điêu kiện khai báo biến trong JS từ khóa biến và tên biến.
let x;

// Dùng x để gán giá trị

x = 100;

console.log(x); // in ra biến x


// Rút gọn các bước này lại

let y = 10;

/**
 * Data types: Kiểu dữ liệu
 * 
 *  Number: kiểu dữ liệu số
 *  String: Kiểu dữ liệu chuỗi
 *  Boolean: Kiểu dữ liệu true/false
 * 
 * */ 

// 1.Number

let age = 25;
let price = 10.88;
let gpa = 7.1;

console.log(`Your age is ${age}`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);

// Kiểm tra kiểu dữ liệu dùng "typeof"

console.log(typeof age); // number
console.log(typeof(price)); // number
console.log(typeof(gpa)); // number

// 2. String

let firstName = "Tuan";
let favoriteFood = "Pizza";
let email = "thaituan7820@gmail.com"

console.log(typeof firstName);
console.log(`Your first name is ${firstName}`);

console.log(typeof favoriteFood);
console.log(`Your favorite food is ${favoriteFood}`);

console.log(typeof email);
console.log(`Your email is ${email}`);


// 3. Boolean

let online = true;
let forSale = false;
let isStudent = false;


console.log(typeof online);
console.log(`Are you online? ${online ? "Yes" : "No"}`);

// Basic
console.log(`Is this care for Sale? ${forSale}`)
// Advanced
console.log(typeof forSale);
console.log(`Is product Sale? ${forSale ? "Yes Product to Sale" : "No Product not Sale"}`);

// Basic
console.log(typeof isStudent);
console.log(`Are you Student? ${isStudent}`)
// Advanced
console.log(`Are you Student? ${isStudent ? "Yes I'm Student" : "No I'm not Student"}`);

// Sử dụng toán tử 3 ngôi làm điều kiện


// Thực Hành in ra bên HTML với DOM và Biến

let myFullName = "Nguyen Thai Tuan"
let myAge = 24;
let mySt = false;

document.getElementById('myName').textContent = `Your full name is ${myFullName}`;
document.getElementById('myAge').textContent = `Your age is ${myAge}`;
document.getElementById('mySt').textContent = `Are you Student? ${mySt ? "Yes I'm Student" : "No I'm not Student" }`;




