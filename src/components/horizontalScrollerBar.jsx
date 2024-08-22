import React from "react";
import ScrollerExerciseCard from "./ScrollerExerciseCard";

function HorizontalScrollerBar({ data, bodyPart, setBodyPart }) {
    return (
      <div style={{  }}> {/* Flexbox for horizontal scrolling */}
        {data.map((exercise, index) => (
          <div key={index} style={{ margin: '0 10px' }}> {/* Add unique key and spacing between cards */}
            <ScrollerExerciseCard exercise={exercise} />
          </div>
        ))}
      </div>
    );
  }
  
export default HorizontalScrollerBar