const input = document.querySelector(".todo-input");
const summitBtn = document.querySelector(".summit");
const list = document.querySelector(".list-section");
const tasks = document.querySelectorAll(".task");

summitBtn.addEventListener('click', ()=>{
    const inputText = input.value;
    const li = document.createElement('li')
    li.innerHTML = inputText;

    list.appendChild(li)
    input.value = '';

    const button= document.createElement('button')
    button.innerText = 'Remove'
    li.append(button);

    button.addEventListener("click", () => {
    const parentEl = button.parentElement;
    parentEl.remove();

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    li.append(editBtn);

    editBtn.addEventListener("click", () => {
    const parentEl = editBtn.parentElement;
    input.value = parentEl.textContent;
    parentEl.remove();
      });

      li.append(button, editBtn);
    });
})

