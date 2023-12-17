// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings


/* sort() = phương thức dùng để sắp xếp các phần tử của một mảng tại chỗ. Sắp xếp các phần tử dưới dạng chuỗi theo thứ tự từ điển, không theo thứ tự bảng chữ cái

lexicographic = (bảng chữ cái + số + ký hiệu) dưới dạng chuỗi

*/

let fruits = ["apple", "orange", "coconuts", "banana", "pineapple", "strawberry"]
fruits.sort();
console.log(fruits)

// ---------- EXAMPLE 1 ----------
const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort()
console.log(numbers) // sẽ có sai 1 chút logic

numbers.sort((a, b) => a - b)

numbers.sort((a, b) => b - a)


const people = [
    { name: 'Tuan', age: 23, gpa: 3.0 },
    { name: 'Trinh', age: 20, gpa: 3.5 },
    { name: 'Nhi', age: 23, gpa: 2.0 },
    { name: 'Hien', age: 19, gpa: 4.0 }
]

people.sort((a, b) => a.age - b.age)
console.log(people)

people.sort((a, b) => b.age - a.age)
console.log(people)

people.sort((a, b) => a.gpa - b.gpa)
console.log(people)

people.sort((a, b) => b.gpa - a.gpa)
console.log(people)

people.sort((a, b) => a.name - b.name)
console.log(people)

people.sort((a, b) => b.name - a.name)
console.log(people)

people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people)






