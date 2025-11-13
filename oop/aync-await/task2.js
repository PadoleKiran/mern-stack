
async function abc() {
    try {

        let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let res = await data.json();

        let data2 = await fetch(`https://jsonplaceholder.typicode.com/users/${res.userId}`);
        let res2 = await data2.json();




        console.log(res2.name);


    }
    catch (err) {
        console.log(err);
    }
}


abc();




// laxical scoping 
// closure - access to the parent scope if paent return then also access 