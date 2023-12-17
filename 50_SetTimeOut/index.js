// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);


/*

hàm setTimeout() trong JavaScript cho phép bạn lên lịch thực hiện hàm sau một khoảng thời gian.

*/

// ---------- EXAMPLE 1 ----------
// Viết ra function
function hello() {
    window.alert("Hello");
}
// dùng hàm setTimeout gọi callbacks, sau khoảng thời gian sẽ thực hiện việc chạy callbacks
setTimeout(hello, 3000);

// Viết callbacks ngay trong hàm setTimeout, sau khoảng thời gian sẽ thực hiện việc chạy callbacks
setTimeout(function () {
    window.alert("Hello")
}, 4000)

// Viết arrow function - callbacks trong hàm setTimeout, sau khoảng thời gian sẽ thực hiện việc chạy callbacks
setTimeout(() => { window.alert("Hello") }, 5000)

// ---------- EXAMPLE 2 ----------
// clearTimeout() = can cancel a timeout before it triggers
//                  có thể hủy thời gian chờ trước khi nó kích hoạt

const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutId);

// timeoutId sẽ bị hủy trước khi nó xảy ra vì nó đã bị clearTimeout ghi đè lên setTimeout. Công dụng của clearTimeout là xóa bỏ các timeout

// ---------- EXAMPLE 3 ----------

// Điểu hiểu hơn về setTimeout và clearTimeout thì ta sẽ xem ex3

let timeoutId1; // tạo 1 biến lưu kết quả, biến toàn cục

// Viết 1 hàm show kết quả
function showAlert() {
    window.alert("Hello");
}

// Viết hàm sự kiện
function startTimer() {
    // khi hàm sự kiện gọi
    // set lại giá trị biến bằng setTimeout và setTimeout sẽ thực hiện callbacks sau 3s
    timeoutId1 = setTimeout(showAlert, 3000);
    console.log("STARTED");
}

// Viết hàm sự kiện
function clearTime() {
    // trong khoảng thời gian chờ 3s đó nếu như bạn cảm thấy không muốn chờ nữa nhấn và hàm clear để dừng nó lại
    clearTimeout(timeoutId1);
    console.log("CLEARED");
}
