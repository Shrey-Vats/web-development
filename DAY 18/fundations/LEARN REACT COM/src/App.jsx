import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount =() =>  setCount(count - 1)
  const resetCount =()=> setCount(0)
  
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
};

const Interval =()=>{
  const [count, setCount] = useState(0);

  useEffect(() =>{
    const id = setInterval(()=>{
      setCount(count => count + 1)
    }, 1000)
    
    return ()=>{ clearInterval(id)}
  }, [])

  return <h2>{count}</h2>
}

const App = () => {
  const [startVariabel, setStartVariabel] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setStartVariabel((c) => !c); // alternate every 5 seconds
    }, 5000); 

    return ()=>{clearInterval}
  }, []);

  if (!startVariabel) return <h2>Waiting...</h2>; // ✅ render something

  return (
    <div>
      {startVariabel && <Counter />}
      <h1>set interval</h1>
      {startVariabel && <Interval />}
    </div>
  );
};

export default App;
