// Method Chaining = Calling one method after another in one continuous line of code.

// Phương thức thay đổi = Gọi hết phương thức này đến phương thức khác trong 1 dòng code.

// No Method Chaining

// Lưu cái người dùng nhập vào đây
let username = window.prompt("Enter your username: ");
// sau đó dùng method trim để loại bỏ khoảng trắng đầu đuôi, xong gán vào ngược lại vào biến
username = username.trim();
// sau đó cắt chữ cái đầu ra gán vào biến letter
let letter = username.charAt(0)
// Sau rồi viết hoa chữ cái đó lên, gán ngược lại vào letter
letter = letter.toUpperCase();

// cắt từ vị trí thứ 2 trong chuỗi người dùng nhập cho đến hết
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase() // viết thường tất cả
username = letter + extraChars;
// sau khi tổng hợp và biến đổi xong kết hợp lại với nhau

console.log(username)

//tUaN -> Tuan

// Method Chaining
let yourname = window.prompt("Enter your full name");
yourname = yourname.trim().charAt(0).toUpperCase() + yourname.trim().slice(1).toLowerCase()

// Ta đang thực hiện combo ra đòn. combo1 + combo2
console.log(yourname);


