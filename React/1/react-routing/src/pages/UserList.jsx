import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

let userInfo = [
        {id: 1, name: "Kiran", place: "pune"}, 
        {id: 2, name: "gaurav", place: "Mochi"},
        {id: 3, name: "Sam", place: "Baner"}

]
export default function UserList() {
    const {u_id} = useParams()

    const user = userInfo.find(u => u.id === Number(u_id));
    return (
        <>
            {/* <h1>User List</h1>
            <p>Name </p>

            {userInfo.map((user) => {
                <div key={user.id}>
                    <Link to={`/users/${user.id}`} >
                    {user.name}
                    </Link>
                </div>
            })} */}

            {user ? (
                <>
                    <h2>User Details</h2>
                    <p>Name: {user.name}</p> 
                    <p>Place: {user.place}</p> 
                </>
            ):(
                <h3>User not Found</h3>
            )}
        </>
    );
}