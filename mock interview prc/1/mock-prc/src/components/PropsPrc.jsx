const PropsPrc = ({name="demo",age=0,post="not define",children}) => {
    return(
        <div>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Post : {post}</h2>

            {children}
        </div>
    )
} 

export default PropsPrc;