import React from "react";
import ExerciseCard from "./ExerciseCard";
import {Stack,Pagination } from "@mui/material";
import { useState } from "react";
 function Exercises({exercises,bodyPart,}){
    const [currentPage,setCurrentPage]=useState(1);
    const exercisePerPage=9;
     const paginate=(e,value)=>{
        setCurrentPage(value);
        window.scrollTo({ top:1700,behavior:'smooth'})
     }
     const indexOfLastExercise=exercisePerPage*currentPage;
     const indexOfFirstExercise=indexOfLastExercise-exercisePerPage;
     const targetExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise)


    return (
        <div>
            <div className="m-[50px] flex-wrap flex ">
            {targetExercises.map((exercise,index)=> 
            <ExerciseCard exercise={exercise}></ExerciseCard>)}
            </div>
            <div className="flex justify-center pb-[200px] ">
            {exercises.length >9 && (<Pagination
                color="primary"
                shape="rounded"
                defaultPage={1}
                page={currentPage}
                onChange={paginate}
                size="large"
                count={Math.ceil(exercises.length/9)}
                sx={{
                    "& .MuiPaginationItem-root": {
                      color: "#fff", // Sets the text color to white
                    },
                    "& .Mui-selected": {
                      backgroundColor: "#fff", // Sets selected item background color to white
                      color: "#000", // Sets selected item text color to black or adjust as needed
                    },
                  }}/>)}
            </div>
           

        
        </div>
        
    )
 }
 export default Exercises;