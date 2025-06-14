const App = ()=>{
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <div>
        <button onClick={()=> {setVisible(!visible)}}>noooo</button>
        {visible && <p>hlo donecd </p>}
      </div>
    </div>
  );
}

export default App