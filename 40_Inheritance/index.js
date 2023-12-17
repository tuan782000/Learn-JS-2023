/*
    // inheritance = allows a new class to inherit properties and methods from an existing class. Helps with code reusability
    //  kế thừa = cho phép một class mới kế thừa các thuộc tinh và phương thức từ 1 class đã tồn tại. Giúp tái sử dụng code
*/

class Animal {
    alive = true;
    // Động vật nào cũng có ăn và ngủ, nên mình viết 2 function này vào function dùng chung
    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal {
    name = "rabbit"
    // con thỏ thì chạy được, cá và đại bàng thì không nên chỉ viết hàm chạy cho thỏ
    run() {
        console.log(`This ${this.name} is running.`)
    }
}

class Fish extends Animal {
    name = "fish"
    // cá thì bơi 2 con kia không bơi được nên chỉ viết hàm bơi cho cá
    swim() {
        console.log(`This ${this.name} is swimming.`)
    }
}

class Hawk extends Animal {
    name = "hawk"
    // chim thì bay được 2 con kia thì không nên viết hàm bay cho con chim
    fly() {
        console.log(`This ${this.name} is flying.`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive)
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive)
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive)
hawk.eat();
hawk.sleep();
hawk.fly();