import { useState } from "react";

function Assignment2() {
    let [message, setMessage] = useState(true);
    return (
        <>
            {/* <div className="assignment-card">
                <h2>{message ? "Hello Student!" : "Goodbye Student!"}</h2>
                <button onClick={()=>{ setMessage(!message) }}>Click me</button>

            </div> */}

            <div>
                <h1>{message ? "Gt waiting for nandu" : "Gt waiting for manju" }</h1>
                <button onClick={()=>{setMessage(!message)}}>Click GT</button>
            </div>
        </>
    )
}

export default Assignment2;