// getter = special method that makes a property readable
// getter = phương pháp đặc biệt làm cho một thuộc tính có thể đọc được

// setter = special method that makes a property writeable
// setter = phương pháp đặc biệt làm cho một thuộc tính có thể ghi được

// validate and modify a value when reading/writing a property
// xác thực và sửa đổi giá trị khi đọc/ghi thuộc tính


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // có nghĩa nó sẽ truyền cái giá trị của nơi gọi hàm truyền vào đây, chạy qua cặp if else thì if thì sẽ lấy đó đặt cho width còn lỗi in ra lệnh trong else
    set width(newWidth) {
        if (newWidth > 0) {
            // _ gạch chân dưới private
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`;
    }

    get height() {
        return `${this._height.toFixed(1)}cm`;
    }


    get area() {
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}

// const rectangle = new Rectangle(-100000, "pizza"); // trường hợp đưa vào setter báo lỗi

const rectangle = new Rectangle(2, 3)

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area);




// class Person

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName
        } else {
            console.log("This must be a string")
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName
        } else {
            console.log("lastName must be a string")
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge
        } else {
            console.log("age must be a number")
        }
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get fullName() {
        return this._firstName + " " + this._lastName
    }

    get age() {
        return this._age
    }

    get fullInformations() {
        return this._firstName + " " + this._lastName + " " + this._age
    }
}

// const person = new Person(24, 54, "tuan");
const person = new Person("Tuan", "Nguyen", 23);

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)


console.log(person.fullInformations)
console.log(person.fullName)



