import React from "react";
import { Box } from "@mui/material";
import {Typography} from "@mui/material";
function HeroBanner(){
    return (
        <Box >
            <div className=" opacity-30 text-white  md:text-9xl text-7xl pl-10 pr-0 md:pt-40 pt-56
            md:py-64 tracking-wider h-[50vh]">
                fitness center
            </div>
            <div className=" opacity-50 text-orange-500 md:text-5xl md:pl-16 pr-5 pt-20  pl-14 text-3xl ">Shape Your Story</div>
            <div className="text-orange-500 opacity-30 md:text-5xl md:pl-40 pr-5 pt-14  pl-28  text-3xl">Sculpt your Strength</div>
        </Box>

    )

}


export default HeroBanner;