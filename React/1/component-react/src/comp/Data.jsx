function Data(){
    let student = "kiran";
    let course = "React Essentials";
    let time = new Date().toLocaleTimeString();

    return (<>
    <h3>This is Data Component</h3>

    <h4>Student: {student}</h4>
    <h4>course: {course}</h4>
    <h4>Session Time: {time}</h4>
    </>)
}

export default Data;