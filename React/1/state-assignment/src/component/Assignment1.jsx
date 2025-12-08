import { useState } from "react"; 

function Assignment1() {
    // let num = 5;
    let [count, setCount] = useState(1);
    return (
        <div>
            <h1>Number : {count} </h1>
            <button onClick={() => setCount(count * 2)}>Double</button>
            
            <button onClick={() => setCount(count * 3)}>Triple</button>
        </div>
    )
}
    
export default Assignment1;