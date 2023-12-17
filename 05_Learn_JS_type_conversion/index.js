// type conversions = change the datatype of a value to another
//                    (strings, numbers, booleans)

// Chuyển đổi loại - thay đổi kiểu dữ liệu của một giá trị thành giá trị khác

let age = window.prompt("How old are you?");
// chú ý: prompt này chỉ nhận bất kỳ giá trị nó cũng chuyển thành chuỗi
// nó nhận giá trị xong và nó lưu vào biến age

// Phải chuyển đổi nó từ chuỗi thành số
age = Number(age);

age+=1; // thực hiện + thêm 1 cho tuôi

// in ra tuổi
console.log(age, typeof age);


let x = "pizza";
let y = "pizza";
let z = "pizza";

// Chuyển đổi từ chuỗi sang số
x = Number(x);
// Chuyển đổi từ chuỗi sang chuỗi
y = String(y);
// Chuyển đổi từ chuỗi sang boolean
z = Boolean(z);

console.log(x, typeof x); // chuyển chuỗi thành số nhưng mà bản chất là chuỗi nên có chuyển thì NaN - kết quả in ra: NaN 'number'
console.log(y, typeof y); // chuyển chuỗi thành chuỗi - kết quả in ra: pizza string
console.log(z, typeof z); // chuyển chuổi thành boolean - kết quả in ra: true 'boolean'


let a = "0";
let b = "0";
let c = "0";

// Chuyển đổi từ chuỗi sang số
a = Number(a);
// Chuyển đổi từ chuỗi sang chuỗi
b = String(b);
// Chuyển đổi từ chuỗi sang boolean
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);


/**
 * NaN 'number'
 * undefined string
 * false 'boolean'
 * */ 








