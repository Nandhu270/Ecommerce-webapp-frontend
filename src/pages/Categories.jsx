import React from "react";
import CategoriesCard from "../components/CategoriesCard";

function Categories() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-5 justify-center px-6 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Shop by Category</h1>
      <h4 className="text-base sm:text-lg md:text-xl text-gray-500 text-center">Discover Some new Collections</h4>
      <div className="max-w-6xl gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Beauty",
            desc: "Skin Care and Cosmetics",
          },
          {
            url: "https://images.unsplash.com/photo-1686315179231-f63e5c8d6d06?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Books",
            desc: "Knowledge and entertainment",
          },
          {
            url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Electronics",
            desc: "Latest gadgets and tech",
          },
          {
            url: "https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Fashion",
            desc: "Trendy clothing and accessories",
          },
          {
            url: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
            name: "Home & Garden",
            desc: "Beautiful items for your home",
          },
          {
            url: "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnR8ZW58MHx8MHx8fDA%3D",
            name: "Sports",
            desc: "Equipment for active lifestyle",
          },
        ].map((data,index)=>(
          <CategoriesCard key={index} data={data}/>
        ))}
      </div>
    </div>
  );
}

export default Categories;
