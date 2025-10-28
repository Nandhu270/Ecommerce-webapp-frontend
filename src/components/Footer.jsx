import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { Facebook, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../hooks/context";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <div className="w-full px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
      <div className="flex flex-col p-4 gap-3 items-center sm:items-start">
        <div className="flex items-center gap-3">
          <span className="bg-secondary p-3 rounded-full text-white flex items-center justify-center">
            <LuShoppingBag className="w-6 h-6" />
          </span>
          <h1 className="text-3xl font-bold">Luxe Store</h1>
        </div>
        <p className="text-gray-400 text-sm max-w-sm">
          Discover premium products curated for the modern lifestyle. Quality,
          style, and excellence in every purchase.
        </p>
        <div className="flex gap-4 mt-4 justify-center sm:justify-start">
          {[
            { icon: <Facebook size={22} />, color: "text-black" },
            { icon: <FaXTwitter size={22} />, color: "text-black" },
            { icon: <Instagram size={22} />, color: "text-black" },
          ].map((social, idx) => (
            <div
              key={idx}
              className="bg-gray-200 rounded-2xl flex p-2 cursor-pointer shadow-md hover:scale-110 transition-transform duration-300"
            >
              <span className={social.color}>{social.icon}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4 items-center sm:items-start">
        <h1 className="text-2xl font-semibold">SHOP</h1>
        <ul className="cursor-pointer flex flex-col gap-2 text-gray-400">
          {["All Products", "New Arrivals", "Best Sellers", "Sale"].map(
            (item, i) => (
              <li
                key={i}
                className={`${
                  theme === "light"
                    ? "hover:text-gray-700"
                    : "hover:text-gray-100"
                } transition-colors duration-200`}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="flex flex-col gap-3 p-4 items-center sm:items-start">
        <h1 className="text-2xl font-semibold">SUPPORT</h1>
        <ul className="cursor-pointer flex flex-col gap-2 text-gray-400">
          {["Contact Us", "Size Guide", "Shipping Info", "Returns"].map(
            (item, i) => (
              <li
                key={i}
                className={`${
                  theme === "light"
                    ? "hover:text-gray-700"
                    : "hover:text-gray-100"
                } transition-colors duration-200`}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
