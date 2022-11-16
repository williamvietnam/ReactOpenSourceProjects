const container = document.getElementById("container");
const thumbnail = document.getElementById("thumbnail-login");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const buttonLogin = document.querySelector('.form-submit');
const buttonRegister = document.querySelector('.register-account');

function main() {
    initializeEvents();
}

function initializeEvents() {
    buttonLogin.addEventListener('click', handleLoginClick)
}

const handleLoginClick = function handleLoginClick() {
    let emailValue = emailInput.value;
    let passValue = passInput.value;
    console.log('email: ' + emailValue + ' | ' + 'pass: ' + passValue);
    if (emailValue === 'admin' && passValue === 'admin') {
        window.location.href = '../home_page/home_index.html';
    } else {
        alert("Please type email and password again!");
    }
}

main();