import { createContext, useContext, useRef, useState } from 'react'

const CountContext = createContext()

const ContextProvider = ({childern}) => {
  const [count, setCount] = useState(0);
  const valueRef = useRef(null);

  <CountContext.Provider
    value={{
      count: count,
      setCount: setCount,
      valueRef: valueRef,
    }}
  >
    {childern}
  </CountContext.Provider>;

}

function App() {

  return (
    <div>
      <ContextProvider>
        <Counter />
      </ContextProvider>
    </div>
  );
}

const Counter = () => {

  return (
    <div>
      <display />
      <buttons />
    </div>
  )
}

const display = () => {

  const {count} = useContext(CountContext)
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

const buttons = () => {
  const {count, setCount, valueRef} = useContext(CountContext)
  const startCount = () => {
    console.log("start");
    valueRef.current = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);
  };
  const stopCount = () => {
    console.log("stop");
    clearInterval(valueRef.current);
  };

  return (
    <div>
      <button onClick={startCount}>start</button>
      <button onClick={stopCount}>Stop</button>
    </div>
  );
}

export default App
