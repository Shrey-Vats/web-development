import { useEffect, useState } from "react"

const App = ()=>{
  const [count, setCount] = useState(0)

  const increase =()=> setCount(count +1)
  const decrease =()=> setCount(count -1)
  return (
    <div>
      hello
      <counter count={count}/>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

const counter =(props)=>{
  
  useEffect(()=>{
    console.log("mounting")
    return ()=> console.log("unmount")
  }, [])

  useEffect(()=>{
    console.log("changes in count")

    return ()=> console.log('cleanup')
  }, [props.count])

  return(
    <div>
      counter {props.count}
    </div>
  )
}