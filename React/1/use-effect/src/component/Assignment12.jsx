import { useEffect, useState } from "react"

export default function Assignment12(){
    let [val,setVAl] = useState("");
    let [salary,setSalary] = useState(0);

    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${val}`)
        .then(res => res.json())
        .then(data => data.length < 3?  console.log(data) : console.log("type atleaset 3 char"));
    })
    return(
        <>
           <input type="text" name="val" id="val" className="val" onChange={(e)=>{setVAl(e.target.value)}}/>

           {query.length < 3 ? (
                <p>Please type at least 3 characters!</p>
            ) : (
                <ul>
                    {result.map((u) => (
                        <li key={u.id}>{u.name}</li>
                    ))}
                </ul>
            )}{query.length < 3 ? (
                <p>Please type at least 3 characters!</p>
            ) : (
                <ul>
                    {result.map((u) => (
                        <li key={u.id}>{u.name}</li>
                    ))}
                </ul>
            )}
        </>
    )
}