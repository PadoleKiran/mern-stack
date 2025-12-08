import { Outlet, Link } from "react-router-dom";

export default function Tasks1(){
    return(<div> 
        <h2>Task page</h2> 
        <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="team">Team</Link>
        <Link to="company">Company</Link>
        </nav>
        
        <Outlet />
        </div>
        )
}