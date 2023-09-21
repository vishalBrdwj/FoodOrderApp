import React from 'react'
import FoodCard from './FoodCard'
import FoodData from './FoodData'
import toast, {Toaster} from 'react-hot-toast'
import {  useSelector } from 'react-redux/es/hooks/useSelector'

function FoodItems() {
  const category = useSelector((state)=>state.catagory.catagory)
  const search = useSelector((state)=> state.search.search)
const handleToast = (name)=>  toast.success(`added ${name} to cart`)

  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
    
    <div className='flex flex-wrap gap-10 justify-center items-center'>
     {
FoodData.filter((food)=>{
  if(category === "All"){
    return food.name.toLowerCase().includes(search.toLowerCase());
  } else{
   return category === food.category
  }
}).map((food)=> {
 return (
  <FoodCard key={food.id}
         id={food.id}  
        name={food.name} 
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img={food.img}
        handleToast ={handleToast} />
)})
     }
      
    </div>
    </>
  )
}

export default FoodItems