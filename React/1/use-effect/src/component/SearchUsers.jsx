import { useEffect, useState } from "react";

export default function SearchUsers() {
    let [query, setQuery] = useState("");
    let [result, setResult] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
            .then(out => out.json())
            .then(data => setResult(data));
    }, [query]);

    return (
        <>
            <input type="text" placeholder="search..." onChange={(e) => { setQuery(e.target.value) }} />
            <br />
            <ul>
                {result.map(u => (
                    <li key={u.id}>{u.name} {u.email}</li>
                ))}
            </ul>
        </>
    )

}