// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


/*
DOM Navigation = Quá trình điều hướng qua cấu trúc của tài liệu HTML bằng JavaScript..


*/

// firstElementChild

// Chỉ làm cho phần tử đầu tiên của danh sách ul có id fruits hiện màu nền là màu vàng
// const element = document.getElementById('fruits');
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const element = document.getElementById('vegetables');
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const element = document.getElementById('desserts');
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// advance 3 cái trên mỗi danh sách ul sẽ có thằng con đầu tiên có màu nền là mày vàng
// const ulElement = document.querySelectorAll('ul');
// ulElement.forEach((ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// }))

// đã có first child rồi thì sẽ có last child
// Các phần tử cuối cùng của danh sách sẽ được hightlight
// const ulElement = document.querySelectorAll('ul');
// ulElement.forEach((ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// }))

// element kế cận của thằng này sẽ bị thay đổi màu sắc
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;

// nextSibling.style.backgroundColor = "yellow";

// nguyên cả cái thằng kế cận sẽ có màu nền là màu vàng
// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;

// nextSibling.style.backgroundColor = "yellow";

// previousElementSibling
// const element = document.getElementById("apples");
// const nextSibling = element.previousElementSibling;

// nextSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("vegetables");
// const nextSibling = element.previousElementSibling;

// nextSibling.style.backgroundColor = "yellow";

// ---------- .parentElement ----------

// const element = document.getElementById("iceCream");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// ---------- .children ----------

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});
