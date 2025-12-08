import { useEffect, useState } from "react"

export default function Users(){

    let [user,setUser] = useState([]);
    useEffect(()=>{
        fetch("https://json")
        .then(
            res => res.json()
        )
        .then(data => setUser(data));
    })
    return(
        <>
            {user.map((user)=>{<li key={user.id
            }>{user.name}</li>})}
        </>
    )
}