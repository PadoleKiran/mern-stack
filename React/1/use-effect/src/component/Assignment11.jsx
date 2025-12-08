import { useEffect, useState } from "react"

export default function Assignment11(){
    let [age,setAge] = useState(0);
    let [salary,setSalary] = useState(0);


    useEffect(()=>{
        if(age>0 && salary>0){
        console.log("Both running");
    }},[age,salary])
    return(
        <>
            <input type="number" name="age" id="age" placeholder="age" onChange={(e)=>{setAge(e.target.value)}}/>
            <input type="number" name="salary" id="salary" placeholder="salary" onChange={(e)=>{setSalary(e.target.value)}}/>
        </>
    )
}