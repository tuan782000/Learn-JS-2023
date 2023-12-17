let day = 1

if (day === 1) {
    console.log("It's Monday")
} else if (day === 2){
    console.log("It's Tuesday")
} else if (day === 3){
    console.log("It's Webnesday")
} else if (day === 4){ 
    console.log("It's Thursday")
} else if (day === 5){
    console.log("It's Friday")
} else if (day === 6) {
    console.log("It's Saturday")
} else if (day === 7) {
    console.log("It's Sunday")
} else {
    console.log(`${day} is not day`)
}

// SWITCH = can be an efficient replacement to many else if statements
const today = new Date().getDay(); // Lấy ra "thứ" hiện tại
/*
        0           1           2        3          4           5         6 
    ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
*/
switch (today) {
    case 0:
        console.log("It's Sunday")
        break;
    case 1:
        console.log("It's Monday")
        break;
    case 2:
        console.log("It's Tuesday")
        break;
    case 3:
        console.log("It's Webnesday")
        break;
    case 4:
        console.log("It's Thursday")
        break;
    case 5:
        console.log("It's Friday")
        break;
    case 6:
        console.log("It's Saturday")
        break;
    default:
        console.log(`${day} is not day`)
        break;
}