import { useState } from 'react'
// import Ass1 from './component/Ass1';
// import One from './component/One.jsx'

// import Ass2 from './component/Ass2'
// import Assignment3 from './component/Assignment3'
// import Assignment4 from './component/Assignment4'
// import Assignment5 from './component/Assignment5'
// import Assignment6 from './component/Assignment6'
// import Assignment8 from './component/Assignment8'
// import Assignment7 from './component/Assignment7'
// import Assignment9 from './component/Assignment9'
// import Assignemnt11 from './component/Assignment11'
// import Assignemnt12 from './component/Assignment12'
// import Assignment13 from './component/Assignment13'
// import Assignment14 from './component/Assignment15'
import Assignment15 from './component/Assignment15'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <One /> */}
      {/* <Greeting name="kiran" age={24} /> */}

      {/* <UserCard name="gaurav" message={true}/> */}

      {/* <NewButton color="red" name="Login" />
      <NewButton color="blue" name="sign in"/>
      <NewButton color="green" name="log out"/>
      <CartProduct title="iphone" price="999" stock="in stock" color="green"></CartProduct>
      <CartProduct title="head phone" price="559" stock="out stock" color="red"></CartProduct> */}

      {/* <NextAss name="Kiran" age="24" email="kiran@gmail.com" arr={["html","css","react"]}/> */}


      {/* <FourthAssignment name="kiran"/>
      <FiveAssignment ></FiveAssignment>
      <SixAss /> */}

      {/* <Ass2></Ass2> */}

      {/* <Ass2 />*/}

      {/* <Assignment3 /> */}
{/* 
      <Assignment4 name="kiran" city="pune"/>
      <Assignment5 name="kiran" city="pune" isonline="true"/>
      <Assignment6 list={["js","java"]}/>
      <Assignment8/>
      <Assignment7 info={{name:"kiran", age:"24" , email:"kiran@gmail.com" }}/> */}

      {/* <Assignment9 onpres={()=>{ alert("sam boy also got girlfriend and you still ...")}}/> // 9 and 10 */}

      {/* <Assignemnt11 name="kiran"/> */}
      {/* <h1>gaurav</h1> */}

      {/* <Assignemnt12 message="welcome User" /> */}

      <Assignment15 />
    </>
  )
}

export default App


// function SixAss(){
//   let [val,setVal] = useState(0);

//   return(
//     <>
//     <br />
//     <br />
//       <h1>{val}</h1>
//       {/* <input type="number" defaultValue={1} onChange={(e)=>{setVal2(e.target.value)}}/> */}
//       <button onClick={()=>{
//         val<10 ? setVal(val+1) : val
//       } } disabled={val===10}>+1</button>
//       <button onClick={()=>{val>0 ? setVal(val-1):val}} disabled={val===0}>-1</button>
//       <button onClick={()=>{setVal(0)}}>Reset</button>
//     </>
//   )
// }

// function FiveAssignment(props){
//   let [count,setCount]=useState(0);
//   return(
//     <>

//     <>
//         <p>{count}</p>
//         <button onClick={()=>{
//           setCount(count+1);
//         }}>increse</button>

//         <button onClick={()=>{
//           setCount(count>0 ?count-1:0);
//         }}>decrease</button>
        
//     </>

//     </>
//   )
// }

// function FourthAssignment(props){
//   let [count, setCount] = useState(0);
//   return(
//     <>
//         <p>{count}</p>
//         <button onClick={()=>{
//           setCount(count+1);
//         }}>increse</button>
//     </>
//   )
// }




// function NextAss(props){
//   return (
//     <>
//         <p>{props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>Email: {props.email}</p>
//         <h2>Skills: </h2>
//         <ul>
//           {/* {props.arr.forEach(element => {
//               <li>{props.element}</li>
//           })} */}
//           <ul>
//             {/* <li id={i}>{n}</li> */}
//             {props.arr.map((i,s) => ())}
//           </ul>
//         </ul>
//     </>
//   )
// }


// function Greeting(props){
//   return (
//     <>
//       <h1>Hey {props.name} wellcome ! your age is {props.age}</h1>
//     </>
//   )
// }

// function UserCard(props){
//   return (
//     <>
//       <h1>Hey I am gaurav witing for {props.message? "Nandu":"Manju"}</h1>
//     </>
//   )
// }




// // function NewButton(props){
// //   return (
// //     <>
// //       <button style={{backgroundColor: props.color}}>{props.name}</button>
// //     </>
// //   )
// // }

// function NewButton(props){
//   return (
//     <button style={{ backgroundColor: props.color, color: 'white', gap: "20px" , borderRadius: "50px"}}>
//       {props.name}
//     </button>
//   );
// }



// function CartProduct(props){
//   return(
//     <>
//       <h1>{props.title}</h1>
//       <h2>{props.price}</h2>
//       <h3 style={{color: props.color}}>{props.stock}</h3>
//     </>
//   )
// }


