export default function Assignment13(){
    return(
        <>
            <UserRole name="kiran" role="admin"></UserRole>
        </>
    )
}


function UserRole({name,role}){
    return(
    <>
        <h2>name : {name} and role : {role}</h2>
        <h2>{role === "admin" ? "You loged in":"you are not admin"}</h2>
    </>
    )
}