// element selectors = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()           // HTML COLLECTION
// 3. document.getElementsByTagName()           // HTML COLLECTION
// 4. document.querySelector()                  // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST


/*
bộ chọn phần tử = Các phương thức được sử dụng để nhắm mục tiêu và thao tác các phần tử HTML. Chúng cho phép bạn chọn một hoặc nhiều thành phần HTML từ DOM (Mô hình đối tượng tài liệu)
*/

/*
1. document.getElementById()                 // ELEMENT OR NULL
2. document.getElementsClassName()           // HTML COLLECTION
3. document.getElementsByTagName()           // HTML COLLECTION
4. document.querySelector()                  // FIRST ELEMENT OR NULL
5. document.querySelectorAll()               // NODELIST
*/


const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "Yellow"
myHeading.style.textAlign = "center"
// Nếu mà getElementById("my-headingg") tham chiếu đến class không tồn tại thì trả về "null"
console.log(myHeading)


const fruits = document.getElementsByClassName("fruits")
console.log(fruits)

// Cách 1:
// fruits[0].style.backgroundColor = "yellow"
// fruits[1].style.backgroundColor = "yellow"
// fruits[2].style.backgroundColor = "yellow"

// Muốn code lại như trên không lặp code, dùng vòng lặp

// Cách 2:
// for(let fruit of fruits) {
//     fruit.style.backgroundColor = "green"
//     fruit.style.color = "white"
// }

// Cách 3
// Array.from(fruits).forEach((fruit) => {
//     fruit.style.backgroundColor = 'green'
//     fruit.style.color = 'white'
// })

const h4Elements = document.getElementsByTagName('h4') // là object
const liElements = document.getElementsByTagName('li') // là object

// console.log(h4Elements)
// console.log(liElements)

// console.log(typeof h4Elements)
// console.log(typeof liElements)

// Cách 1:
// h4Elements[0].style.backgroundColor = 'yellow' // chỉ định thằng object thứ 1 có màu vàng

// Cách 2:
// for(let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "Yellow";
// }
// for(let liElement of liElements) {
//     liElement.style.backgroundColor = "lightGreen";
// }

// Cách 3:
// Array.from(h4Elements).forEach((h4Element) => {
//     h4Element.style.backgroundColor = 'yellow';
// })

// Array.from(liElements).forEach((liElement) => {
//     liElement.style.backgroundColor = "lightgreen";
// })

const element = document.querySelector('.fruits')

element.style.backgroundColor="Yellow"





// querySelectorAll

const shopFruits = document.querySelectorAll('.fruits')
// shopFruits[0].style.backgroundColor = "Yellow"
// shopFruits[1].style.backgroundColor = "Yellow"


shopFruits.forEach(shopFruit => {
    shopFruit.backgroundColor = "Yellow"
})

const shopFoods = document.querySelectorAll('li')

console.log(shopFoods)

shopFoods.forEach((shopFood) => {
    shopFood.style.backgroundColor = "lightgreen"
})