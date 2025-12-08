import { useEffect, useState } from "react";

export default function Assignment8(){

    let [color, setColor] = useState("red");

    useEffect(()=>{
        console.log("Background changed!")
    })
    return (
        <>
        <p style={{padding : 100,background : color}}></p>
            <button  onClick={()=>{
                setColor(color === "red" ? "blue":"red");
            }}></button>
        </>
    )
}