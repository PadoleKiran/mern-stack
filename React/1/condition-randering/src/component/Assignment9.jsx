export default function Assignment9({onpres}){
    return(
        <>
            <h1>Assignemnt 9</h1>

            <ProductCard title="iphone" inStock={false} />
            <br />
            <button onClick={onpres}>gt click me</button>
           
        </>

    )
}

function ProductCard(props){
    return (<>
         {props.title} {props.inStock ? "is In Stock" : "is Out of Stock"}
    </>)
}