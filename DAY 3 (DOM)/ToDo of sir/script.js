const inputText = document.querySelector("#input");
const summitBtn = document.querySelector("#summit");
const todoList = document.querySelector(".todo-list");

summitBtn.addEventListener("click", ()=>{
    const inputValue = inputText.value;
    
    const li = document.createElement('li')
    li.textContent = inputValue;
    
    todoList.appendChild(li)
    inputText.value = "";

    const delectBtn = document.createElement('button')
    delectBtn.innerText = "removed"
    li.appendChild(delectBtn)

    delectBtn.addEventListener("click", ()=>{
        const parentEl = delectBtn.parentElement;
        parentEl.remove()
    })

    const editBtn = document.createElement('button')
    editBtn.innerText = 'edit'
    li.appendChild(editBtn)

    editBtn.addEventListener("click", ()=>{
        const parentEl = editBtn.parentElement;
        inputText.value = parentEl.textContent;
        parentEl.remove()
    })
})