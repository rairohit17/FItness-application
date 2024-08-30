import React from "react";
import ExerciseCard from "./ExerciseCard";
 function Exercises({exercises,bodyPart,}){

    return (
        <div className="m-[50px] flex flex-wrap ">
            {exercises.map((exercise,index)=> 
            <ExerciseCard exercise={exercise}></ExerciseCard>)}

        </div>
    )
 }
 export default Exercises;