import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {MdDelete} from 'react-icons/md'
import { useDispatch } from "react-redux";
import {removeFromCart,incrementQty,decrementQty} from '../redux/slice/CartSlice'
import toast from "react-hot-toast";
function ItemCart({id,price,name,img,qty}) {
const dispatch = useDispatch()

  return (
    <div className="flex  gap-2 shadow-md rounded-md p-2 mb-3">
      <MdDelete onClick={()=>{
        dispatch(removeFromCart({id}));
        toast(`${name} removed from cart.`,{
          icon : "👌"
        })
        
        } } className="absolute right-7 text-gray-600 cursor-pointer" />
      <img
        className="w-[50px] h-[50px]"
        src={img}
        alt="img"
      />
      <div className=" leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex  justify-between items-center">
          <span className="text-green-500 font-bold pt-1"> ₹{price}</span>
          <div className="flex justify-center items-center gap-1 absolute right-7 ">

          <AiOutlineMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id})) : (qty = 0)}
              className="border-2 border-gray-600 text-gray-600 hover:text-white
        hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer
        "
            />
           
            <span>{qty}</span>

            <AiOutlinePlus onClick={()=> dispatch(incrementQty({id}))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white
        first-letter: hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer
        "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
