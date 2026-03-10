import { useEffect, useState } from "react"

export default function FirstComponent(){
    const[data,setData] = useState([]);
    const [newData, setnewData] = useState([]);

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res)=>{ return res.json()})
        .then((d)=>{setData(d.results)})
        .catch((err)=>{
            console.log(err)
        })
    },[])

     useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res)=>{ return res.json()})
        .then((d)=>{
            // setData(d.results)
            // console.log("Data : " ,d) 
            return d.results 
        })
        .then((d2)=>{ 
            fetch(d2[0].url).
            then((res2)=> {return res2.json()}).
            then((d3)=> setnewData(d3)).
            catch((e)=>{
                console.log(e);
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    
    console.log(newData.types);
    console.log(data);

    return (
        <div>
            {/* {
                data.map((d,index)=>(
                    <li key={index}>{d.name}</li>
                ))
            } */}

            

            <h1>
                {
                data[0].name
            }

            </h1>
        </div>
    )
}


// hooks unmount 
// js theroy 
// promices - async awith try catch 

// loading error state try and catch

// express 