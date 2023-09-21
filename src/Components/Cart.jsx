import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

function Cart() {

  const navigate = useNavigate()
  //usestate
  const cartItem = useSelector((state) => state.cart.cart);
  //reduce mathod
  const totalQty = cartItem.reduce((total, item) => total +  item.qty, 0);
  const totalPrice = cartItem.reduce((total,item)=> total + item.qty * item.price,0)
  //usestate
  const [activeCart, setactiveCart] = useState(true);
  console.log(cartItem);

  return (
    <>
      <div
        className={` fixed right-0 top-0 w-full md:w-[25vw] bg-white h-[600px] py-2 px-4 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } 
      transition-all duration-500 z-60`}
      >
        <div className=" flex justify-between items-center my-3 font-bold  ">
          <span className="text-xl text-gray-600"> My Orders</span>
          <button>
            {/* imported button from react icons */}
            <IoMdClose
              onClick={() => setactiveCart(!activeCart)}
              className="border-2 border-gray-600 text-gray-600 p-1 text-2xl rounded-md
          hover:text-red-300 hover:border-red-300 cursor-pointer"
            />
          </button>
        </div>

        {cartItem.length > 0 ? (
          cartItem.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h3 className="text-xl font-bold text-gray-300 text-center">
            Yor Cart is empty
          </h3>
        )}
        {/* imported Item Cart */}

        <div className="font-semibold absolute bottom-0  w-full">
          <h3 className="text-gray-800">Items :{totalQty}</h3>
          <h3 className="text-gray-800">Total Amount:{totalPrice}</h3>
          <hr className="w-full  mb-2 " />
          <button onClick={()=>  navigate('/success')}
          className="bg-green-500 px-2 py-2 text-white rounded-lg w-[90vw] md:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setactiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4
         ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
      />
    </>
  );
}

export default Cart;
