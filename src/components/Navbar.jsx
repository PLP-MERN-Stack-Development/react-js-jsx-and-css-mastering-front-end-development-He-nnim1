import React from "react";
import ThemeToggle from "./ToggleButton";
import {Link} from "react-router-dom";


function Navbar(){
    return (
        <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">PLP Task Manager </h1>
            <ThemeToggle />
          </div>
          
          {/* Navigation links section */}
        <nav className="flex gap-4 mt-2">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/api" className="text-blue-600 hover:underline">API Data</Link>
        </nav>

        
        </div>
      </header>
    )
}

export default Navbar;
