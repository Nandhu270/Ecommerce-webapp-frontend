import React from "react";
import SalesCard from "../components/SalesCard";
import {Featproduct} from '../assets/Static';

export default function Feature() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center px-6 py-10">
      <div className="w-full max-w-6xl flex flex-col gap-5">

        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured Products
          </h1>
          <h4 className="mt-2 text-base sm:text-lg md:text-xl">
            Handpicked items we think you'll love
          </h4>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            Featproduct.map((data,index)=>(
              <SalesCard key={index} data={data}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
