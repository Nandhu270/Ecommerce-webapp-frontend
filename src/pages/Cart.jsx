import React from "react";

export default function Cart() {
  return (
    <div>
      <section class="container mx-auto mt-10 px-6">
        <h2 class="text-3xl font-bold mb-6">Shopping Cart</h2>

        <div class="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div class="flex items-center justify-between border-b pb-4">
            <div class="flex items-center space-x-4">
              <img
                src="https://m.media-amazon.com/images/I/712geJMzzoL._SY741_.jpg"
                alt="Product 1"
                class="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 class="font-semibold text-lg">Casual Shirt</h3>
                <p class="text-gray-600">₹999</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <input
                type="number"
                min="1"
                value="1"
                class="w-16 border rounded-md text-center p-1"
              />
              <button class="text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between border-b pb-4">
            <div class="flex items-center space-x-4">
              <img
                src="https://m.media-amazon.com/images/I/71IXThTV2QL._SY741_.jpg"
                alt="Product 2"
                class="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 class="font-semibold text-lg">Formal Shirt</h3>
                <p class="text-gray-600">₹1,499</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <input
                type="number"
                min="1"
                value="2"
                class="w-16 border rounded-md text-center p-1"
              />
              <button class="text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <img
                src="https://m.media-amazon.com/images/I/71LnycrT7qL._SY879_.jpg"
                alt="Product 3"
                class="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 class="font-semibold text-lg">Regular Fit Casual Shirt</h3>
                <p class="text-gray-600">₹2,499</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <input
                type="number"
                min="1"
                value="1"
                class="w-16 border rounded-md text-center p-1"
              />
              <button class="text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div class="mt-10 bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 ml-auto">
          <h3 class="text-xl font-semibold mb-4">Order Summary</h3>
          <div class="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹4,997</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Shipping</span>
            <span>₹100</span>
          </div>
          <div class="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹5,097</span>
          </div>
          <button class="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
  );
}
