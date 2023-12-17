// eventListener = Listen for specific events to create interactive web pages
//                             events: keydown, keyup, keypress
//                             document.addEventListener(event, callback);


// Lắng nghe sự kiện = Lắng nghe một sự kiện cụ thể được tạo bới các tương tác trên trang web.
// Sự kiện bao gồm: click, mouseover, mouseout,...
// addEventListener(event, callback) - addEventListener là 1 function, nhận vào sự kiện và 1 callback

// Nhấn xuống kích hoạt sự kiện
// document.addEventListener("keydown", (e) => {
//     // console.log(e) // in ra đầy đủ
//     // // ví dụ: Nhấn "a" thì -> key code: 81 và key: "a"
//     // console.log(e.key) // In ra mỗi cái thông tin key
//     // console.log(e.keyCode) // In ra mỗi cái thông tin key Code
//     console.log(`key down: ${e.key}`)
// })

// // Nhấn xuống rồi thả ra thì kích hoạt sự kiện khi mà thả ra 
// document.addEventListener("keyup", (e) => {
//     console.log(`key up: ${e.key}`)
// })


// const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", (e) => {
//     myBox.textContent = "😲"
//     myBox.style.backgroundColor = "tomato"
// })

// document.addEventListener("keyup", (e) => {
//     myBox.textContent = "😀"
//     myBox.style.backgroundColor = "lightblue"
// })


const myBox = document.getElementById("myBox");
const moveAmount = 10; // bước nhảy
let x = 0;
let y = 0;

document.addEventListener("keydown", (e) => {
    myBox.textContent = "😲"
    myBox.style.backgroundColor = "tomato"
})

document.addEventListener("keyup", (e) => {
    myBox.textContent = "😀"
    myBox.style.backgroundColor = "lightblue"
})
document.addEventListener("keydown", (e) => {
    // console.log(e.key)
    e.preventDefault(); // giúp hủy cái sự kiện mặc định của thẻ đó
    if(e.key.startsWith("Arrow")){
        switch(e.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})

