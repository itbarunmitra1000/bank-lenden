
//deposit money
const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function () {
    const inputDepositAmount = document.getElementById('input-deposit-amount');
    const inputDepositAmountValue = inputDepositAmount.value;
    // console.log(inputDepositAmountValue);


    // adding input with total deposit money
    const totalDepositMoney = document.getElementById('total-deposit-money');
    const currentDepositMoney = totalDepositMoney.innerText;

    const addTotalDepositMoney = parseFloat(inputDepositAmountValue) + parseFloat(currentDepositMoney);

    totalDepositMoney.innerText = addTotalDepositMoney;

    // add blance money 
    const totalBalanceMoney = document.getElementById('total-balance-money');
    const currentTotalBalanceMoney = totalBalanceMoney.innerText;
    // console.log(currentTotalBalanceMoney);
    const totalBalance = parseFloat(currentTotalBalanceMoney) + parseFloat(inputDepositAmountValue);
    totalBalanceMoney.innerText = totalBalance;

    //blank input box
    inputDepositAmount.value = '';

});

// withdrawn part

const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function () {
    const inputWithdrawAmount = document.getElementById('input-withdraw-amount');
    const inputWithdrawAmountValue = inputWithdrawAmount.value;

    const totalWithDrawMoney = document.getElementById('total-withdraw-money');
    const currentWithdrawMoney = totalWithDrawMoney.innerText;
    const addTotalWithdrawMoney = parseFloat(inputWithdrawAmountValue) + parseFloat(currentWithdrawMoney);
    totalWithDrawMoney.innerText = addTotalWithdrawMoney;



    const totalBalanceMoney = document.getElementById('total-balance-money');
    const currentTotalBalanceMoney = totalBalanceMoney.innerText;
    const totalBalance = parseFloat(currentTotalBalanceMoney) - parseFloat(inputWithdrawAmountValue);
    totalBalanceMoney.innerText = totalBalance;

    // blank input box 
    inputWithdrawAmount.value = '';



})