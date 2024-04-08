const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    const input = loginInput.value;
    localStorage.setItem(USERNAME, input);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${input}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit 이벤트는 기본적으로 새로고침을 발생시킨다. 
// 이를 막기 위해 preventDefault()를 사용한다.
// submit 이벤트는 form 태그에서만 발생한다.
// 엔터또는 버튼을 누르면 submit 이벤트가 발생한다.

const savedUsername = localStorage.getItem(USERNAME);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
