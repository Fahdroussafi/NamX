import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <div>
      <div class="fixed w-full">
        <div className="flex justify-between items-center h-full backdrop-blur-sm">
          <div className="flex mt-8 justify-center w-screen">
            <Link
              to="/"
              className="flex items-center justify-center text-white text-2xl font-bold"
            >
            <img className="max-w-[250px]" src={logo} alt="/" />
            </Link>
          </div>
          <div className="hidden md:flex text-white mr-5">
          <ul className="flex text-white items-center">
              <li>Store</li>
              <li>Contact</li>
            </ul>
            <Link
              to="/login"
              className="flex items-center justify-center text-white text-2xl font-bold"
              >
            <button className="ml-4">
              <AiOutlineLogin className="text-2xl" size={20} />
            </button>
            </Link>
          </div>
          {/* Hamburger menu */}
          {/* <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
            ) : (
              <AiOutlineMenu size={30} className="text-white" />
              )}
        </div> */}

          {/* Mobile Menu */}
          {/* <div
          className={
            nav
            ? "w-full bg-black bg-opacity-40 text-white absolute top-[90px] left-0 flex justify-center text-center"
            : "absolute left-[-100%]"
          }
          >
          <ul>
          <li className="text-2xl">Platform</li>
          <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8">Login</button>
            </ul>
          </div> */}
        </div>
          <div className="w-full" >
          <input type="checkbox" class="toggler" />
          <div class="hamburger">
            <div></div>
          </div>
          <div class="menu">
            <div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
