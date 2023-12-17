// callback = a function that is passed as an argument to another function.

// callback là một hàm được đem làm đối số truyền vào cho 1 hàm khác 

// used to handle asynchronous operations: - Sử dụng để làm các tác vụ không đồng bộ như:
// 1. Reading a file - đọc 1 file
// 2. Network requests - Các yêu cầu được gửi đi
// 3. Interacting with databases - Kết nối đến databse

// "Hey, when you're done, call this next." - "Này, khi nào xong thì gọi tiếp nhé."

// Mình có 2 hàm độc lập

// function hello() {
//     console.log("Hello!!!")
// }

// function goodBye() {
//     console.log("GoodBye!!!")
// }

// hello()
// goodBye()

// Bây giờ tôi muốn chỉ khai nào thực hiện xong hàm hello mới gọi hàm goodbye

function hello(callback) {
    console.log("Hello!!!")
    callback()
}

function goodBye() {
    console.log("GoodBye!!!")
}

function wait() {
    console.log("Wait!!!")
}

// Lưu ý khi hàm trong hàm thì không cần phải có cặp ngoặc tròn ()

hello(goodBye)
// hello(wait)

// Lúc này hàm hello nhận 1 callback vào làm đối số


// callback

// Viết hàm chung để callback
function sum(callback, x, y) {
    let result = x + y;
    callback(result)
}

// Viết xử lý riêng, gọi riêng
function displayConsole(result) {
    console.log(result)
}

sum(displayConsole, 4, 5)


// Viết xử lý riêng, gọi riêng
function displayOnScreen(result) {
    document.getElementById('myH1').innerText = result
}

sum(displayOnScreen, 10, 12)
