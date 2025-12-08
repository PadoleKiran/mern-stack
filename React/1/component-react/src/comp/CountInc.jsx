import { useState } from "react";

function CountInc(){
    let [Count, setCount] = useState(0);
    return (
        
        <>
        <h1>Count Incrementer</h1>
        <h2>Count: {Count}</h2>
        <button onClick={()=>{
            setCount(Count + 1);
        }}>Increment</button>

        <button onClick={()=>{
            setCount(Count - 1);
        }}>decrement</button>
        </>
    );
}

export default CountInc;