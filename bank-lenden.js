
//deposit money
const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function () {
    const inputDepositAmount = document.getElementById('input-deposit-amount');
    const inputDepositAmountValue = inputDepositAmount.value;
    // console.log(inputDepositAmountValue);

    // adding input with total deposit money
    const totalDepositMoney = document.getElementById('total-deposit-money');
     const currentDepositMoney = totalDepositMoney.innerText ;

    const addTotalDepositMoney = parseFloat(inputDepositAmountValue) + parseFloat(currentDepositMoney);
    // addTotalDepositMoney.innerText = inputDepositAmountValue;
    totalDepositMoney.innerText = addTotalDepositMoney;

    //blank input box
    inputDepositAmount.value = '';
});