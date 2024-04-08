const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

function onLoginSubmit() {
    const input = loginInput.value;
    console.log(loginInput.value);

}
loginButton.addEventListener('click', onLoginSubmit);