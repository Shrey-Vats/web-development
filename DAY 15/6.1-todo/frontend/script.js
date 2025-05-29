const API_URL = 'http://localhost:3001/todos';
const axios = require("axios");

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  // fetch todos
  

});

// Fetch todos from backend
const fetchTodos = async () => {
    //  write here
    const response = await axios.get(API_URL)
    const todos = response.data

    if(!Array.isArray(todos)){
        return 
    }

    todos.forEach(e => {
        addTodoToDOM(e)
    });
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    const todos = todo.title;
    const todoId = todo.todoId

    const list = document.querySelector("#todo-list");
    const li = document.createElement("li");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-check");

    const label = document.createElement("label");
    label.htmlFor = 'todo-check'
    label.textContent = todos;
    label.id = todoId

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(p);

    list.appendChild(li);

    input.value = "";
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', async () => {
    //  write here
    const input = document.querySelector("#todo-input");
    const inputText = input.value.trim();
    
    if(inputText.lenght <3){
        alert("Input is too short. Please enter at least 3 characters.");
        return;
    }

    const response = await axios.post({
        inputText
    })

    const todoId = response.data.todoId;

});



// Toggle todo completion
async function toggleTodo(id) {
//    write here
  const response = axios.put("http://localhost:3000/todos/status", {
    todoId: id,
  });

  if(!response){
     return
  }

  }

// Delete a todo
function deleteTodo(id) {
    // write here  
    
}

document.querySelectorAll(".todo-check").forEach((e) => {e.addEventListener("change", e => {

    if(e.checked){
        label.style.color = "gray";
        label.style.textDecoration = "line-through";
        label.style.fontStyle = "italic";

        const todoId = label.id

        toggleTodo(todoId)
    } else{
        label.style.color = "";
        label.style.textDecoration = "";
        label.style.fontStyle = "";
    }
    })
});
