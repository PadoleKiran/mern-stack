import { useState } from "react"

export default function Assignment10(){
    let [val,setVal] = useState();
    return(
        <>
            <select name="sel" id="sel" onChange={e => setVal(e.target.value)}>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
            </select>
        </>
    )
}