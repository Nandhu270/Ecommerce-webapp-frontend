import React from "react";

export default function Wishlist() {
  return (

      <section className="container mx-auto mt-10 px-6">
        <h2 className="text-3xl font-bold mb-6">WishList</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/220x160"
              alt="Formal Shirt"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Formal Shirt</h3>
            <p className="text-gray-600 mb-2">description</p>
            <span className="text-gray-800 font-bold mb-4">$99</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/220x160"
              alt="casual Shirt"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">casual Shirt</h3>
            <p className="text-gray-600 mb-2"> description</p>
            <span className="text-gray-800 font-bold mb-4">$79</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/220x160"
              alt="Tshirt"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Tshirt</h3>
            <p className="text-gray-600 mb-2">description</p>
            <span className="text-gray-800 font-bold mb-4">$120</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

  );
}
