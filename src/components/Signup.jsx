import React, { useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiCityLight } from "react-icons/pi";
import { TbMapPinCode } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import LoginImage from '../assets/LoginImage.png';
import axios from "axios";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    city: "",
    address: "",
    pincode: "",
    imageUrl: "",
  });

  const modalref = useRef(null);

  const navigate = useNavigate();

  // console.log(data);

  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setloading(true);
    try{
      const res = await axios.post('http://localhost:5000/api/signup',data);
      modalref.current.showModal();
    }catch(err){
      console.log(err.message);
    }finally{
      setloading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[55%_45%] w-screen h-screen">
      <div className="flex flex-col items-center justify-center shadow-2xl rounded-4xl">
        <h1 className="flex items-center gap-3 text-5xl text-secondary mt-4">
          <span className="bg-secondary p-3 rounded-full text-white flex items-center justify-center">
            <LuShoppingBag className="w-8 h-8" />
          </span>
          Luxe Store
        </h1>
        <h1 className="text-3xl font-bold mt-5">Create Account</h1>
        <form
          className="w-full max-w-3xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          method="post"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="input validator w-full">
              <FaRegUser />
              <input
                type="text"
                pattern="[A-Za-z]{3,20}"
                required
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full"
              />
            </label>
            <p className="validator-hint text-xs mt-1">
              Please enter a valid name with only letters
            </p>
          </div>

          <div>
            <label className="input validator w-full">
              <HiOutlineMail />
              <input
                type="email"
                name="email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                value={data.email}
                required
                onChange={handleChange}
                placeholder="mail@site.com"
                className="w-full"
              />
            </label>
            <p className="validator-hint text-xs mt-1">Enter valid email id</p>
          </div>

          <div>
            <label className="input validator w-full">
              <IoKeyOutline />
              <input
                type="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
                value={data.password}
                required
                onChange={handleChange}
                placeholder="Password"
                className="w-full"
              />
            </label>
            <p className="validator-hint text-xs mt-1">
              Min 8 chars: upper, lower, number, special
            </p>
          </div>

          <div>
            <label className="input validator w-full">
              <MdOutlineLocalPhone />
              <input
                type="tel"
                name="phoneNumber"
                value={data.phoneNumber}
                required
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="Phone Number"
                className="w-full"
              />
            </label>
            <p className="validator-hint text-xs mt-1">Must be 10 digits</p>
          </div>

          <div>
            <label className="input validator w-full">
              <PiCityLight />
              <input
                type="text"
                pattern="[A-Za-z]{3,30}"
                required
                name="city"
                value={data.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full"
              />
            </label>
            <p className="validator-hint text-xs mt-1">
              Enter a valid city with only letters
            </p>
          </div>

          <div>
            <label className="input validator w-full">
              <TbMapPinCode />
              <input
                type="tel"
                name="pincode"
                value={data.pincode}
                required
                onChange={handleChange}
                pattern="[0-9]{6}"
                placeholder="Pincode"
                className="w-full"
              />
            </label>
            <p className="validator-hint text-xs mt-1">Must be 6 digits</p>
          </div>

          <div className="sm:col-span-2">
            <textarea
              className="textarea w-full"
              placeholder="Address"
              name="address"
              value={data.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="sm:col-span-2">
            <input
              type="file"
              className="file-input w-full"
              onChange={(e) =>
                setData({ ...data, imageUrl: e.target.files[0] })
              }
            />
          </div>

          <div className="sm:col-span-2 flex justify-center">
            <button className="btn btn-md btn-soft btn-secondary w-40">
              {loading && (
                <span className="loading loading-spinner loading-md"></span>
              )}
              Submit
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center">
          <p>
            Already have a Account?{" "}
            <span
              className="underline"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              {" "}
              Signin{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="hidden flex justify-end sm:block h-screen">
        <img
          src={LoginImage}
          className="w-full h-full object-cover"
          alt="Background Image"
          style={{
            borderTopLeftRadius: "15%",
            borderBottomLeftRadius: "15%",
          }}
        />
      </div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={modalref}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Please Login to Continue!...</p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-soft btn-secondary"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
