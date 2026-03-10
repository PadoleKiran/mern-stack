import User from "./User";

function ReuseAbleComponentExample(){
    const userData = [
        {
            id: 1,
            name: "kiran",
            email: "kiran@gmail.com"
        },
        {
            id: 2,
            name: "Gaurav",
            email: "gaurav@gmail.com"
        },
        {
            id: 3,
            name: "sam",
            email: "sam@gmail.com"
        }
    ]


    return(
        <div>
            {
                userData.map((val)=>(
                    <div key={val.id}>
                        <User data={val}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ReuseAbleComponentExample;