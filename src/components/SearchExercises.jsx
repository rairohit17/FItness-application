 import React, { useEffect } from "react";
 import { Stack,TextField,Typography} from "@mui/material";
 import { useState } from "react";
 import { searchExercise,options } from "../utils/SearchExercise";
import HorizontalScrollerBar from "./horizontalScrollerBar";

//  import { options } from "../utils/SearchExercise";



 function SearchExercise({setExercises,bodyPart,setBodyPart}){
    const [search,setSearch]= useState("")
    
    const [bodyParts,setBodyParts] =useState([])
    useEffect( () =>{
        const fetchExerciseData=  async ()  =>{
        const bodyPartsData= await fetch ("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",options)
        const res= await bodyPartsData.json()
        setBodyParts([...res])
        
        
        
        
    }
    fetchExerciseData()
        
    },[])

    let value=search
    const url= 'https://exercisedb.p.rapidapi.com/exercises?limit=0'
    async function handleSearch(){
        const exerciseData=await searchExercise(url,options);
        // console.log(exerciseData)
        const searchedData=exerciseData.filter((exercise)=>{
            const bodyParts= exercise.bodyParts ? exercise.bodyParts.toLowerCase() : ""
            const equipment=exercise.equipment ? exercise.equipment.toLowerCase() :""
            const target=exercise.target ? exercise.target.toLowerCase() : ""
            const name=exercise.name ? exercise.name.toLowerCase() : ""
            return (bodyParts.includes(search.toLowerCase())||
            equipment.includes(search.toLowerCase())||
            target.includes(search.toLowerCase()) ||
            name.includes(search.toLowerCase()))
        })
        setSearch("");
        setExercises(searchedData)

            
           


     
    }
    
    return (
        <div>
            <Stack alignItems="center" mt="37px" justifyContent="center" p="20px"
        >
            
            <Typography className="text-white opacity-60"
            fontWeight={700}
            sx={{
                fontSize:{lg:"44px" , xs:'30px'}
            }} mb="50px" textAlign="center"
            >Awesome Exercise You <br /> Should Know</Typography>
           <div ><input onChange={(e)=>{
            setSearch(e.target.value)


           }} className="h-12  md:w-[700px]  w-[250px] bg-slate-900  bg-fixed md:text-3xl pl-4 text-white opacity-60 rounded-md" type="text" placeholder="search Exercise/Body  Parts " />
           <button onClick={()=>handleSearch()} className="w-[100px] h-12 ml-4 rounded-lg bg-orange-800 text-white opacity-75 hover:opacity-50 active:translate-y-1">Search</button></div>
           
        </Stack>
        <HorizontalScrollerBar data={bodyParts}
           bodyPart={bodyPart}
           setBodyPart={setBodyPart}/>
        </div>
        
    )
}
export default SearchExercise;