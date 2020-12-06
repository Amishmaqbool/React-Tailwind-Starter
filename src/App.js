import logo from "./logo.svg";
import "./App.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";

function App() {
  return (
    //     <div className="App">
    //       <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    //         <div class="flex-shrink-0">
    //           <img class="h-12 w-12" src={logo} alt="ChitChat Logo" />
    //         </div>
    //         <div>
    //           <div class="text-xl font-medium text-black">Card body</div>
    //           <p class="text-gray-500">your Tailwind is integreted and working with react</p>
    //           <button class="mt-5 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
    //   Stay away
    // </button>
    //         </div>
    //       </div>
    //     </div>
    <Router>
      <Switch>
        <Route path="/hero">
          <Hero1 />
        </Route>
        <Route path="/">
          <Hero2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
