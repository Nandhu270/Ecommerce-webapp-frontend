import React from "react";

export default function CategoriesCard({data}) {
  return (
    <div className="relative w-full h-60 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-500 hover:scale-104">
      <img
        src={data.url}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        alt={data.name}
      />
      <div className="absolute inset-0 bg-black/32 group-hover:bg-black/40 transition-all duration-500"></div>
      <div className="absolute bottom-6 left-5">
        <h1 className="text-3xl mb-1 text-white font-bold">{data.name}</h1>
        <p className="text-gray-50">{data.desc}</p>
      </div>
    </div>
  );
}
