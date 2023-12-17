// object = A collection of related properties and/or methods. Can represent real world objects (people, products, places)
//        object = {key:value,
//                                 function()}

/*
    object = {
        key:value,
        function()
    }
*/

const person = {
    name: "Tuan",
    age: 23,
    job: "IT",
    isEmployee: true,
    writeCode: function () {
        console.log("Can be code")
    },
    sayHello: function () {
        console.log("Say Hello")
    },
    // Mình cũng có thể dùng arrow function
    sayBye: () => {
        console.log("Say bye")
    }
}

const pet = {
    Type: "Dog",
    name: 'Lucy',
    age: 5,
    eat: () => {
        console.log("Can be eat")
    },
    drink: () => {
        console.log("Can be drink")
    }
}

console.log(person.name)
console.log(person.age)
console.log(person.job)
console.log(person.isEmployee)