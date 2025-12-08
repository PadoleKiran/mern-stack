import { use, useState } from "react"

export default function Assignment13(){
    let [val, setVal] = useState([]);

    
    function randomVal(){
        const random = Math.floor(Math.ramdom() * 100);
    }

    return(
        <>
            <button onClick={randomVal}>Add Random Bumber</button>

            <ul>
                
            </ul>
        </>
    )
}