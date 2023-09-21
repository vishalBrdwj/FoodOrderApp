import React,{useState} from "react";
import FoodData from './FoodData'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCatagory } from "../redux/slice/CatagorySlice";

function CatagoryMenu() {

  const [catagories, setcatagories] = useState([]);

  const dispatch = useDispatch();
   const selectorCatagory = useSelector((state)=> state.catagory.catagory)
  const uniqeCatagory = ()=>{
    const uniqeCatagories = [
      ...new Set(FoodData.map((food)=>food.category)),
         ];
setcatagories(uniqeCatagories);
  }

  //useeffact
  useEffect(()=>{
    uniqeCatagory();
  console.log(catagories);
   },[]) 


  return (
    <div className="ml-6">
      <h3 className="mx-2 font-semibold text-xl">Find the best food...</h3>
      <div className="my-3 flex gap-2 p-2 overflow-x-scroll scroll-smooth md:overflow-hidden font-semibold  ">
      <button
            onClick={()=> dispatch(setCatagory("All"))}
          className={`px-3 py-1 font-bold-200 bg-gray-200 rounded-md mx-1cd hover:bg-green-500
            hover:text-white ${selectorCatagory === "All" && 'bg-green-500 text-white'}`}
        >
          All
        </button>
       {
        catagories.map((catagory,index)=> {
          return  <button
            onClick={()=> dispatch(setCatagory(catagory))}
          key={index}
          className={`px-3 py-1 font-bold-200 bg-gray-200 rounded-md mx-1cd hover:bg-green-500
            hover:text-white ${selectorCatagory === catagory && 'bg-green-500 text-white'}`}
        >
          {catagory}
        </button>
        })
       }
        
      </div>
    </div>
  );
}

export default CatagoryMenu;
