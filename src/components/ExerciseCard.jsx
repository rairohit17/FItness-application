import React from "react";
 function ExerciseCard( {exercise}){
    console.log(exercise)
    return ( 
        <div className="w-[100px] h-[100px] bg-white text-black m-[50px]">
            {exercise.bodyPart}
        </div>
    )
 }
 export default ExerciseCard;