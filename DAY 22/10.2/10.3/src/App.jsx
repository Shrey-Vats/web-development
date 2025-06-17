import { createContext, useContext, useState } from "react"

const CountContext = createContext()

const ContextProvider = ({children}) => {
  const [count, setCount] = useState(0);

  return (
      <CountContext.Provider value={{
        count,
        setCount
      }}>
        {children}
      </CountContext.Provider>
  )
}

const App = () => {
  return (
    <div>
      < Parents />
    </div>
  )
}

const Parents = () => {

  return (
    <div>
      <ContextProvider>
        <Display />
        <Add />
        <Substrate />
      </ContextProvider>
    </div>
  );
}

const Display = () => {
const {count} = useContext(CountContext)

  return(
    <div>
      <h3>{count}</h3>
    </div>
  )
}

const Add = () => {
  const {setCount} = useContext(CountContext)

  return(
    <div>
      <button onClick={()=> setCount(value => value + 1)}></button>
    </div>
  )
}

const Substrate = () => {
  const {setCount} = useContext(CountContext)

  return(
    <div>
      <button onClick={()=> setCount(value => value - 1)}></button>
    </div>
  )
}

export default App