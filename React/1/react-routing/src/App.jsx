import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './component/NavBar'
import Products from './products/Product'
import UserList from './pages/UserList'
import Post from './pages/Post'

function App() {
  const [count, setCount] = useState(0)

  return (  
       <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>  
        <Route path='/product/:id' element={<Products  />}/>  
        <Route path='/users/:u_id' element={<UserList  />}/> 
        <Route path='/post/:id' element={<Post /> } /> 

      </Routes>
    </>
  )
}

export default App
