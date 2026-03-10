import { useState } from 'react'

import './App.css'
// import First from './components/first'
import Toggle from './components/toggle'
import PropsPrc from './components/PropsPrc'
import ControlledComponent from './components/ControlledComponent'
import CheckBox from './components/CheckBox'
import LoopWithMap from './components/LoopWithMap'
import ReuseAbleComponentExample from './components/ReuseAbleComponentExample'
import UseEffectPrc from './components/UseEffectPrc'
import UseCallBackFun from './components/UseCallBackFun'
import FetchUser from './components/FetchUser'
import FirstComponent from './components/FirstComponent'
import First from './compo/first'

function App() {
  const [count, setCount] = useState(0)
  // const name = "kiran";
  // const age = 24;
  // const post = "mern stack dev";

  // const [name, setName] = useState("sam");
  // const [age, setAge] = useState(24);
  // const [post, setPost] = useState("flutter dev");

  // const [value, setVal] = useState(true)

  // const user1 = {
  //   name : "kiran",
  //   age : 24,
  //   post : "mern stack dev"
    
  // }

  // const user2 = {
  //   name : "Gaurav",
  //   age : 24,
  //   post : "mern stack dev",
  //   val: value
  // }

  const [val,setVal] = useState(0);
  const handleChildFun = () => {
    console.log("checking")
    return "This is child function"
  }

  return (
    <div>
      {/* <First /> */}

      {/* <Toggle /> */}

      {/* <PropsPrc name={user1.name} age={user1.age} post={user1.post}/>
      <hr />

      {value== true? <PropsPrc name={user2.name} age={user2.age} post={user2.post}/> : null}

      <hr />

      <PropsPrc name={name} age={age} post={post}/>
      
      <hr />

      <PropsPrc><h1>Testing</h1></PropsPrc> */}


        {/* <ControlledComponent /> */}

        {/* <CheckBox /> */}

        {/* <LoopWithMap /> */}

        {/* <ReuseAbleComponentExample /> */}

        {/* <UseEffectPrc /> */}

        {/* <UseCallBackFun val = {val} valFun={handleChildFun}/>

        <button onClick={()=>{setVal(val+1)}}>click</button> */}

        {/* <FetchUser /> */}

        {/* <FirstComponent /> */}

        <First />

    </div>
  )
}

export default App
