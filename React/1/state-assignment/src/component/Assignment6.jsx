import { useState } from "react"

export default function Assignment6(){
    let [num, setNum] = useState(1);

    function inc(){
        return setNum(num + 2);
    }
    function dec(){
        return setNum(num - 2);
    }

    return(
        <>
            <h1>Number : {num}</h1>

            <button onClick={inc}>Increase</button>

            <button onClick={dec}>decrease</button>
        </>
    )
}