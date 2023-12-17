/*
    array = a variable like structure that can hold more than 1 value.
    Mảng = Cấu trúc nó như là 1 biến, nó có thể giữ nhiều hơn 1 giá trị 
*/

let fruits = ["water melon", "banana", "apple", "orange", "blue berry"]

console.log(fruits)

// Truy cập phần tử đầu tiên trong mảng
console.log(fruits[0]);

console.log(fruits[1], fruits[3]) // Lấy ra phần tử thứ 2 và thứ 4

console.log(fruits[6]) // undefined vì phần tử thứ 7 không tồn tại. 

// Thực hiện truy cập vào vị trí phần tử yêu cầu và thay đổi nó đi. (sửa đổi phần tử trong mảng)

fruits[0] = "coconut";

console.log(fruits[0]) // sẽ hiển thị "coconut" thay vì "water melon"

// Cách để thêm 1 phần tử vào mảng:

// Cách 1:

// fruits[6]: undefined
// add new fruit in fruits array: thêm 1 trái cây mới vào mảng fruits
fruits[6] = "strawberry";

// Cách 2:
fruits.push("pineapple") // Thêm 1 phần tử vào cuối mảng, bằng cách sử dụng hàm push())


// Cách để loại bỏ 1 phần tử nằm ở cuối mảng: sử dụng phương thức pop()
fruits.pop();


// Cách để thêm 1 phần tử vào đầu mảng: sử dụng phương thức unshift()
fruits.unshift("mango");

// Cách để loại bỏ 1 phần tử ở đầu mảng: sử dụng phương thức shift()
fruits.shift();


// Cách để đếm số lượng phần tử trong mảng:  sử dụng phương thức length
let numFruits = fruits.length;

console.log(numFruits)

// Cách tìm chỉ mục của 1 phần tử trong mảng: sử dụng phương thức indexOf()

let indexFruit = fruits.indexOf("apple"); // Nếu có tồn tại sẽ trả về vị trí phần tử đó, nếu không có sẽ trả về -1

console.log(indexFruit)


// Dùng vòng lặp for để duyệt qua các phần tử trong mảng

// Cách 1: Duyệt mảng xuôi
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// Cách 2: Duyệt mảng ngược
for (let i = fruits.length; i >= 0; i--) {
    console.log(i, fruits[i]);
}

// For...of

// Sử dụng for...of khi bạn muốn lặp qua các phần tử của một mảng và quan tâm đến giá trị của chúng.
// Lấy ra value
for (let fruit of fruits) {
    console.log(fruit)
}

// For...in

// Sử dụng for...in khi bạn muốn lặp qua các thuộc tính của một đối tượng (bao gồm cả các thuộc tính kế thừa).
// Lấy ra index
for(let fruit in fruits) {
    console.log(fruit)
}

// Sắp xếp vơi hàm sort()
// Theo thứ tự alphabet
fruits.sort()

fruits.sort().reverse()// đảo ngược

