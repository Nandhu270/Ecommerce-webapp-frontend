import React from 'react'
import { HiSparkles } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Categories from './Categories';

function Home() {

  const navigate = useNavigate();

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-[55%_45%] sm:p-5 w-full min-h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-100'>
          <div className="ml-3 badge badge-soft badge-success badge-md p-4 rounded-xl"><HiSparkles/> New Collection Available</div>
        </div>
        <div className='w-100 h-auto flex flex-col justify-center items-center'>
          <h1 className='text-8xl font-bold mt-4'>Discover</h1>
          <h1 className='text-8xl text-success font-bold' >Premium</h1>
          <h1 className='text-8xl font-bold'>Products</h1>
          <h5 className='mt-5 ml-2 text-md text-gray-500'>Elevate your lifestyle with our curated collection of premium products. Quality meets style in every piece.</h5>
        </div>
        <div className='flex justify-start w-100 ml-2'>
          <button className="btn btn-outline btn-success mt-5" onClick={()=>navigate("/shop")}>Shop Now <span><FaArrowRight /></span></button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg" alt="Image" width={450} height={450}/>
      </div>
    </div>
    <Categories />
    </>
  )
}

export default Home
