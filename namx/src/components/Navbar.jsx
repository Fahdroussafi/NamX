import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

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
        <div className="flex mt-8 ml-20 justify-center w-screen">
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
          {/* <Link
              to="/login"
              className="flex items-center justify-center text-white text-2xl font-bold"
              >
            <button className="ml-4">
              <AiOutlineLogin className="text-2xl" size={20} />
            </button>
            </Link> */}
        </div>
        {isAuthenticated ? (
          <button onClick={logout} className="mr-5 text-white">
            
            <RiLogoutBoxRFill className="text-2xl " size={20} />
          </button>
          
        ) : (
          <Link
            to="/login"
            className="flex items-center justify-center text-white text-2xl font-bold"
          >
            <button className="mr-5">
              <AiOutlineLogin className="text-2xl" size={20} />
            </button>
          </Link>
        )}
      </div>
      <div className="w-full">
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
  );
};

export default Navbar;
