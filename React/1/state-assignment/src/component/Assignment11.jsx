import { useState } from "react";


export default function Assignment11(){

    let [size, setSize] = useState("10");
    return (
        <>
            <p style={{fontSize: size}}>Live Preview {size}</p>
            <input type="range" name="" id="" min="10" max="48" value={size} onChange={(e) => setSize(Number(e.target.value))}/>

        </>
    );
}