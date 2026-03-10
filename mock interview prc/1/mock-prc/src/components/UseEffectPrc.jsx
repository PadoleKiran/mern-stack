import { useEffect, useState } from "react";

function UseEffectPrc(){

    const [count,setCount] = useState(0);

    function handleCount(){
        console.log(count);
    }

    // handleCount();   calling evey time if state change


    useEffect(()=>{
        handleCount();
    },[])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    )
}

export default UseEffectPrc;