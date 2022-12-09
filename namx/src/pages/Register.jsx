import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cover from "../assets/NAMX-03.jpg";
import logo from "../assets/favicon-32x32.png";
import { useEffect } from "react";
import { Country, State, City } from "country-state-city";
import PasswordStrengthBar from "react-password-strength-bar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");


  // Password toggle handler

  const register = () => {
    axios
      .post("http://localhost:5000/api/auth/create-user", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        address: address,
        country: country,
        state: state,
        city: city,
        zip: zip,
      })
      .then((response) => {
        console.log(response);
        if (response.data.message === "User created successfully") {
          // alert("User created successfully");
          window.location.href = "/login";
        } else {
          // alert("User not created");
        }
      });
  };

  //if password ?= confirm password
  const checkPassword = () => {
    if (password === confirmPassword) {
      register();
    } else {
      // alert("Passwords do not match");
    }
  };

  let Country = require("country-state-city").Country;
  let State = require("country-state-city").State;
  let City = require("country-state-city").City;

  const [passwordShown, setPasswordShown] = useState(false);
  const TogglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const ToggleConfirmPassword = () => {
    setConfirmPasswordShow(!confirmPasswordShow);
  };
 
  
// toast if inpute empty
  const notify = () => toast("Please fill in all fields");

  // toast
  const notify2 = () => toast("Passwords do not match");


  return (
    //Register user

    <div className="h-screen flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg">
      <div className="text-center">
         
          <Link to="/Login">
            <h2 className="mt-6 mb-12 text-3xl font-extrabold text-gray-900 ">
              Back to Login
            </h2>
            </Link>
           
          </div>
        <div className="">
          <form action="#" method="POST">
            <div className="">
              <div className="">
                <div className="grid grid-cols-4 gap-6">
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }}
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }}
                      required
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <input
                      type={passwordShown ? "text" : "password"}
                      placeholder="******************"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  <button
                        type="button" 
                        onClick={TogglePassword}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {passwordShown ? "Hide" : "Show"}
                      </button>

                    <PasswordStrengthBar password={password} />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    
                    <input
                      type="password"
                      placeholder="******************"
                      onChange={(event) => {
                        setConfirmPassword(event.target.value);
                      }}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <button
                        type="button" 
                        onClick={ToggleConfirmPassword}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {confirmPasswordShow ? "Hide" : "Show"}
                      </button>
                    <PasswordStrengthBar password={confirmPassword} />
                   
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      placeholder="Country"
                      onChange={(event) => {
                        setCountry(event.target.value);
                      }}
                      autoComplete="country-name"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {Country.getAllCountries().map((country) => (
                        <option key={country.id} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <select
                      type="text"
                      placeholder="State"
                      onChange={(event) => {
                        setState(event.target.value);
                      }}
                      id="region"
                      autoComplete="address-level1"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    ></select>
                  </div>

                  <div className="col-span-4">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      onChange={(event) => {
                        setAddress(event.target.value);
                      }}
                      id="street-address"
                      autoComplete="street-address"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <select
                      type="text"
                      placeholder="City"
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                      id="city"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                      {/* {City.getAllCities().map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))} */}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      onChange={(event) => {
                        setZip(event.target.value);
                      }}
                      id="postal-code"
                      autoComplete="postal-code"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  onClick={() => {
                    notify();
                    register();
                    checkPassword();
                  }}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
                <ToastContainer />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={cover}
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
