import React, { useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiCityLight } from "react-icons/pi";
import { TbMapPinCode } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = (e)=>{
    e.preventDefault();
    setloading(true)
    modalref.current.showModal();
  }

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center shadow-2xl rounded-4xl">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <form
          className="flex flex-col items-center justify-center w-full max-w-md p-8"
          method="post"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="input validator">
              <FaRegUser />
              <input
                type="text"
                pattern="[A-Za-z]{3,20}"
                required
                name="name"
                className="w-70"
                value={data.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </label>
            <p className="validator-hint">
              Please enter a valid name with only letters
            </p>
          </div>

          <div>
            <label className="input validator">
              <HiOutlineMail />
              <input
                type="email"
                name="email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                value={data.email}
                className="w-70"
                required
                onChange={handleChange}
                placeholder="mail@site.com"
              />
            </label>
            <p className="validator-hint">Enter Valid Email id</p>
          </div>

          <div>
            <label className="input validator">
              <IoKeyOutline />
              <input
                type="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
                value={data.password}
                required
                placeholder="Password"
                onChange={handleChange}
              />
            </label>
            <p className="validator-hint text-break">
              Must be 8 characters with Lower Upper and Number Character
            </p>
          </div>

          <div>
            <label className="input validator">
              <MdOutlineLocalPhone />
              <input
                type="tel"
                name="phoneNumber"
                className="w-70"
                value={data.phoneNumber}
                required
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="PhoneNumber"
              />
            </label>
            <p className="validator-hint">Must be 10 digits</p>
          </div>

          <div>
            <label className="input validator">
              <PiCityLight />
              <input
                type="text"
                className="w-70"
                pattern="[A-Za-z]{3,30}"
                required
                name="city"
                value={data.city}
                onChange={handleChange}
                placeholder="City"
              />
            </label>
            <p className="validator-hint">
              Please enter a valid City with only letters
            </p>
          </div>

          <div>
            <textarea
              className="textarea w-80"
              placeholder="Address"
              name="address"
              value={data.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-5">
            <label className="input validator">
              <TbMapPinCode />
              <input
                type="tel"
                name="pincode"
                className="w-70"
                value={data.pincode}
                required
                onChange={handleChange}
                pattern="[0-9]{6}"
                placeholder="Pincode"
              />
            </label>
            <p className="validator-hint">Must be 6 digits</p>
          </div>

          <div>
            <input
              type="file"
              className="file-input w-80"
              onChange={(e) =>
                setData({ ...data, imageUrl: e.target.files[0] })
              }
            />
          </div>

          <div className="mt-3">
            <button className="btn btn-md btn-soft btn-secondary">
              {loading && (
                <span className="loading loading-spinner loading-md"></span>
              )}
              Submit
            </button>
          </div>
        </form>
      </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" ref={modalref}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Please Login to Continue!...
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-soft btn-secondary" onClick={()=>navigate('/login')}>Login</button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
  );
}
