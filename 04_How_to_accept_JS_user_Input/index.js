// How to accpet user input
// Làm cách nào để chấp nhận dữ liệu đầu vào?

// 1. Easy way = window prompt (Cách dễ nhất dùng window prompt)
// 2. PROFESSIONAL Way = HTML textbox (Cách nâng cao HTML textbox)


// Cách 1: Sử dụng window prompt

// Bước đầu tiên cho người dùng nhập, xong lưu nội dung nhập vào biến
// let userName = window.prompt("What is your username?");

// Sau đó mình tạo ra thẻ để chứa nội dung, xong lưu vào biến
// let result = document.createElement('div');

// Thêm nội dung vào trong thẻ HTML do mình tự tạo bằng hàm innerHTML
// result.innerHTML = userName;

// Hiển thị thẻ ra ngoài màn hình
// document.body.appendChild(result);



// Cách 2: Sử dụng HTML textbox
document.getElementById("mySubmit").onclick = function() {
    let username =  document.getElementById('myText').value;
    // console.log(username);

    let result = document.createElement('h1');
    result.innerHTML = `Hello ${username}`;
    document.body.appendChild(result);
};



