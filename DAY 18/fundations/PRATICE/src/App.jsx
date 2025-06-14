import { useEffect, useState } from "react"

const App = ()=>{
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(true)

  useEffect(()=>{
    setInterval(()=>{
      console.log("inside 5 second break")
      setStatus(c => !c)
    }, 5000)
  })

  return (
    <div>
      <h2>hi there</h2>
      {status &&< counter />}
    </div>
  )
}

const counter = ()=>{
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const counter = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);

    return ()=>{
      clearInterval(counter)
    }
  }, [])

  return (
    <div>
      <h3>{count}</h3>
    </div>
  )
}