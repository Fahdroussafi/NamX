import { useRef, useState, Suspense } from "react";
import wood from "./assets/wood.jpg";
// import sky from "../public/sky.jpg";
import Shop from "./assets/autoShop.jpg";
// import "./App.css";
import * as THREE from "three";
import {
  Canvas,
  extend,
  useThree,
  useFrame,
  useLoader,
} from "react-three-fiber";
import { AxesHelper, BoxGeometry, Points } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  const controls = useRef();
  useFrame(() => controls.current.update());
  return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, wood);
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  const handlePointerDown = (e) => {
    console.log(e);
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };

  const handlePointerEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };

  const handlePointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, Shop);
  const { gl } = useThree();

  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return <primitive attach="background" object={formatted} />;
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight intensity={0.5} />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

const App = () => {
  const handleClick = (e) => {
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
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

      <Canvas
        shadowMap
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
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
