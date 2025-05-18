const summitBtn = document.querySelector(".summit-button");
const body = document.querySelector('body')
const inputBox = document.querySelector(".input");

let todos = []
let delectBtn;

function addTodo() {
  todos.push({ 
    title: inputBox.value,
    id:1
  });
  render();
}

function render(){
    let term = todos.length - 1;
    const todo = todos[term].title;

    const spanText = document.createElement('span')
    delectBtn = document.createElement('button')
    const mainDiv = document.createElement('div')

    spanText.textContent = todo;
    delectBtn.textContent = 'remove'

    mainDiv.appendChild(spanText);
    mainDiv.appendChild(delectBtn);

    body.appendChild(mainDiv);
    inputBox.value = '';
}

function delectTodo() {
  const parentEl = delectBtn.parentElement;
  parentEl.remove();
}

summitBtn.addEventListener("click", () => {
  addTodo();
});
delectTodo.addEventListener("click", () => {
  delectTodo();
});