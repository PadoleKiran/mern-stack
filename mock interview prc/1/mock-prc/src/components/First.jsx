export default function First() {

    const component_num = "First";
    const obj = {
        name: "kiran",
        number: 9850780471,
        age: 24
    }

    const friend_name = "Gaurav";

    const arr = ["sam","Teju","gro","kun"];

    function handle() {
        alert("name")
    }

    return (
        <div>
            <h1>Welcome to {component_num} component</h1>

            <h2>Profile</h2>
            <section>
                <h3>Name : <b>{obj.name}</b></h3>
                <h3>Mobile Number : {obj.number}</h3>
                <h3>Age : {obj.age}</h3>
            </section>

            <p>{friend_name ? friend_name : "Value not found"}</p>

            <button onClick={handle}>Click me</button>
        </div>
    )
}