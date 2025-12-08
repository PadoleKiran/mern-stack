import { useEffect, useState } from "react";

export default function Assignment3() {
    // let [count, setCount] = useState(0);
    

    // useEffect(() => {
    //     console.log("Rendered!");
    // }, [count]);

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>
             Count: {count}
            </button>
        </div>
    )

}