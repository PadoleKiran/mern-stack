import Reac, { useState } from "react"

export default function Toggle(){
    
    const [val,setVal] = useState(1)
    return (

        <div>
            {val == 1 ? <h1>value is 1</h1>:
             val == 2 ? <h1>Value is 2</h1>:
             val == 3 ? <h1>Value is 3</h1>:
             null
            }

            <button onClick={()=> {
                setVal(val+1)
            }}>inc</button>
        </div>
    )
}