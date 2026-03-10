import React, { useEffect, useState } from 'react'

export const FetchUser = () => {

    const[data, setData] = useState([]);
    const[search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            }
            )
            .then((data)=>setData(data))
            .catch((e)=>{
                console.log(e);
            })
    })
    return (
        <div>   

            <input type="text" placeholder='enter text' value={search} onChange={(e)=>{setSearch(e.target.value)}} 
            />

            {
                data.length !==0 ? <ul>
                    {data.filter((users, index)=> (
                        users.name.toLowerCase().includes(search.toLowerCase())
                    )
                        
                    ).map((d,index)=>(<li key={d.id}>{d.name}</li>))
                    }
                </ul> : "Users not found"
            }

        </div>
    )
}

export default FetchUser
