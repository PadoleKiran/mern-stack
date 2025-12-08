export default function Assignemnt12({message}){
    return(
        <>
            <Level1 message={message}/>
        </>
    )
}

function Level1({message}){
    return(
        <>
            <Level2 message={message}/>
        </>
    )
}



function Level2({message}){
    return(
        <>
                <Card>
                <h3>
                    {message}    
                </h3>
                </Card>
        </>
    )
}



function Card({ children }){
    return(
        <>
            <h1>{children}</h1>
        </>
    )
}