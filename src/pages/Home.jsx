import { dividerClasses } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercises";
import Exercises from "../components/Exercises";
 function Home(){
   const [exercises,setExercises]=useState([]);
   const [bodyPart,setBodyPart]= useState([])
    return ( 
       <div  >
        <Navbar></Navbar>
        <HeroBanner></HeroBanner>
         <button className="bg-orange-800 text-white py-1 rounded-md ml-[270px]
         md:text-2xl active:translate-y-1 px-2  opacity-70 hover:opacity-30  md:my-[70px] my-20
         ">Explore Exercises</button>
         
         <div className="bg-black bg-fixed">
            <SearchExercise
            setExercises={setExercises} 
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}></SearchExercise>
            
         <Exercises setExercises={setExercises}
                  exercises={exercises}
                  bodyPart={bodyPart}></Exercises>
         </div>
         

       </div>
    )
 }
 export default Home;