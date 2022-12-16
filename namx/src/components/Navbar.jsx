import React, { useState } from "react";
import { AiOutlineLogin, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div class="fixed w-full">
      <div className="flex justify-between ju items-center h-full backdrop-blur-sm">
        {/* <div className="flex mt-8 ml-20 justify-center w-screen"></div> */}
        <div className="hidden md:flex text-white mr-5 justify-center w-screen ">
          <ul className="flex text-white items-center">
            <Link
              to="/"
              className="flex items-center justify-center text-white hover:text-gray-400"
            >
              <li>Home</li>
            </Link>
            <Link
              to="/Store"
              className="flex items-center justify-center text-white hover:text-gray-400"
            >
              <li>Store</li>
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center text-white hover:text-gray-400"
            >
              <li>Contact</li>
            </Link>
          </ul>
          {/* <Link
              to="/login"
              className="flex items-center justify-center text-white text-2xl font-bold"
              >
            <button className="ml-4">
              <AiOutlineLogin className="text-2xl" size={20} />
            </button>
            </Link> */}
          {isAuthenticated ? (
            <button onClick={logout} className=" text-white">
              <RiLogoutBoxRFill
                className="text-2xl hover:text-gray-400"
                size={20}
              />
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center justify-center text-white text-2xl font-bold hover:text-gray-400"
            >
              <button className="">
                <AiOutlineLogin className="text-2xl" size={20} />
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* <div className="w-full">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <ul>
              <Link
                to="/"
                className="text-gray-800 text-4xl text-left"
              >
              <li>
                Home
              </li>
              </Link>
              <Link
                to="/about"
                className="text-gray-800 text-4xl text-left"
              >
              <li>
              About
              </li>
              </Link>
              <Link
                to="/services"
                className="text-gray-800 text-4xl text-left"
              >
              <li>
              Services
              </li>
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 text-4xl text-left"
              >
              <li>
              Contact
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div> */}
      {/* Hamburger menu */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "w-full mt-0 bg-black bg-opacity-60 text-white absolute top-[90px] left-0 flex justify-center text-center"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <Link to="/" className="text-white text-4xl">
            <li>Home</li>
          </Link>
          <Link to="/about" className="text-white text-4xl">
            <li>About</li>
          </Link>
          <Link to="/contact" className="text-white text-4xl">
            <li>Contact</li>
          </Link>
          <Link to="/login" className="text-white text-4xl">
            <button className="m-8">Login</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
