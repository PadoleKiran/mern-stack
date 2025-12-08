import { useState } from "react";

function One(){
    let [items, setItems] = useState([]);
    let [tasks, setTasks] = useState([]);

    return (
        <>
            <div>
                <button onClick={() => {
                    setItems([...items, `Item ${items.length + 1}`]);
                }}>Add Item</button>

                <p>{items}</p>
            </div>
        </>
    )
}

export default One;