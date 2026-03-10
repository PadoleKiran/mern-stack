export default function UseCallBackFun({val, valFun}){

    // console.log(valFun());
    return(
        <div>
            <p>Value is {val} </p>
            <button onClick={valFun}>count</button>
        </div>
    )
}
