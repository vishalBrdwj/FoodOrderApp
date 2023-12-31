import React from "react";
import { useDispatch } from "react-redux";
import {setSearch} from '../redux/slice/SearchSlice'

function Navbar() {

  const dispatch = useDispatch();
  return (
    <nav className=" flex flex-col md:flex-row justify-between px-6 py-3 mb-10 bg-gray-100 ">
      <div className="font-bold  " >
        <h3 className="text-gray-600 text-xl">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="text-2xl  text-gray-600 ">Food App</h1>
      </div>
      <div className="mt-2 md:mt-2">
        <input className="border border-gray-400 text-sm rounded-lg outline-none w-full md:w-[25vh] p-3 "
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          onChange={(e)=> dispatch((setSearch(e.target.value)))}
        />
      </div>

    </nav>
  );
}

export default Navbar;
