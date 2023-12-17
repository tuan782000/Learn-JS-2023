// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                             .addEventListener(event, callback);


// Lắng nghe sự kiện = Lắng nghe một sự kiện cụ thể được tạo bới các tương tác trên trang web.
// Sự kiện bao gồm: click, mouseover, mouseout,...
// addEventListener(event, callback) - addEventListener là 1 function, nhận vào sự kiện và 1 callback


const myBox = document.getElementById('myBox');
// console.log(myBox)

// function changeColor(e) {
//     console.log(e) // pointerEvent (cho ta biết rằng chuyện gì đã xảy ra ở phía người dùng)
//     myBox.style.backgroundColor = "tomato"
//     // event.target.style.backgroundColor = "totmato"
//     myBox.textContent = "OUCH!!! 🤕"
//     // event.target.textContent = ""
// }

// myBox.addEventListener("click", changeColor)
// // myBox.addEventListener("click", changeColor(e)) // chúng ta không cần phải viết rõ ràng như vầy, chỉ cần ghi tên hàm lại là được

// Gán cho nó 1 lắng nghe sự kiện, mỗi lần sự kiện kích hoạt một callback được gọi đi thực hiện nhiệm vụ
myBox.addEventListener("click", (e) => {
    myBox.style.backgroundColor = "tomato"
    myBox.textContent = "OUCH!!! 🤕"
})

myBox.addEventListener("mouseover", (e) => {
    myBox.style.backgroundColor = "Yellow"
    myBox.textContent = "Don't Do It 😲"
})

myBox.addEventListener("mouseout", (e) => {
    myBox.style.backgroundColor = "lightGreen"
    myBox.textContent = "Click me 😀"
})


const myBtn = document.querySelector("#btn")

myBtn.addEventListener("click", (e) => {
    // myBtn <=> event.target
    myBtn.style.backgroundColor = "tomato"
    myBtn.textContent = "OUCH!!! 🤕"
})

// mouse over di chuột vào
myBtn.addEventListener("mouseover", (e) => {
    myBtn.style.backgroundColor = "yellow"
    myBtn.textContent = "Don't Do It 😲"
})

// mouse out
myBtn.addEventListener("mouseout", (e) => {
    myBtn.style.backgroundColor = "lightGreen"
    myBtn.textContent = "Click me 😀"
})

