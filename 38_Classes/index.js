// class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance


/*
   class = (tính năng mới ES6)   

   cung cấp một cách có cấu trúc và rõ ràng hơn để làm việc với các đối tượng so với các hàm tạo truyền thống, 
   ví dụ: từ khóa tĩnh, đóng gói, kế thừa
*/

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct() {
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();

// let total = 0;
// total += product1.calculateTotal(salesTax)
// total += product2.calculateTotal(salesTax)
// total += product3.calculateTotal(salesTax)

// console.log(`Total price (with tax): $${total.toFixed(2)}`);



// Viết chương trình tính Bill của siêu thị bằng cách sử dụng class và cunstructor

class Food {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayFood() {
        console.log(`Food: ${this.name}, ${this.price}`);
    }

    totalFoodTax(taxFood) {
        return this.price + this.price * taxFood
    }
}

const taxFood = 0.05

const item1 = new Food("chicken", 2.00);
const item2 = new Food("pork", 1.99);
const item3 = new Food("beaf", 5.78);

item1.displayFood();
item2.displayFood();
item3.displayFood();

let totalBill = 0;

totalBill += item1.totalFoodTax(taxFood)
totalBill += item2.totalFoodTax(taxFood)
totalBill += item3.totalFoodTax(taxFood)

console.log(`Total bill ${totalBill.toFixed(2)}`)






class Product {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }

    showInfomation() {
        console.log(`Name: ${this.name}`)
        console.log(`Price: ${this.price}`)
    }

    totalProductWithTax(tax) {
        return this.price + this.price * tax
    }
}

const product1 = new Product("T-Shirt", 12.00)
const product2 = new Product("Jeans", 39.99)
const product3 = new Product("Underwear", 100)

product1.showInfomation()
product2.showInfomation()
product3.showInfomation()

const tax = 0.04

let total = 0
total += product1.totalProductWithTax(tax)
total += product2.totalProductWithTax(tax)
total += product3.totalProductWithTax(tax)


console.log(`${total.toFixed(2)}`);





