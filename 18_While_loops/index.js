// While Loop = repeat some code while some condition is true

// Vòng lặp while = lặp lại 1 đoạn code với điều kiện là true

let userName = ""

// if (userName === ""){
//     console.log(`You didn't enter your username`)
// } else {
//     console.log(`Hello ${userName}`)
// }

// Bài toán: Nếu username trống thì phải hiện thị hộp thoại cho người dùng nhập, điều này bắt buộc. Nếu người dùng nhấn bỏ qua vẫn phải tiếp tục hiện cho đến khi nào người dùng chịu nhập username thì thôi

// Phân tích: vậy điều kiện vòng lặp ở đây là userName phải tróng thì 1 công việc sẽ luôn được lặp lại, đó là hiển thị chỗ cho người dùng nhập liệu
while (userName === "" || userName === null) {
    userName = window.prompt("Please enter your username")
}

console.log(`Hello ${userName}`)



let password = ""

do {
    password = window.prompt("Please enter your password")
} while(password === "" || password === null)

console.log(`Password: ${password}`)

// Do while thì không cần phải nhìn vào điều kiện nó vẫn chạy ít nhất 1 lần, sau đó mới xét đến điều kiện


// Làm đăng nhập

let loggedIn = false;
let userEmail;
let userPassword;

do {
    userEmail = window.prompt("Please enter your email address");
    userPassword = window.prompt("Please enter your password");

    if (userEmail === "user@example.com" && userPassword === "123456") {
        loggedIn = true;
        console.log("Login successful")
        console.log("You are logged in")
    } else {
        console.log("Invalid credentials! Please try again")
    }
} while (!loggedIn)





