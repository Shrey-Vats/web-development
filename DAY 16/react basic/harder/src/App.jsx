import React, { useState } from "react";

const App = ()=>{
  const [todos, setTodo] = useState([])

  const addTodo = ()=>{
    const title = "do one video"
    const description = "it is time to prove yourself. now the time to the time improve the condistion"
    const done = true

    const newTodo = [...todos]
    newTodo.push({
      title: title,
      description: description,
      done: done
    })
    setTodo(newTodo)

    console.log(todos)
  }

  return (
    <div>
      <input type="text" id="todoTitle" />
      <input type="text" id="todoDescription" />
      <button onClick={addTodo}>add todo</button>
      {todos.map((todo) => (
    <Todo
      title={todo.title}
      description={todo.description}
      done={todo.done}
    />
    ))}
    </div>
  );
  
}
const Todo = (props)=>{
  return (
    <div>
      <h1></h1>
      <ul>
        <li>{props.title}</li>
        <li>{props.description}</li>
        <li>{props.done}</li>
      </ul>
    </div>
  );
}

export default App