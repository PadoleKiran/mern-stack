import { useState } from "react";

export default function Assignment4(){
    let [text, setText] = useState();

    return (
        <>
            <input onChange={(e)=>{setText(e.target.value)}} />
            <h1>{text}</h1>
        </>
    )
}