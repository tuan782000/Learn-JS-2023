// String methods = allow you to manipulate and work with text (strings)

let userName = "Tuan Nguyen";

// charAt: Lấy ra "1 ký tự" theo yêu cầu.

// charAt() được sử dụng để trả về ký tự tại một vị trí cụ thể trong chuỗi.

// string.charAt(index)

/*
Trong đó:
- string là chuỗi mà bạn muốn truy cập ký tự.
- index là vị trí của ký tự cần truy cập trong chuỗi. Chỉ số index bắt đầu từ 0.
*/ 

console.log(userName.charAt(0)); // Lấy ra ký tự đầu
console.log(userName.charAt(1)); // Lấy ra ký tự thứ 2
console.log(userName.charAt(2)); // Lấy ra ký tự thứ 3
console.log(userName.charAt(5)); // Lấy ra ký tự thứ 6

console.log("-------------------------------------------")


// indexOf: Tìm vị trí của phần tử

/*
indexOf được sử dụng để tìm kiếm vị trí "đầu tiên" của một giá trị cụ thể trong một mảng hoặc chuỗi. 
Phương thức này trả về chỉ số của phần tử "đầu tiên" có giá trị tìm kiếm trong mảng hoặc chuỗi, 
hoặc trả về -1 nếu giá trị không được tìm thấy.
*/ 

console.log(userName.indexOf("a"));
console.log(userName.indexOf("e"));

// Lưu ý: kết quả trả về sẽ là kết quả đầu tiên mà nó tìm được.
// Lưu ý: không tìm thấy trả về -1

console.log("-------------------------------------------")


// lastIndexOf

// phương thức lastIndexOf tương tự như indexOf, nhưng nó tìm kiếm từ cuối chuỗi (hoặc cuối mảng) trở về phía đầu

console.log(userName.lastIndexOf("u"));
console.log(userName.lastIndexOf("n"));


console.log("-------------------------------------------")


// length: độ dài của chuỗi

// tính từ 0 

console.log(userName.length); // 11

console.log("-------------------------------------------")


// trim

// phương thức trim() được sử dụng để loại bỏ các ký tự khoảng trắng từ cả hai đầu (đầu đầu và đuôi) của một chuỗi.

let yourName = "   Tuan Nguyen   "
yourName = yourName.trim();
console.log(yourName)

console.log("-------------------------------------------")

// toUpperCase: Viết hoa toàn bộ

console.log(userName.toUpperCase());

console.log("-------------------------------------------")

// toLowerCase: Viết toàn bộ là viết thường hết

console.log(userName.toLowerCase());

console.log("-------------------------------------------")


// repeat: lặp lại, tham số truyền vào là số lần lặp lại của cái chuỗi đó

console.log(userName.repeat(3));


console.log("-------------------------------------------")
// startWith

let userLogin = " Tuannt"
let result = userLogin.startsWith(" ");
// Kiểm tra xem cái tên có bắt đầu bằng khoảng trắng hay không

// Nếu có thì không cho
if(result) {
    console.log("Your username can't begin with ' ' ")
} else {
    // Nếu có thì cho
    console.log(userLogin)
}

console.log("-------------------------------------------")
// endsWith
let userPassword = "123456 "
let resultPassword = userPassword.endsWith(" ")

// Nếu có thì không cho phép kết thúc khoảng trắng " "
if(resultPassword) {
    console.log("Your password can't begin with ' ' ")
} else {
    // Nếu không có thì cho
    console.log(userPassword)
}

console.log("-------------------------------------------")

// includes

/*
includes là một phương thức của đối tượng chuỗi (String) được sử dụng để kiểm tra xem một chuỗi 
có chứa một chuỗi con cụ thể hay không. 
Phương thức này trả về giá trị true nếu chuỗi chứa chuỗi con và false nếu ngược lại.

*/

let customerName = "Tuan Nguyen"
let resultCustomerName = customerName.includes(" ")

// tìm có khoảng trắng không " ", có thì vào if không vào else

if (resultCustomerName) {
    console.log("Your customer name can't include ' ' ")
} else {
    console.log(customerName)
}

console.log("-------------------------------------------")


// replaceAll

let phoneNumber = "123-456-7890"
// Tham số thứ 1 là cái cần thay thế
// Tham số thứ 2 là cái sẽ thay thế
phoneNumber = phoneNumber.replaceAll("-", "")
console.log(phoneNumber)

console.log("-------------------------------------------")


// padStart
// Tham số thứ 1 là số lượng 
// tham số thứ 2 sẽ là ký tự bù vào đầu chuỗi sao cho đủ
phoneNumber = phoneNumber.padStart(15, 0)
console.log(phoneNumber)

console.log("-------------------------------------------")

// padEnd
// Tham số thứ 1 là số lượng 
// tham số thứ 2 sẽ là ký tự bù vào cuối chuỗi sao cho đủ
phoneNumber = phoneNumber.padEnd(15, 0)
console.log(phoneNumber)
console.log("-------------------------------------------")
