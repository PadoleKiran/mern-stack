import { useState } from "react"

export default function Assignment8(){
    let [st1, setSt1] = useState();
    let [st2, setSt2] = useState();
    let [st3, setSt3] = useState();

    
    function submitForm(){
        let name = st1;

    }


    return (
        <>
            <form>
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" onChange={(e) => {setSt1(e.target.value)}}/>

                <label htmlFor="city">City : </label>
                <input type="text" id="city" onChange={(e) => {setSt2(e.target.value)}}/>

                <label htmlFor="age">Age : </label>
                <input type="number" id="age" onChange={(e) => {setSt3(e.target.value)}}/>

                <button onClick={submitForm()}>Submit</button>
            </form>

            <ul>
                <li>{st1}</li>
                <li>{st2}</li>
                <li>{st3}</li>
            </ul>
        </>
    )
}