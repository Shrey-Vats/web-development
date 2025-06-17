import { useEffect, useState } from "react"
import {usePost, useFetch} from "./hooks/useFetch";

const App = () => {
  const [customURL, setCustomURL] = useState(0)
  const { post, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + customURL, 1000);

  if(loading){
    return <div>loadding......</div>
  }

  return (
    <div>
      <button onClick={()=> setCustomURL(1)}>1</button>
      <button onClick={()=> setCustomURL(2)}>2</button>
      <button onClick={()=> setCustomURL(3)}>3</button>
      <button onClick={()=> setCustomURL(4)}>4</button>
      {JSON.stringify(post)}
    </div>
  );
}

export default App
