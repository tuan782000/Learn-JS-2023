/*
    string slicing = creating a substring from a portion of another string

                     string.slice(start, end)


    Cắt chuỗi = Tạo một chuỗi con từ một phần tử của chuỗi khác
                    string.slice(start, end)
*/

const fullName = "Tuan Nguyen"

let firstName = fullName.slice(0, 4);

console.log("First Name: " + firstName)

let lastName = fullName.slice(5)
console.log("Full Name: " + lastName)

// Đối với 2 tham số vị trí bắt đầu cắt và vị trí kết thúc (chốt lại)
// Đối với 1 tham số bắt đầu cắt từ vị trí đó đến hết

// Dùng cắt ký tự vẫn được
let firstChar = fullName.slice(0, 1)
console.log("First Char: " + firstChar)

let lastChar = fullName.slice(-1) // n

// Mình có học về indexOf rồi nó sẽ trả về "số" vị trí đứng,

console.log(fullName.indexOf(" "));

let firstName2 = fullName.slice(0, fullName.indexOf(" "));

console.log(firstName2)

// Làm tương tự last name

let lastName2 = fullName.slice(fullName.indexOf(" ") + 1)
console.log(lastName2)

// Ex2: cắt lấy cái tên trước @

const email = "thaituan7820@gmail.com"

// Cắt trước @
let emailSlice = email.slice(0, email.indexOf("@"));
// Cắt sau @
let extension = email.slice(email.indexOf("@"));

console.log(emailSlice);
console.log(extension);


