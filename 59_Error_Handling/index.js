// Error = An Object that is created to represent a problem that occurs
//              Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources


// Error =  Một Đối tượng được tạo để thể hiện sự cố xảy ra. Thường xảy ra khi người dùng nhập hoặc thiết lập kết nối

// try { } = Kèm theo mã có khả năng gây ra lỗi

// catch { } = Bắt và xử lý mọi lỗi được đưa ra từ try { }

// finally { } = (tùy chọn) Luôn thực thi. Chủ yếu dùng để dọn dẹp. 
// ví dụ: đóng tập tin, đóng kết nối, giải phóng tài nguyên


/*

try (Thử nghiệm):

- Các đoạn mã trong khối try là những đoạn mã mà bạn muốn kiểm tra xem có xảy ra lỗi không.
- Nếu một lỗi xảy ra trong khối try, quyền điều khiển sẽ chuyển đến khối catch.
- Nếu không có lỗi, toàn bộ khối try sẽ được thực thi và khối catch sẽ được bỏ qua.

catch (Bắt lỗi):

- Nếu một lỗi xảy ra trong khối try, quyền điều khiển sẽ chuyển đến khối catch.
- error trong catch(error) là một biến được sử dụng để lưu thông tin về lỗi, giúp bạn xác định và xử lý lỗi đó.
- Khối catch là nơi bạn đặt mã xử lý cho lỗi.

try {
    // Mã có thể gây lỗi
} catch (error) {
    // Xử lý lỗi ở đây
}

*/


/*


finally (Cuối cùng):

- Khối finally chứa mã được thực hiện sau cả khi khối try hoặc catch đã thực hiện xong, cho dù có lỗi hay không.
- Thường được sử dụng để đảm bảo rằng các tài nguyên, như tệp tin hoặc kết nối, được giải phóng.
- Khối finally là tùy chọn và có thể được bỏ qua nếu không cần thiết.

try {
    // Mã có thể gây lỗi
} catch (error) {
    // Xử lý lỗi ở đây
} finally {
    // Luôn được thực thi, thường được sử dụng cho công việc dọn dẹp
}

Tổng quát, cấu trúc try-catch-finally giúp kiểm soát việc xử lý lỗi và thực hiện các công việc quan trọng sau khi xử lý lỗi, như giải phóng tài nguyên.

*/


// Mình sẽ tự tạo ra lỗi, chẳng hạn như console.log mình đổi thành console.lag

/*
    Network errors - Lỗi kết nối
    promise rejection - Lời hứa bị từ chối
    security error - Lỗi bảo mật
*/

try {

    // Thằng try sẽ đi thử các lệnh bên trong này, nếu có vấn đề gì phát sinh có lỗi chẳn hạn, đưa ra error và "catch" sẽ bắt

    // Này lỗi cú pháp
    // console.lag("ABC");

    // Này lỗi chưa khai báo
    // console.log(x)

    console.log("Hello world!");
} catch (error) {
    // console.log(error);
    // or
    console.error(error)
} finally {
    // Close file
    // Close connection
    // Release Resources
    console.log("This is always executes")
}

console.log("You have reached the end!")


// Trong trường hợp cho người dùng nhập, người dùng có thể gửi đoạn mã script độc hại vào phần tiếp theo

// const dividend = window.prompt("Enter a dividend: ") // dividend: số bị chia
// const divisor = window.prompt("Enter a divisor: ") // divisor: số chia

// const result = dividend / divisor;

// console.log(result)

// Về mặt toán học chúng ta chia số nào cho nhau vẫn được.
// Nhưng có 1 trường hợp sẽ lỗi, đó là lấy số đó chia cho "0"

// ví dụ:  trong js 1 / 0 = infinity, bất cứ số nào chia cho 0 cũng vậy

// Vậy nên ta sẽ dùng try catch để bắt ra cái lỗi đó


try {
    const dividend = Number(window.prompt("Enter a dividend: ")) // dividend: số bị chia
    const divisor = Number(window.prompt("Enter a divisor: ")) // divisor: số chia

    const result = dividend / divisor;

    if (divisor == 0) {
        throw new Error("You can't divide by zero")
    }

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Value must be a number")
    }

    // console.lag(result) //index.js:124 TypeError: console.lag is not a function
    console.log(result)
} catch (e) {
    console.error(e)
}

console.log("You have reached the end!")
