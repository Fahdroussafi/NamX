import React from "react";

import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-6xl">NAMX HUV</h1>
        <p className="text-xl py-4">
          A HYDROGEN-POWERED SUV PARTIALLY FUELED BY REMOVABLE CAPSULES, PAVING{" "}
          <br />
          THE WAY FOR A NEW GENERATION OF HYDROGEN VEHICLES.
        </p>
        <div className="flex flex-col justify-center  text-white px-4 text-center mt-56">
          <p>
            <span>&#10075;</span>
            <span>&#10075;</span>
            Our double ambition is to become a new reference in the world of{" "}
            <br />
            zero-emission cars, and to constantly explore new territories to{" "}
            <br />
            facilitate mobility of our consumers. NAMX is a collective project{" "}
            <br />
            built with the best industrial and technical partners in Europe and{" "}
            <br />
            Africa
            <p className="text-xs">
              <span>&#10088;</span>
              Faouzi Annajan: Founder and President of NAMX{" "}
              <span>&#10089;</span>
            </p>
            <span>&#10076;</span>
            <span>&#10076;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
