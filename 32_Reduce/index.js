// .reduce() = reduce the elements of an array to a single value  

// 

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce((accumulator, element) => {
    return accumulator + element
})

console.log(`$${total.toFixed(2)}`);

/*

*/


const grades = [75, 50, 90, 80, 65, 95]

const maximum = grades.reduce((accumulator, element) => {
    return Math.max(accumulator, element)
});

console.log(maximum)

const minimum = grades.reduce((accumulator, element) => {
    return Math.min(accumulator, element)
})

console.log(minimum)



