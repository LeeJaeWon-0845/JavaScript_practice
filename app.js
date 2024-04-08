const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');

function onLoginSubmit(event) {

    const input = loginInput.value;
    event.preventDefault();
    console.log(loginInput.value);

}

loginForm.addEventListener('submit', onLoginSubmit);
// submit 이벤트는 기본적으로 새로고침을 발생시킨다. 
// 이를 막기 위해 preventDefault()를 사용한다.
// submit 이벤트는 form 태그에서만 발생한다.
// 엔터또는 버튼을 누르면 submit 이벤트가 발생한다.