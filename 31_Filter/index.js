// .filter() = creates a new array by filtering out elements with a callback

//             tạo một mảng mới bằng cách lọc ra các phần tử bằng lệnh gọi lại


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Lọc ra số chẵn và số lẻ

// Odd
const odd = numbers.filter((num) => {
    if (!(num % 2)) {
        return num // này trả về từng số, filter có nhiệm vụ bỏ nó vào mảng
    }
})

console.log(odd)

// Even Chẵn

const even = numbers.filter((num) => {
    let result = num % 2;
    return result
})

console.log(even)

// 0 không phải là số lẻ và cũng không phải là số chẵn


const ages = [8, 12, 16, 17, 18, 19, 20, 60]

// Viết hàm lọc ra người đã trên 18

const adult = ages.filter((age) => {
    if (age >= 18) {
        return age
    }
})

console.log(adult)

const children = ages.filter((age) => {
    if (age < 18) {
        return age
    }
})

console.log(children)


const words = ["apple", "banana", "orange", "kiwi", "coconut", "pomegranate"]

const getLongWord = words.filter((word) => {
    if (word.length >= 6) {
        return word
    }
})

console.log(getLongWord)

const getShortWord = words.filter((word) => {
    if (word.length < 6) {
        return word
    }
})

console.log(getShortWord)


