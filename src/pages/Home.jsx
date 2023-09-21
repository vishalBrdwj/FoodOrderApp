import React from 'react'
import Navbar from '../Components/Navbar'
import CatagoryMenu from '../Components/CatagoryMenu'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

function Home() {
  return (
<section className=''>
<Navbar/>
<CatagoryMenu/>
<FoodItems />
<Cart/>
</section>
  )
}

export default Home