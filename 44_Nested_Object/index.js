// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  


// Các đối tượng lồng nhau = Object bên trong một object khác, cho phép bạn biểu diễn các dữ liệu phức tạp hơn, đối tượng con được bao bọc đối tượng cha

/*
    Person {
        Address {

        },
        ContactInfo {

        }
    }

    ShoppingCart {
        keyboard {

        },
        Mouse {

        },
        Monitor {

        }
    }
*/

const person = {
    fullName: "Tuan Nguyen",
    age: 23,
    isStudent: true,
    hobbies: ["Karate", "Game", "Cooking"],
    address: {
        street: "Vo Lai",
        city: "Quy Nhon",
        country: "Viet Nam"
    }
}

console.log(person.fullName)
console.log(person.age)
console.log(person.isStudent)
console.log(person.hobbies[0], person.hobbies[1], person.hobbies[2]);
console.log(person.address.street, person.address.city, person.address.country);

// Mình ứng dụng vòng lặp vào đây cũng được
console.log("-----------------------")
// Dùng vòng lặp for in để lấy ra các key với value
console.log("Dùng vòng lặp for in lặp address")
for (const property in person.address) {
    console.log(person.address[property])
}

console.log("Dùng vòng lặp for in lặp person")

for (const i in person) {
    console.log(person[i])
}



class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address {
    constructor(addressNumber, city, country) {
        this.addressNumber = addressNumber;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Tuan", "Nguyen", "50 Hoang Sa", 23, "VietNam")
const person2 = new Person("Kien", "Nguyen", "23 Hoang Sa", 13, "VietNam")

// 
console.log(person1)
console.log(person1.address) // object
console.log(person1.address.city, person1.address.country, person1.address.addressNumber)
// 
console.log(person2)

