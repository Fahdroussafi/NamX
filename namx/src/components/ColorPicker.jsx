import React from 'react'

const ColorPicker = (props) => {
    const handleClick = (e) => {
      if (!window.activeMesh) return;
      window.activeMesh.material.color = new THREE.Color(
        e.target.style.background
      );
    };
    <div className="absolute z-10">
      <div
        onClick={handleClick}
        style={{ background: "blue" }}
        className=" h-14 w-14"
      ></div>
      <div
        onClick={handleClick}
        style={{ background: "yellow" }}
        className=" h-14 w-14"
      ></div>
      <div
        onClick={handleClick}
        style={{ background: "white" }}
        className=" h-14 w-14"
      ></div>
    </div>
  };
  

export default ColorPicker