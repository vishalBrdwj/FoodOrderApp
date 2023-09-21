import React, { useEffect,useState } from 'react'

function Success() {

  const [load, setload] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
        setload(false)
    }, 3000);
  },[])
  return (
   <>
   {load ? (<div className='text-red-400 text-3xl font-bold flex justify-center items-center h-screen'>Loading.......</div>) :
    <div className='flex flex-col justify-center items-center h-screen animate-bounce delay-500 '>
    
    <h2 className='text-3xl font-bold mb-4'>Order succesfull..!</h2>
    <p className='text-green-800 text-semi-bold'>Your order is <span className='text-pink-400'>succesfully </span>placed.</p>
  </div>}
   </>
  )
}

export default Success
