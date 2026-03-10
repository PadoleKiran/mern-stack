// this will be reusable component

function User({data}){
    return(
        <div>
            <p>
                User ID : {data.id}, User Name : {data.name}
            </p>
        </div>
    )
}

export default User;