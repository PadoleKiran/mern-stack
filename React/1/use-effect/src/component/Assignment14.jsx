export default function Assignment14(){
    return(
        <>
            <Parent country={["India","USA","Japan"]} />
        </>
    )
}

function Parent({country}){
    return(
        <>
            <Child country={country}/>
        </>
    )
}


function Child({country}){
    return(
        <>
            <ul>
                {/* <li>{country}</li> */}
                {country.map(data =>()
                    <li>{data}</li>
                ))}
            </ul>
        </>
    )
}