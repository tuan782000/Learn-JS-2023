// spread operator = ... allows an ilterable such as an array or string to be expanded into seperate elements (unpacks the elements)

// cho phép một đối tượng có thể lặp lại như một mảng hoặc chuỗi được mở rộng thành các phần tử riêng biệt (giải nén các phần tử)

let numbers = [1, 2, 3, 4, 5, 6]

console.log(numbers)

// Tìm số lớn nhất trong mảng numbers

// Làm theo cách này sẽ không ra kết quả
let maximum = Math.max(numbers) 

console.log(maximum) // NaN tại vì nó là mảng

// Mình phải phá giải mảng ra
let maximumNumber = Math.max(...numbers)

console.log(maximumNumber) // 6

// Tóm lại: spread operator giống như mình mở một cái hộp ra và lấy tất cả mọi thứ bên trong hộp ra

// Ví dụ 2:

let minimumNumber = Math.min(numbers)

console.log(minimumNumber) // 1

let username = "Tuan Nguyen"
let letters = [...username]; // nó sẽ rã chuỗi ra bằng "spread operator" thành các ký tự sau đó cho vào mảng

console.log(letters)

let lettersSpace = [...username].join('-');
console.log(lettersSpace)


// Shallow coppy
let fruits = ["apple", "orange", "banana"];
let vegetables = ["Carrot", "Tomato", "Onion", "Potatoes"]
console.log(fruits)
// Thực hiện Shallow coppy
let foods = [...fruits, ...vegetables, "Eggs", "Milk"];
console.log(foods)



