import React, { useRef } from "react";
import BodyPartsCard from "./BodyPartsCard";
import { ScrollMenu } from "react-horizontal-scrolling-menu";


function HorizontalScrollerBar({ data, bodyPart, setBodyPart }) {
  const scrollContainerRef = useRef(null); 

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500, 
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" w-screen mt-[100px] border-t-4 border-slate-800  pt-[50px]">
     
      
        <div
          ref={scrollContainerRef}
          className="horizontal-scroller  overflow-x-auto whitespace-nowrap px-8"
          
        >
          {data.map((exercise, index) => (
            <div key={index} onClick={()=>{
              setBodyPart(exercise) ;
            }} className="inline-block">
              <BodyPartsCard element={exercise}
               />
            </div>
          ))}
        </div>
      
      
      
    </div>
  );
}

export default HorizontalScrollerBar;
