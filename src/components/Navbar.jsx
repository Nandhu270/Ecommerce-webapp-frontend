// Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart, HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/context";
import { LuSun } from "react-icons/lu";
import { RxMoon } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [show, setShow] = useState(false);

  const dropref = useRef(null);

  useEffect(() => {
    const handleDropdown = (e) => {
      if (dropref.current && !dropref.current.contains(e.target))
        setShow(false);
    };

    document.addEventListener("mousedown", handleDropdown);
    return () => {
      document.removeEventListener("mousedown", handleDropdown);
    };
  }, []);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        theme === "light" ? "text-black shadow-md" : "text-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            className="flex items-center gap-3 text-3xl font-bold text-secondary transition-colors duration-300"
          >
            <span className="bg-secondary p-3 rounded-full text-white flex items-center justify-center">
              <LuShoppingBag className="w-6 h-6" />
            </span>
            Luxe Store
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              {
                name: "Cart",
                path: "/cart",
                icon: <HiOutlineShoppingCart size={20} />,
                badge: true,
              },
              {
                name: "Wishlist",
                path: "/wishlist",
                icon: <FaRegHeart size={18} />,
                badge: true,
              },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-1 transition-colors duration-300
                  ${
                    active === item.path
                      ? theme === "light"
                        ? "text-secondary"
                        : "text-secondary font-bold"
                      : theme === "light"
                      ? "text-black"
                      : "text-white"
                  }
                  hover:text-secondary
                  after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
                  after:bg-secondary after:scale-x-0 after:origin-left hover:after:scale-x-100 
                  after:transition-transform after:duration-300
                `}
              >
                {item.icon && <span>{item.icon}</span>}
                <div className="relative">
                  {item.name}
                  {item.badge && (
                    <div className="badge badge-sm absolute bg-error -top-3 -right-6">
                      0
                    </div>
                  )}
                </div>
              </Link>
            ))}

            <div className="relative avatar ml-4" ref={dropref}>
              <div
                className="w-10 rounded-full cursor-pointer overflow-hidden"
                onClick={() => setShow((prev) => !prev)}
              >
                <img
                  src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  alt="profile"
                />
              </div>

              {show && (
                <ul className="absolute right-0 top-8 mt-2 w-30 bg-rose-50 dark:text-gray-950 rounded-md shadow-md z-50">
                  <li
                    onClick={() => setShow(false)}
                    className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-50 rounded-2xl cursor-pointer"
                  >
                    Profile
                  </li>
                  <li
                    onClick={() => setShow(false)}
                    className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-50 rounded-2xl cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-300 cursor-pointer"
            >
              {theme === "light" ? <LuSun size={25} /> : <RxMoon size={25} />}
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            >
              {isOpen ? <HiX size={25} /> : <HiMenu size={25} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`sm:hidden px-4 pt-4 pb-6 space-y-3 shadow-md transition-colors duration-300 ${
            theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
          }`}
        >
          <div className="flex flex-col gap-3">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              {
                name: "Cart",
                path: "/cart",
                icon: <HiOutlineShoppingCart size={20} />,
                badge: true,
              },
              {
                name: "Wishlist",
                path: "/wishlist",
                icon: <FaRegHeart size={18} />,
                badge: true,
              },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 ${
                  active === item.path
                    ? "text-secondary font-semibold"
                    : "hover:bg-gray-100 hover:text-stone-900"
                }`}
              >
                {item.icon && <span>{item.icon}</span>}
                <div className="relative">
                  {item.name}
                  {item.badge && (
                    <div className="badge badge-sm absolute bg-error -top-3 -right-6">
                      0
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-300 dark:border-gray-700 my-2" />

          <Link
            to="/profile"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-stone-900"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                alt="profile"
              />
            </div>
            <span>Profile</span>
          </Link>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-stone-900 cursor-pointer"
          >
            {theme === "light" ? <LuSun size={20} /> : <RxMoon size={20} />}
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="btn btn-error">Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
