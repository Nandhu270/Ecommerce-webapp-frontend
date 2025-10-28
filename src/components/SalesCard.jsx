import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

export default function SalesCard({ data }) {
  return (
    <div className="group cursor-pointer relative w-full rounded-xl shadow-sm overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-md flex flex-col">
      <div className="relative w-full h-40 sm:h-44 md:h-48 flex-shrink-0 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {data.isFeat && (
          <div className="z-50 badge badge-secondary absolute top-2 left-2 text-xs sm:text-sm">
            Feature
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div
          className="absolute top-2 right-2 flex flex-col items-center gap-2
                opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <button className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 cursor-pointer">
            <Heart className="w-4 h-4 text-gray-700" />
          </button>
          <button
            className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 cursor-pointer"
            onClick={() =>
              document.getElementById(`my_modal_${data.id}`).showModal()
            }
          >
            <Eye className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="bg-white px-3 sm:px-4 py-2 flex items-center text-gray-700 gap-1 sm:gap-2 rounded-full shadow-sm hover:bg-gray-200 text-xs sm:text-sm cursor-pointer">
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            Add
          </button>
        </div>
      </div>

      <div className="p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 flex-1">
        <h4 className="text-sm sm:text-base font-semibold line-clamp-2">
          {data.title}
        </h4>
        <p className="text-xs sm:text-sm flex-1 line-clamp-2">{data.desc}</p>

        <div className="mt-1 flex items-center justify-between">
          <div className="text-sm sm:text-base font-bold">
            {data.price}
            {data.islow && (
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm line-through font-normal">
                {data.islow}
              </span>
            )}
          </div>

          <button className="bg-secondary text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-md cursor-pointer">
            Order
          </button>
        </div>
      </div>

      <dialog id={`my_modal_${data.id}`} className="modal modal-middle">
        <div className="modal-box max-w-3xl p-6">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="relative">
              <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-xl">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute top-2 right-1 bg-white rounded-3xl p-1">
                <Heart className="w-6 h-6 text-gray-700" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-sm uppercase tracking-wide text-gray-500">
                {data.category}
              </h2>
              <h3 className="font-bold text-lg sm:text-xl">{data.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                {data.desc}
              </p>

              <div className="text-base sm:text-lg font-semibold">
                {data.price}
                {data.islow && (
                  <span className="ml-2 text-sm line-through text-gray-500 font-normal">
                    {data.islow}
                  </span>
                )}
              </div>

              <div className="flex justify-between gap-3 mt-2">
                <button className="bg-secondary text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition cursor-pointer">
                  Order
                </button>

                <button className="bg-secondary text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition cursor-pointer">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
