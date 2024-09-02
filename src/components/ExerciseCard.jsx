import { Pagination } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
 function ExerciseCard( {exercise}){
    console.log(exercise)
    return ( 
        <NavLink  to={`/exercises/${exercise.id}`} className={"opacity-70 hover:opacity-90"}>
             <div className=" border-t-4 bg-slate-500q
                border-orange-600 hover:border-none transition-all duration-500 m-[50px]">
           <img src={`${exercise.gifUrl}`} alt="" />
        <button className="bg-purple-500 text-white py-1 px-2 mt-2 rounded-2xl ml-[20px] mb-[15px] opacity-70 "> {exercise.bodyPart}</button>
        <button className="bg-orange-600 mt-2 mb-[15px] ml-[15px] opacity-70 py-1 px-2 rounded-2xl">{exercise.target}</button>
        
        </div>
        </NavLink>

       
    )
 }
 export default ExerciseCard;