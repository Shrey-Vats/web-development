import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const useDebouncing = (callback) => {
  const ref = useRef()

  const fn = ()=> {
    clearTimeout(ref.current)
    ref.current = setTimeout(callback, 200)
  }

  return fn
};

const App = () => {

  const useDebounce = useDebouncing(searchBard)
  return (
    <div>
      <input type="text" onChange={useDebounce} />
    </div>
  )
}

const searchBard = () => {
  console.log("done !!");
};


export default App
