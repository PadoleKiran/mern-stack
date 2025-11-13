
try {
// async function getTodo() {
    let url = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let response = await url.json();
    let title = response.title;
    console.log(title);
}
catch (error) {
    console.log('Error:', error);
}
