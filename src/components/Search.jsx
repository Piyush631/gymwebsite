import React, { useEffect, useState } from 'react'
import {exerciseOption,fetchData} from '../Pages/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

function Search({setExercises,bodypart,setBodypart}) {
   const [search,setSearch]=useState('');
   
   const[bodyparts,setBodyparts]=useState([]);
 useEffect(()=>{
    const fetchExerciseData=async()=>{
       
        const bodyPartsList=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOption);
        setBodyparts(bodyPartsList);
    }
    fetchExerciseData();

 },[])
   const handleEvent=async()=>{
    if(search)
    {
      
        const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOption);
        const searchExercise=exerciseData.filter(
            (exercise)=>exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
        )
       setSearch('');
       setExercises(searchExercise);
        console.log(exercises)
       
        
    }

   }
  return (
    <div className=''>
        <h1 className='font-bold text-red-100 font-sans ml-12  text-[100px] min-[940px]:text-[220px] min-[940px]:ml-24 '>Exercise</h1>
   
    <div className='flex flex-col justify-center items-center gap-4'>
        <div className='  text-2xl font-semibold font-sans leading-normal min-[940px]:text-6xl' >
            <p>
            Awesome Exercises You  </p>
            <p className='text-center'>Should Know</p>
          
        </div>
        <div className='flex '>
            <input className='border-[1px] border-gray-400 h-[6] w-[30vh] font-sans min-[940px]:w-[75vh] h-12 text-xl ' type="text" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}  placeholder='Search Exercises'/>
            <button className='bg-red-500 h-12 w-32 rounded-md text-white text-xl font sans min-[940px]:w-[24]' onClick={handleEvent}>Search</button>
        </div>
    </div>
<HorizontalScrollBar data={bodyparts} bodypart={bodypart} setBodypart={setBodypart}/>
    </div>
  )
}

export default Search