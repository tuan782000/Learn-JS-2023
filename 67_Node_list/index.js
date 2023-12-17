// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes


/*
NodeList = - Tập hợp các phần tử HTML theo (id, class, element).
           - Có thể tạo bằng cách sử dụng querySelectorAll().
           - Tương tự như mảng, nhưng không có (map, filter, reduce).
           - NodeList sẽ không cập nhật để tự động phản ánh các thay đổi.
*/

// NodeList
// 2 cách này tương tự nhau, đều dựa và điểm chung (id hay class hay element) của thành phần đó mà chọn ra
// const buttons = document.querySelectorAll('button') // dựa vào điểm chung là element
let buttons = document.querySelectorAll('.myButtons') // dựa vào điểm chung là class

console.log(buttons) // chú ý: NodeList - nó tương tự như 1 Array

// Tuy không hỗ trợ các map hay filter hay reduce, nhưng dùng được vòng lặp,
buttons.forEach(button => {
    // chúng ta có thể thực hiện ghi đè hoặc thêm bớt nội dung của thẻ hoặc đổi css cho thẻ,...
    button.style.backgroundColor = "green"
    button.textContent += "😁"
});

// Click events listener
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e)
        e.target.style.backgroundColor = "tomato"
    })
})

// MouseOver và MouseOut
buttons.forEach(button => {
    button.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "hsl(205, 100%, 50%)"
    })
})


buttons.forEach(button => {
    button.addEventListener("mouseout", e => {
        e.target.style.backgroundColor = "green"
    })
})

// Add an element - Thêm 1 thẻ

// Step 1: Tạo 1 thẻ button thêm nó vào biến
const newElement = document.createElement("button")
// Step 2: Thêm nội dung cho thẻ button vừa mới tạo
// Có thể thêm class hoặc id hoặc bất cứ cái gì cho thẻ...
newElement.textContent = "Button 5"
newElement.classList = "myButtons"
// Step 3: Đưa nó lên màn hình chính, thì phải thêm nó vào body
document.body.appendChild(newElement)

console.log(buttons) // nó sẽ không có thằng newElement mới tạo vì tính chất - NodeList sẽ không cập nhật để tự động phản ánh các thay đổi.

// Để khắc phục điều này thì chúng ta sẽ phải đổi buttons từ const thành let.
// Sau đó chúng ta sẽ thực hiện gán lại vào biến buttons

buttons = document.querySelectorAll('.myButtons')

console.log(buttons) // lúc này buttons mới được cập nhật lại

// Remove an element - Xóa 1 thẻ
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.remove()
        console.log(buttons) // như thế này thì nodeList vẫn chưa cập nhật
        // để cập nhật thì đảm bảo biến đó phải là "let" và cái thứ 2 là phải cập nhật lại bằng querySellectorAll
        buttons = document.querySelectorAll('.myButtons')
        console.log(buttons) // lúc này đã cập nhật
    })
})


