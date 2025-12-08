export default function Ass1(){
    const isLoggedIn = true;
    const username = "kiran";
    
    return(
        
        <>
            {isLoggedIn ? <p>Welcome, {username}</p> : <p>Please Login first</p>}
        </>
    )
}



function Val(){

}