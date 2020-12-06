import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
   
    <nav className="flex items-center justify-between flex-wrap bg-teal p-10">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-3xl lg:flex-grow">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
            Fabterior
          </a>
        </div>
        <div >
          <a className="inline-block text-lg px-10 py-2  leading-none border rounded  border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
            Home
          </a>
          <a className="inline-block text-lg px-10 py-2 leading-none border rounded  border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
            About
          </a>
          <a className="inline-block text-lg px-10 py-2 leading-none border rounded  border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
            Services
          </a>
          <a className="inline-block text-lg px-10 py-2 leading-none border rounded  border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
            Collections
          </a>
        </div>
      </div>
    </nav>
  );
}
