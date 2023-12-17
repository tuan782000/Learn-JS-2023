// Math = built in object that provides a collection of properties and methods.
//        đối tượng được xây dựng sẵn cung cấp một tập hợp các thuộc tính và phương thức.

// Có một số các phương thức toán học được JavaScript viết sẵn chỉ việc lấy ra dùng thui không cần phải viết ra hàm rồi sử dụng


/*
 Trong JavaScript, "Math" là một đối tượng được sử dụng để thực hiện các phép toán toán học 
 và các chức năng liên quan đến số học.
 Đối tượng này cung cấp một loạt các phương thức và thuộc tính để thực hiện các nhiệm vụ toán học thông thường. 
*/

// PI
const PI = Math.PI

console.log(`Đây là số PI: ${PI}`); // 3.141592653589793

console.log(Math.E); // Kết quả: 2.718281828459045

// Round

let x = 3.21;
let y = 2;
let z;

z = Math.round(x);
// round làm tròn xuống khi .49 
// round làm tròn lên khi .5
// Kết quả: 3

// Floor

z = Math.floor(x); // Luôn luôn làm tròn xuống
// Kết quả: 3
//Ceiling

z = Math.ceil(x); // lên luôn làm tròn lên
// Kết quả: 4

// truncate

z = Math.trunc(x); // truncate là rút gọn, loại bỏ hoàn toàn các số thập phân phía sau
// Kết quả: 3

// Pow: Lũy thừa
let a = 3;
let b = 2;
z = Math.pow(a, b); // 3^2 = 9 
z = Math.pow(b, a); // 2^3 = 8 

// Sqrt: Căn bậc 2
let c = 81
z = Math.sqrt(c); // 9

// Log: Logarit 
let result = Math.log(10);
console.log(result); // Kết quả: 2.302585092994046

// Hàm sin
let d = 45
z = Math.sin(d);
console.log(z)

// Hàm cos
z = Math.cos(d);
console.log(z)

// Hàm tan
z = Math.tan(d);
console.log(z)

// Hàm abs: trị tuyệt đối
let e = -3.21;
z = Math.abs(e);
console.log(z)

// Hàm sign
let f = -3.21;
z = Math.sign(f); // -1
console.log(z)

/*
Trong JavaScript, hàm Math.sign() được sử dụng để trả về dấu của một số, đó là một trong các giá trị sau:

1: Nếu số là dương (positive).
0: Nếu số là zero.
-1: Nếu số là âm (negative).
NaN: Nếu số không phải là một số (Not a Number).
*/


// Hàm max: tìm giá trị lớn nhất
let m = 10
let n = 9
let o = 8

let max = Math.max(m, n, o); // hàm max tìm ra số lớn nhất trong các đối số được truyền vào
console.log(max) // 10


// Hàm min: tìm giá trị nhỏ nhất
let min = Math.min(m, n, o); // hàm min tìm ra số nhỏ nhất trong các đối số được truyền vào
console.log(min); // 8

