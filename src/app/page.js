import React from 'react'
import Navbar from '../../components/Navbar'
import NavItems from '../../components/NavItems'
import ImageSlider from '../../components/ImageSlider'


const page = () => {
  return (
    <div className='bg-[#f6efd5d8] '>
      <Navbar/>
      <NavItems/>
      <ImageSlider/>
    </div>
  )
}

export default page;
