import React from "react";

export default function Subscribe() {
  return (
    <div className="bg-success w-full py-10 px-6 mb-20 flex flex-col items-center justify-center text-center gap-4 rounded-2xl shadow-md">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Stay in the loop
      </h1>
      <h5 className="text-sm sm:text-base md:text-lg text-gray-50 max-w-md">
        Subscribe to get special offers, free giveaways, and insider updates.
      </h5>
      <form className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered rounded-xl p-3 w-full sm:w-64 text-sm sm:text-base focus:outline-none"
        />
        <button className="btn bg-white border border-white text-success rounded-xl p-3 px-5 text-sm sm:text-base">
          Subscribe
        </button>
      </form>
    </div>
  );
}
