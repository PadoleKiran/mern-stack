export default function Assignment3(){
    let age = 17;
    return(
        <>
            {age >= 18 ? <p>Adult</p> : <p>Minor</p>}
        </>
    )
}