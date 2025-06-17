import { useState } from "react"
import usePre from "./hooks/usePre";

const App = () => {
  const [state, setState] = useState(0);
  const pre = usePre(state)

  return (
    <div>
      <h3>{state}</h3>
      <button onClick={() => setState(value => value + 1)}>Increase</button>
      <p>previous value is {pre}</p>
    </div>
  )
}

export default App 