import React from "react";

const App = () =>{
    const [count, setCount] = React.useState(0)

    return (
        <div>
           <button count={count} setCount={setCount}></button>
        </div>
    )

    function Button(props){
        function onButtonClick(){
            props.setCount(props.count + 1);
        }
        return (
            <button onClick={onButtonClick}> Counter {props.count}</button>
        )
    }
}