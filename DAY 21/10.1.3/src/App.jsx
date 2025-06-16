import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)

  const clockStart = () => {
     const timer = setInterval(()=>{
      setCount(count => count + 1)
    }, 1000)

    setValue(timer)
  };

  const clockEnd = () => {
    console.log(value)
    clearInterval(value)
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clockStart}>Start</button>
      <button onClick={clockEnd}>Stop</button>
    </div>
  );
};

export default App;
