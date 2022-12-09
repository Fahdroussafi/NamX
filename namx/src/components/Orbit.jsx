import { useRef, useState, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame } from "react-three-fiber";


extend({ OrbitControls });

const Orbit = () => {
    const { camera, gl } = useThree();
    const controls = useRef();
    useFrame(() => controls.current.update());
    return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
  };

export default Orbit