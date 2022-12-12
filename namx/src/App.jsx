import { useState, Suspense } from "react";
// import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Orbit from "./components/Orbit";
import Box from "./components/Box";
import Background from "./components/Background";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import ColorPicker  from "./components/ColorPicker";
import Dragable from "./components/Dragable";
const App = () => {
   return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadowMap
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <ColorPicker />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Dragable/>
        <Suspense fallback={null}>
          <Box position={[-4, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[4, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default App;
