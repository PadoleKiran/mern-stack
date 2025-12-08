import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Assignment1/Home'
import Contact from './Assignment1/Contact'
import About from './Assignment1/About'
import Navbar from './Assignment2/Navbar'
import MovieList from './Assignment3/MovieList'
import Tasks1 from './NestedRouting/Task1'
import TaskAbout from './NestedRouting/TaskAbout'
import Company from './NestedRouting/Company'
import Team from './NestedRouting/Team'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/movie/:id' element={<MovieList />}></Route>

        <Route path='/task' element={<Tasks1 />}>
          <Route path='taskabout' element={<TaskAbout/>} />

          <Route path='company' element={<Company />} />
          <Route path='team' element={<Team />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
