import React from "react";
import {AiFillStar} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slice/CartSlice";

function FoodCard({name,id,desc,img,price,rating,handleToast}) {
  const dispatch = useDispatch();

  return (
    <div className="border p-5  font-bold w-[250px] shadow-lg bg-white flexflex-col rounded-lg" key={id}>
      <img
        className="w-auto mx-auto h-[150px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        src={img}
        alt="foot image"
      />
      <div className=" mt-2 flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-green-500"> ₹{price}</span>
      </div>
      <p className="font-normal">
       {desc.slice(0,50)}...
      </p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
        <AiFillStar className="text-yellow-400 mr-1"/> {rating}
         
        </span>
        <button className="bg-green-500 text-white p-1 hover:bg-green-600 rounded-lg 
        text-sm" onClick={()=>
        { dispatch(
          addToCart({id,name,price,img,rating,qty : 1})
          );
          handleToast(name);
        }
        }>Add to cart</button>
      </div>
    </div>
  );
}

export default FoodCard;
