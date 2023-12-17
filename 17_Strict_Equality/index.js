/*
= assignment operator - toán tử gán
== comparison operator (compare if values are equal) - toán tử bằng - so sanh giá trị
=== strict equality operator (compare if values & datatype are equal) - toán tử 3 dấu = - so sánh giá trị và kiểu dữ liệu
!= inequality operator - toán tử khác
!== strict equality operator - toán từ khác nhưng tuyệt đối

*/


const PI = 3.14

if( PI === 3.14 ) {
    console.log("That is PI, equal value and data type")
} else if (PI == "3.14") {
    console.log("That is PI, but not equal data type")
} else {
    console.log("That is not PI")
}


if (PI !== 3.14) {
    console.log("Not equal value and data type")
} else if (PI != "3.14") {
    console.log("Equal value, not equal data type")
} else {
    console.log("equal")
}
