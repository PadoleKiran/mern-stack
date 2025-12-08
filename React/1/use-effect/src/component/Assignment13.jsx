import { useEffect, useState } from "react"

export default function Assignment13(){
//     let [count,countTime] = useState(0);

//     newFun(){
//     useEffect(()=>{
//         setInterval(()=>{
//             countTime(count+1)
//         })
//     })
// }
//     return(
//         <>
//             <h2>{count}</h2>
//             <button onClick={()=>{countTime()}}>Start</button>
//             <button onClick={()=>{countTime()}}>Stop</button>
//         </>
//     )

 const [running, setRunning] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!running) return;

        const id = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);

        return () => clearInterval(id);
    }, [running]);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>

            <p>{running ? "Running…" : "Stopped."}</p>
        </div>
    );
}   