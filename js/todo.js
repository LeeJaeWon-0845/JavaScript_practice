// 사용자에게 할일을 입력받아서 화면에 추가하는 기능
// 할일을 입력받기 위해 input 요소가 필요하다.
// 할일 목록을 나타내기 위해 list 요소가 필요하다.
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');

function onTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    console.log(newTodo);
    addTodo(newTodo);
}
function addTodo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
}
todoForm.addEventListener('submit', onTodoSubmit);