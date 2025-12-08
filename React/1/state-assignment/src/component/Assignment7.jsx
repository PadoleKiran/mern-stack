import { useState } from "react";

export default function Assignment7(){
 

    let [fruits, setFruits] = useState([]);
    let [inputValue, setInputValue] = useState("");

    function addFruit(){
        if(inputValue.trim() === "") return;

        setFruits([...fruits, inputValue]);
        setInputValue("");
    }

    function removeFruit(){
        setFruits(fruits.slice(0,-1));
    }

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} />
            <button onClick={addFruit}>Add</button>
            <button onClick={removeFruit} disabled={fruits.length === 0}>Remove</button>


            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
    )
}