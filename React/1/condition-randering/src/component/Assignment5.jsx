export default function Assignment5(props){
    return(
        <>
            <p>Hello {props.name}  {props.age} {props.isonline ? "online" : "Offline"}</p>
        </>
    )
}