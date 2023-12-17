// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.


/*
classList = Thuộc tính phần tử trong JavaScript dùng để tương tác với 1 danh sách các classes của 1 phần tử (các classes css). Cho phép bạn tạo các lớp tái sử dụng cho nhiều phần tử trên trang web của bạn.
*/

/*
add(): Thêm
remove(): xóa
toggle(Remove if present, Add if not)
replace(oldClass, newClass)
contains() - kết quả trả về true hoặc false
*/

const myButton = document.getElementById('myButton');
// myButton.classList.add("enabled"); // đã có sẵn css cho class enabled, vieejcconf lại là thêm class đó vào thẻ bằng JS

// có thêm thì sẽ có xóa

// myButton.classList.remove("enabled");

// myButton.classList.add("hover"); 


// myButton.addEventListener('mouseover', (e) => {
//     e.target.classList.add('hover')
// })

// myButton.addEventListener('mouseout', (e) => {
//     e.target.classList.remove('hover')
// })

// Thay vì dùng add và remove có thể dùng thêm toggle đối với các trường hợp này

// myButton.addEventListener('mouseover', (e) => {
//     e.target.classList.toggle("hover")
// })

// replace
// myButton.classList.add("enabled")
// myButton.addEventListener("click", (e) => {
//     e.target.classList.replace("enabled", "disabled");
// })

// contains
myButton.addEventListener("click", (e) => {
    if(e.target.classList.contains("disabled")) {
        e.target.textContent += "🤬";
    } else {
        e.target.classList.replace("enabled", "disabled");
    }
})

myH1.classList.add("enabled");

myH1.addEventListener("click", (e) => {
    if(e.target.classList.contains("disabled")) {
        e.target.textContent += "🤬";
    } else {
        e.target.classList.replace("enabled", "disabled");
    }
})