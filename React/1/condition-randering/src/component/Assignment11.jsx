export default function Assignemnt11(props){
    return(
        <>
            <Level1 name={props.name}/>
        </>
    )
}

function Level1(props){
    return(
        <>
            <Level2 name={props.name}/>
        </>
    )
}



function Level2(props){
    return(
        <>
            <Level3 name={props.name}/>
        </>
    )
}



function Level3(props){
    return(
        <>
            <h1>hi {props.name}</h1>
        </>
    )
}