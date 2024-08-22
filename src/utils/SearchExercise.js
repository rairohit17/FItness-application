    export  async function searchExercise(url,options){
    try{
        const exercises= await fetch(url,options)
        const data= await exercises.json();
        // console.log(import.meta.env.VITE_API_KEY)
        return data
    }
    catch(error){
        console.error(error);
    }



   }
//    import 'dotenv/config'
   export const options={
    method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'  
   }
   
}

