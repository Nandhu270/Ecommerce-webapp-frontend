import React from "react";
import SalesCard from "../components/SalesCard";
import { Featproduct } from "../assets/Static";
import { useTheme } from "../hooks/context";
import { ArrowRight } from "lucide-react";

export default function NewArrival() {
  const { theme } = useTheme();
  return (
    <div className="w-full min-h-screen flex justify-center items-center px-6 py-10">
      <div className="w-full max-w-6xl flex flex-col gap-5">
        <div className="flex justify-center flex-col gap-4 sm:flex-row sm:justify-between px-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              New Arrivals
            </h1>
            <h4 className="mt-2 text-base sm:text-lg md:text-xl">
              Fresh products just added to our collection
            </h4>
          </div>
          <div>
            <button
              className={`${
                theme === "light"
                  ? `btn bg-[#2F2F2F] text-white border border-black`
                  : `btn bg-white text-black border border-[#e5e5e5]`
              }
                     sm:mt-6 px-2 transition-colors duration-300`}
            >
              View All
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Featproduct.slice(0,4).map((data, index) => (
            <SalesCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
