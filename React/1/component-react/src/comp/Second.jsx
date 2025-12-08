import { useState } from "react";

function Second(){
    let [form , setForm] = useState({name: "", age: ""});

    return(
        <>
            <div>
                <input type="text" name="" id="" placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} />

                <input type="text" placeholder="Age" onChange={(e) => setForm({...form, age: e.target.value})} />

                <p>{form.name} is {form.age} years old.</p>

                <button onClick={()=>{SVGAnimatedNumber(Math.floor(Math.random() * 100))}}>Generate</button>
            </div>
        </>
    );
}