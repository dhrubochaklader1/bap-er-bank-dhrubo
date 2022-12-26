document.getElementById("btn-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    if (email === "dhrubochaklader1@gmail.com" && parseInt(password) === 1234) {
        alert("success")
        emailField.value = '';
        passwordField.value = '';
        window.location.href = "deposit.html";
    }
    else {
        alert("enter right information")
        emailField.value = '';
        passwordField.value = '';
    }
})