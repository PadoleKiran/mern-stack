import { useState } from "react"

export default function Assignment5(){
    let [color, setColor] = useState("yellow");
    return (
        <>
            <div style={{height:"150px" , border:"2px solid black", width:"150px", backgroundColor:color}}></div>
            <button onClick={() => {
                setColor("red");
            }}>Red</button>

            <button onClick={() => {
                setColor("green");
            }}>Green</button>

            <button onClick={() => {
                setColor("blue");
            }}>Blue</button>
        </>
    )
}