// this = reference to the object where THIS is used
//           (the object depends on the immediate context)

/*
this = tham chiếu đến đối tượng nơi THIS được sử dụng
(đối tượng phụ thuộc vào ngữ cảnh ngay lập tức)
*/


const person1 = {
    name: "Tuan",
    age: 23,
    jobTitle: "Developer",
    isEmployee: true,
    introduce: function() {
        return console.log(`My name is ${this.name}. I'm ${this.age} years old. My major is ${this.jobTitle}`)
    }
    // lưu ý không dùng arrow function ở đây vì "this" không dùng cho arrow function được
}

person1.introduce()


console.log(this)