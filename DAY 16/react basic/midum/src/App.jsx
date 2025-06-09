import React, { useState } from "react";

const app = ()=>{
  const [count, setCount] = useState(0);
  const onButtonClick = ()=>{
    setCount(count + 1)
  }

  return (
    <button onClick={onButtonClick}>Count {count}</button>
  )
}

export default app