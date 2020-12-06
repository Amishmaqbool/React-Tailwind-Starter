import React from "react";
import Header from "./Header";
import {heroImg,rectangle,arrowdown} from "./images/index"

export default function Hero1() {
  
  return (
    <div>
      <Header />
      <div className="px-14 grid grid-cols-3 gap-4 ">
        <div className="col-span-1"></div>
        <div className="relative h-screen  col-span-2 ">
        <img className="absolute -inset-10" src={rectangle} ></img> 
        <div className="w-full h-4/5 relative">
        <img
            className="absolute inset-0 object-center object-cover h-full"
            src={heroImg }
          ></img>
           <div className="bg-secondary absolute bottom-0 -mb-12 right-24 p-5   ">
              <img className=" " src={arrowdown}></img>
          </div>
        </div>
        
          
          <div className="px-16 bg-primary absolute inset-0 object-left object-cover  h-1/2 w-1/2  p-16  top-1/4 -inset-x-1/4 flex justify-center items-center  ">
              <div>
            <h1 className="text-left text-white text-7xl font-extrabold leading-tight">We Design Your Future</h1>

            <p className="text-justify p-2 py-6 w-3/5  text-white align-middle">
              Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.
              Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem.{" "}
            </p>

            <button className="text-white text-center align-middle bg-buttonColor font-bold text-lg px-8 mt-3 py-2">GET IN TOUCH</button>
            
            </div>
          
          </div>

         

        </div>
        
      </div>
      
    </div>
  );
}
