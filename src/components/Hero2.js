import React from "react";
import HeaderPivot from "./Headerpivot";
import {laptop,pivotlogo} from './images/index'
export default function Hero2() {
    
  return (
    
    <div>
      <HeaderPivot />
      <div className=" px-14 pr-0 grid grid-cols-5 gap-4 h-screen">
        
        <div className="py-20 col-span-3 flex h-full items-center justify-center">
          <div>
            <h1 className="text-left text-primary text-9xl font-extrabold leading-none w-auto">ONE <br/> WALLET TO <br/> RULE THEM <br/> ALL</h1>
            <p className = "text-secondary text-justify p-2 py-6 w-1/3  align-middle ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec nulla tellus bibendum.</p>
            <button className=" bg-buttonColorsky text-white text-center align-middle font-semibold text-lg px-12 mt-2 py-4 rounded-full">Learn More</button>
            </div>
        </div>
        <div className="col-span-2  bg-secondary rounded-bl-3xl h-5/6 flex items-center ">
             
            
            </div>
            <img className=" text-white right-0 w-2/3 absolute ml-auto -mr-64 my-auto top-0 bottom-0" src={laptop}></img>
      </div>
    </div>
  );
}
