import React from 'react'
import Search from '../components/Search'
import Herobaner from '../components/Herobaner'
import { useState } from 'react'

function Home() {
  const[bodypart,setBodypart]=useState('all');
  const[exercises,setExercises]=useState([]);
  return (
    <div>

  
   <Herobaner setExercises={setExercises} bodypart={bodypart} setBodypart={setBodypart}/>
    <Search setExercises={setExercises} bodypart={bodypart} setBodypart={setBodypart}/>
    </div>
  )
}

export default Home