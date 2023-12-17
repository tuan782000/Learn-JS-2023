/*
    .map() = accepts a callback and applies that function to each element of an array, then return a new array
*/

// Phương thức map chấp nhận một lệnh gọi lại và áp dụng hàm đó cho từng phần tử của mảng, sau đó trả về một mảng mới

const numbers = [1, 2, 3, 4, 5, 6, 7]

const squares = numbers.map((number) => {
    return Math.pow(number, 2)
})

console.log(squares)

const cubes = numbers.map((number) => {
    return Math.pow(number, 3)
})

console.log(cubes)

// 

const students = ["Tung", "Tien", "Tuan", "Tu", "Thu"]

// Viết hoa hết
const upperCaseStudent = students.map((student) => {
    return student.toUpperCase()
})

console.log(upperCaseStudent)

// Viết thường hết
const lowerCaseStudent = students.map((student) => {
    return student.toLowerCase()
})

console.log(lowerCaseStudent)

// Viết hoa chữ cái đầu
const firstUpperCase = students.map((student) => {
    return student.charAt(0).toUpperCase() + student.slice(1)
})

console.log(firstUpperCase)

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

// Đổi vị trí và đổi format của ngày tháng năm
// Step 1: dùng map lặp qua các phần tử trong mảng
// Step 2: Sau khi có các phần tử, dựa vào các điểm chung của chuỗi, tiến hành cắt
// Step 3: Sử dụng hàm split để cắt
// Step 4: Sau khi cắt, mình sẽ có được mảng chứa các phần đã cắt nó giống như vầy [[a,b,c], [a,b,c], [a,b,c]]

const formatDate = dates.map((date) => {
    let parts = date.split("-") // cắt các khớp nối của chuỗi và bỏ các khớp cắt vào trong mảng
    console.log(parts)
    return `${parts[2]}/${parts[1]}/${parts[0]}`
})

console.log(formatDate)





