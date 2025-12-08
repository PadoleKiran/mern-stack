

export default function Assignment15(){
    return(
        <>
            <A status="Online"></A>
        </>
    )
}

function A({status}){
    return(
        <>
            <B status={status}></B>
        </>
    )
}

function B({status}){
    return(
        <>
            <StuatusBox status={status}></StuatusBox>
        </>
    )
}

function StuatusBox({status}){
    return (
        <h3 style={{color: status === "Online"? "Green" : "red"}}>{status}</h3>
        
    )
}