// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

// static = từ khóa xác định các thuộc tính hoặc phương thức thuộc về chính một lớp chứ không phải các đối tượng được tạo từ lớp đó (lớp sở hữu mọi thứ (static) tĩnh, không phải đối tượng (object))

class Mathultil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius
    }
}

// const Mathultil1 = new Mathultil();

console.log(Mathultil)
console.log(Mathultil.PI)

console.log(Mathultil.getDiameter(10));
console.log(Mathultil.getCircumference(10));
console.log(Mathultil.getArea(10));

class User {
    static userCount = 0

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Tuan");
const user2 = new User("Nguyen");
const user3 = new User("Thai");

console.log(user1.username)
console.log(user2.username)
console.log(user3.username)
console.log(User.userCount)


user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();







