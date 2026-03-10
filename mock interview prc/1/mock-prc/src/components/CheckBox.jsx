import { useState } from "react";

function CheckBox() {

    const [skills,setSkills] = useState([])
    function handleCheck(event){
        console.log(event.target.value,event.target.checked)

        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else(
            setSkills([skills.filter(val => (val != event.target.value))])
        )
    }


    const [gen,setGen] = useState("female");

    const [selecDropDown, setSelect] = useState("nagput");

    return(
        <div>
            <h1>Check box's</h1>

            <input type="checkbox" name="java" id="ch-j" value={"java"} onChange={handleCheck}/>
            <label htmlFor="ch-j">Java</label>

            <input type="checkbox" name="python" id="ch-p" value={"Python"} onChange={handleCheck}/>
            <label htmlFor="ch-p">Python</label>

            <input type="checkbox" name="js" id="ch-js" value={"js"} onChange={handleCheck}/>
            <label htmlFor="ch-js">Js</label>

            <h1>{skills.toString()}</h1>


            <br /><br /><br />
            <h1>Radio button</h1>
            
            <input type="radio" name="gender" id="male" value={"male"} onChange={(event)=>setGen(event.target.value)} checked={gen=="male"}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value={"female"} onChange={(event)=>setGen(event.target.value)} checked={gen=="female"}/>
            <label htmlFor="female">Female</label>


            <h1>{gen}</h1>


            <h1>Select down</h1>

            <select onChange={e => {setSelect(e.target.value)}} defaultValue={"nagpur"} value={selecDropDown} >
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="nagput">Nagpur</option>
            </select>

            <h1>{selecDropDown}</h1>

        </div>
    )
}

export default CheckBox;