import React, { useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false);

  const modalref = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    modalref.current.showModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[45%_55%] w-screen h-screen">
      <div className="hidden sm:block h-screen">
        <img
          src="https://images.pexels.com/photos/6214387/pexels-photo-6214387.jpeg"
          className="w-full h-full object-cover"
          alt="Background Image"
          style={{borderTopRightRadius:'15%', borderBottomRightRadius:'15%'}}
        />
      </div>
      <div className="flex items-center justify-center min-h-screen order-1 sm:order-2">
        <div className="flex items-start justify-center flex-col">
          <h1 className="absolute top-[18%] flex items-center gap-3 text-5xl text-secondary">
            <span className="bg-secondary p-3 rounded-full text-white flex items-center justify-center">
              <LuShoppingBag className="w-8 h-8" />
            </span>
            Luxe Store
          </h1>
          <div className="flex items-end justify-end">
          <h1 className="font-semibold text-3xl">Let's Get Connected</h1>
          </div>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div>
              <label className="input validator">
                <HiOutlineMail />
                <input
                  type="email"
                  placeholder="mail@site.com"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                  className="w-70"
                  required
                />
              </label>
              <p className="validator-hint">Enter Valid Email</p>
            </div>

            <div>
              <label className="input validator">
                <IoKeyOutline />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
                  className="w-70"
                  required
                />
              </label>
              <p className="validator-hint">
                Must be 8 characters with Lower Upper and Number Character
              </p>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-soft btn-secondary">
                {loading && (
                  <span className="loading loading-spinner loading-md"></span>
                )}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={modalref}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Login SuccessFull!...</p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-soft btn-secondary"
                onClick={() => navigate("")}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
