const myButton = document.getElementById('myButton');
const myImg = document.getElementById('myImg');

// myButton.addEventListener('click', (e) => {
//     if (myImg.style.display === 'none') {
//         myImg.style.display = 'block';
//         myButton.textContent = 'Hide';
//     } else {
//         myImg.style.display = 'none';
//         myButton.textContent = 'Show';
//     }
// })

// display none, giúp xóa thẻ đó khỏi body

// Nếu bạn không muốn xóa thẻ đó mà ẩn thẻ đó đi thì dùng visibility, nó chỉ ẩn nhưng vị trí thẻ đó vẫn chiếm dụng trong body

myButton.addEventListener('click', (e) => {
    if (myImg.style.visibility === "hidden") {
        // hiện ảnh
        myImg.style.visibility = "visible";
        // đổi thành nút hide
        myButton.textContent = "Hide"
    } else {
        // ẩn ảnh
        myImg.style.visibility = 'hidden';
        // đổi thành nút show
        myButton.textContent = "Show"
    }
})

// nghịch nhau