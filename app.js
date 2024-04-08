const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

function onLoginSubmit() {
    const input = loginInput.value;
    if (input === '') {
        alert('Please write your name');
    } else if (input.length > 15) {
        alert('Your name is too long');
    } else {
        console.log('Hello', loginInput.value);
    }
}
loginButton.addEventListener('click', onLoginSubmit);