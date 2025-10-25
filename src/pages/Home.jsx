import React from "react";
import { HiSparkles } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Categories from "./Categories";
import HomeImage from '../assets/HomeImage.png';
import Feature from "./Feature";
import NewArrival from "./NewArrival";
import Subscribe from "./Subscribe";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[55%_45%] min-h-screen w-full 
                   px-4 py-8 sm:px-6 md:px-12 lg:px-16 gap-6 md:gap-8
                   transition-colors duration-500"
      >
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:ml-25 lg:ml-32">
          <div className="mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 badge badge-success px-3.5 py-4 rounded-xl text-sm sm:text-base">
              <HiSparkles /> New Collection Available
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-base-content">
              Discover
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-success/70">
              Premium
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-base-content">
              Products
            </h1>
          </div>

          <p className="mt-3 sm:mt-4 md:mt-5 text-base-content/70 text-sm sm:text-base md:text-lg max-w-md">
            Elevate your lifestyle with our curated collection of premium
            products. Quality meets style in every piece.
          </p>

          <button
            className="mt-3 sm:mt-4 md:mt-5 inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 
                       rounded-xl btn btn-outline btn-success"
            onClick={() => navigate("/shop")}
          >
            Shop Now <FaArrowRight />
          </button>
        </div>

        <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-0">
          <img
            src={HomeImage}
            alt="Image"
            className="w-56 sm:w-72 md:w-80 lg:w-[400px] h-auto rounded-xl object-cover"
          />
        </div>
      </div>
      <Categories />
      <Feature />
      <NewArrival />
      <Subscribe />
    </>
  );
}

export default Home;
