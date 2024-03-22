import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './Pages/Home'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ExerciseDetails from './Pages/ExerciseDetails'
import './App.css';


function App() {
  return (
    <div>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />
       <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App