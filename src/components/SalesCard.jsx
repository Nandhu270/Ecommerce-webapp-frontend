import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

export default function SalesCard({ data }) {
  return (
    <div className="group cursor-pointer relative w-full rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col">
      <div className="relative w-full h-56 flex-shrink-0 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {data.isFeat && (
          <div className="z-50 badge badge-secondary absolute top-3 left-2">
            Feature
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="absolute top-3 right-3 flex flex-col items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <Eye className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 flex items-center text-gray-700 gap-2 rounded-full shadow-md hover:bg-gray-200">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h4 className="text-lg font-semibold break-words line-clamp-2">
          {data.title}
        </h4>
        <p className="text-sm flex-1">{data.desc}</p>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">
              {data.price}
            </span>
            {data.islow && (
              <span className="ml-2 text-sm line-through">
                {data.islow}
              </span>
            )}
          </div>

          <button className="bg-secondary text-white font-medium px-4 py-1.5 rounded-lg">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
