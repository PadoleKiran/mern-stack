// this is example of loop in react js we can use map function 

function LoopWithMap() {
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

    
    return (
        <div>
            <h1>Loop with map</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>

                <tbody>

                    {/* static data  */}
                    {/* <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>email id</td>
                    </tr> */}

                    {userData.map(val => (
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}


export default LoopWithMap;