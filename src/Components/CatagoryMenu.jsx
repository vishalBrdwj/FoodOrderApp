import React from "react";

function CatagoryMenu() {
  return (
    <div>
      <h3>Find the best food...</h3>
      <div>
        <button
          className="px-3 py-1 font-bold-200 bg-gray-200 rounded-md mx-1cd hover:bg-green-500
            hover:text-white"
        >
          All
        </button>
        <button
          className="px-3 py-1 font-bold-200 bg-gray-200 rounded-md mx-1cd hover:bg-green-500
            hover:text-white"
        >
          Breakfast
        </button>
        <button
          className="px-3 py-1 font-bold-200 bg-gray-200 rounded-md mx-1cd hover:bg-green-500
            hover:text-white"
        >
          Lunch
        </button>
        <button
          className="px-3 py-1 font-bold-200 bg-gray-200 rounded-md mx-1cd hover:bg-green-500
            hover:text-white"
        >
          Dinner
        </button>
        <button
          className="px-3 py-1 font-bold-200 bg-gray-200 rounded-md hover:bg-green-500
            hover:text-white"
        >
          Snaks
        </button>
        
      </div>
    </div>
  );
}

export default CatagoryMenu;
