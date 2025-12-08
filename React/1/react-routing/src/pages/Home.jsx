import { Link } from "react-router-dom"
// import Post from "./Post"

let userInfo = [
        {id: 1, name: "Kiran", place: "pune"}, 
        {id: 2, name: "gaurav", place: "Mochi"},
        {id: 3, name: "Sam", place: "Baner"}

]
export default function Home() {

    return (
    <>
        <h2>Home Page</h2>
        
        <div>
            <h1>User List</h1>
            <p>Name </p>

            {userInfo.map((user) => {
                <div key={user.id}>
                    <Link to={`/users/${user.id}`} >
                    {user.name}
                    </Link>
                </div>
            })}
            {/* <Post /> */}
        </div>
    </>
    )
}