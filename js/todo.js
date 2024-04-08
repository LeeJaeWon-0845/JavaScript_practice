// 사용자에게 할일을 입력받아서 화면에 추가하는 기능
// 할일을 입력받기 위해 input 요소가 필요하다.
// 할일 목록을 나타내기 위해 list 요소가 필요하다.
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');
const TODO_KEY = "todos";
let todos = [];

function saveTodos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const removedLi = event.target.parentElement
    removedLi.remove();
}

function onTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    todos.push(newTodo);
    console.log(newTodo);
    addTodo(newTodo);
    saveTodos();
}
function addTodo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const button = document.createElement('button');
    button.addEventListener('click', deleteTodo)
    button.innerText = '❌';
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
todoForm.addEventListener('submit', onTodoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);
if (saveTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(addTodo);
}