document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if (newWithdrawAmount > 0 && previousBalanceTotal - newWithdrawAmount >= 500 && typeof (newWithdrawAmount) !== "string") {
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText = newBalanceTotal;

        const withdrawTotalElement = document.getElementById("withdraw-total");
        const previousWithdrawTotalString = withdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;
        withdrawField.value = '';
    }

    else {
        alert("There is no sufficient money in your account");
        withdrawField.value = '';
    }

})

document.getElementById("btn-logout").addEventListener("click", function () {
    window.location.href = "index.html";
})