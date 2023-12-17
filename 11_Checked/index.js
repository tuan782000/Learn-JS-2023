// Checked = property that determines the checked state of an HTML checkbox or radio button element

const subscribeBtn = document.getElementById('subscribeBtn')

const visaBtn = document.getElementById('visaBtn')
const masterCardBtn = document.getElementById('masterCardBtn')
const payPalBtn = document.getElementById('payPalBtn')
const buttonBtn = document.getElementById('buttonBtn')

const resultSub = document.getElementById('resultSub')
const result = document.getElementById('result')


buttonBtn.onclick = function () {
    if(subscribeBtn.checked){
        resultSub.innerText = `You are subscribed to my Channel`;
    } else {
        resultSub.innerText = `You should subscribe to my Channel`;
    }

    if (visaBtn.checked) {
        result.innerText = `You are paying with visa`;
    } else if (masterCardBtn.checked) {
        result.innerText = `You are paying with Master Card`;
    } else if (payPalBtn.checked) {
        result.innerText = `You are paying with PayPal`;
    } else {
        result.innerText = `If you want donate me you can choose any pay method`;
    }
}






