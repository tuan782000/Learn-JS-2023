const calculate = () => {
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value); // chuyển đổi giá trị principalInput thành số xong lưu vào biến principal
    let rate = Number(rateInput.value / 100); // chuyển đổi giá trị rateInput thành số và /100 cho ra tỉ lệ
    let years = Number(yearsInput.value); // chuyển đổi giá trị yearsInput thành số xong lưu vào biến years

    // Check điều kiện principal nếu mà vào các trường hợp sau thì phải set cái principal = 0 và gán lại giá trị input là 0
    if (principal < 0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0;
    }
    // tương tự
    if (rate < 0 || isNaN(rate)) {
        rate = 0;
        rateInput.value = 0;
    }
    // tương tự
    if (years < 0 || isNaN(years)) {
        years = 0;
        yearsInput.value = 0;
    }
    // sau khi vượt qua các if chạy đến đây
    const result = principal * Math.pow((1 + rate / 1), 1 * years)
    
    totalAmount.textContent = result.toLocaleString(undefined, { style: "currency", currency: "USD" });
}


export { calculate }