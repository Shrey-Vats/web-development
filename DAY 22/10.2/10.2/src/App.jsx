import { useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const valueRef = useRef(null)

  return (
    <div>
      < Counter const valueRef={valueRef} count={count} setCount={setCount} />
    </div>
  )
}

const Counter = ({count, setCount, valueRef}) => {

  const startCount = () => {
    console.log("start")
     valueRef.current  = setInterval(() => {
      setCount(value => value + 1)
    }, 1000)
  }
  const stopCount = () => {
    console.log("stop")
    clearInterval(valueRef.current)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={startCount}>start</button>
      <button onClick={stopCount}>Stop</button>
    </div>
  )
}

export default App

