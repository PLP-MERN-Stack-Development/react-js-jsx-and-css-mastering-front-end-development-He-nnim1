import React from "react";
import ThemeToggle from "./ToggleButton";

function Navbar(){
    return (
        <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">PLP Task Manager </h1>
            <ThemeToggle />
          </div>
        
        </div>
      </header>
    )
}

export default Navbar;
