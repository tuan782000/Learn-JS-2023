let display = document.getElementById('display'); // Lấy nguyên cái thẻ html có id là display xong gán vào biến display

display.value = localStorage.getItem('result') || ''

// Tại sao dùng let khai báo biến display mà không dùng const

// Tại vì display có thể thay đổi gán lại giá trị

// console.log(typeof display)
// Gọi hàm appendToDisplay khi mà nhấn các nút, và nó kèm theo các đối số truyền vào, hàm nhận vào các tham số.
// Chức năng của hàm chỉ định vào phần giá trị của thẻ HTML += tham số nhận vào
function appendToDisplay(string) {
    display.value += string
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try {
        let result = eval(display.value)
        // display.value = result.toFixed(2)
        // display.value = parseFloat(result.toPrecision(2));
	display.value = result
        localStorage.setItem('result', result);
        // parseFloat: chuyển đổi một chuỗi thành một số dấu chấm động (floating-point number). Hàm này cố gắng phân tích một chuỗi và trích xuất ra một giá trị số từ đầu chuỗi. Nếu không thể chuyển đổi thành số hợp lệ, hàm sẽ trả về NaN (Not a Number).

        // Trong trường hợp này, toPrecision(2) sẽ giới hạn tổng số chữ số trước và sau dấu thập phân là 2 chữ số. Bạn có thể điều chỉnh giá trị này tùy thuộc vào yêu cầu của bạn.

        // Lý do dùng các này 0.1 + 0.2= 0.3000000000000000000004

    } catch (error) {
        display.value = "Error"
    }
}