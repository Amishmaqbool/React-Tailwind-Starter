import React from "react";
import { Link } from "react-router-dom";
import {pivotlogo} from './images/index'

export default function HeaderPivot() {
  return (
   
    <nav className="flex absolute left-0 right-0 w-full items-center justify-between flex-wrap bg-teal p-5 px-14">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-3xl lg:flex-grow">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
             <img src={pivotlogo}></img>
          </a>
        </div>
        <div className=" justify-center flex">
            <a className="inline-block text-white text-lg px-5 py-2  leading-none" >
            Home
          </a>
          <a className="inline-block text-white text-lg px-5 py-2 leading-none" >
            Stats
          </a>
          <a className="inline-block text-white text-lg px-5 py-2 leading-none ">
            Coins
          </a>
          <a className="inline-block text-white text-lg px-5 py-2 leading-none ">
            Blog
          </a>
          <a className="inline-block text-white text-lg px-5 py-2 leading-none ">
            Contact Us
          </a>
            </div>
      </div>

    </nav>
  );
}
