import React from "react";
import { CardActionArea } from "@mui/material";

function BodyPartsCard({ element }) {
  return (
    <div className="w-[170px] h-[230px] hover:h-[250px] hover:w-[185px] hover:border-t-4 border-slate-800 bg-slate-900 transition-all duration-1000 ease-in-out mx-[100px]" onClick={()=>{

    }}>
      <CardActionArea>
        <div className="h-[180px]" >
          <img
            className="h-[180px] hover:h-[200px] transition-all duration-200"
            src="/src/assets/images/anatomy.png"
            alt=""
          />
        </div>
        <div className="h-[50px] hover:h-[70px] text-center p-3 text-blue-400 opacity-80 transition-all duration-200">
          {element}
        </div>
      </CardActionArea>
    </div>
  );
}

export default BodyPartsCard;
