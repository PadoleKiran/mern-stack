import { useState } from "react";

export default function ControlledComponent() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>
            <label htmlFor="Name">Name : </label>
            <input type="text" onChange={(event)=>{setName(event.target.value)}} />

            <br />
            <label htmlFor="Email">Email : </label>
            <input type="email" onChange={(event)=>{setEmail(event.target.value)}} />

            <br />
            <label htmlFor="password">Password : </label>
            <input type="password" onChange={(event)=>{setPassword(event.target.value)}} />

            <button onClick={()=>{setName(""),setEmail(""),setPassword("")}}>reset</button>
            <br />

            <section>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <h2>{password}</h2>
            </section>
        </div>
    )
}