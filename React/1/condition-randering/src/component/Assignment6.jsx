export default function Assignment6({list}){
    return(

            <ul>
                {list.map((element,i) => (
                    <li key={i}>{element}</li>
                ))}
            </ul>

    )
}