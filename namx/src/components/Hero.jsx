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
      </div>
      {/* <div className="h-24 w-1/3 bg-slate-50 flex ml-96">
        <p className='text-center text-black flex justify-center items-center text-2xl font-bold '>Total Volume Secured: $42,104,783,662.47</p>
      </div> */}
    </div>
  );
};

export default Hero;
