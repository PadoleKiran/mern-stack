import { useEffect, useState } from "react"

export default function First() {
    const [name,setName] = useState("")

    function handleInput(val){
        setName(val);
    }
    
    const [pokimon,setPokimon] = useState([]);
    const [power,setPower] = useState();

    useEffect(()=>{
            fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                // console.log(res.results)
                setPokimon(res.results)
                return fetch(res.results[0].url);
            })
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                console.log(res.types[0].type.name)
                setPower(res.types[0].type.name)
                
            })

            // fetch(toString(pokimon.url))
            // .then((res)=>{
            //     return res.json()
            // })
            // .then((res)=>{
            //     console.log(res)
            // })

        },[])


        

        // console.log(pokimon);
    return(
        <div>

            {pokimon.map((poki,index)=>(

                <li key={index}>{poki.name} : {power}</li>

            ))}
            

            <input type="text" onChange={(e)=>{handleInput(e.target.value)}}/>
            <p>name is {name}</p>
            {/* <button onClick={()=>{apiValue()}}></button> */}
        </div>
    )
}