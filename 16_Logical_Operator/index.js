// Logical Operator = used to combine or manipulate boolean values (true or false)

// AND = &&
// OR = ||
// NOT = !

// Toán tử logical = sử dụng so sánh hoặc giá trị boolean (true or false)

const temp = 20


if(temp > 0 && temp <= 30) {
    // Thỏa vế cả 2 vế mới vào đây
    console.log("The weather is Good")
} else if (temp > 30 || temp <= 0) {
    // Thỏa 1 trong 2 vế mới vào đây
    console.log("the weather is Bad")
} else {
    console.log("the weather is Bad")
}

const isSunny = true;

if(!isSunny) {
    console.log("It's Cloudy")
} else {
    console.log("It's Sunny")
}