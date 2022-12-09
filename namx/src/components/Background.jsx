import React from 'react'
import { useLoader, useThree } from 'react-three-fiber';
import * as THREE from "three";
import Shop from "../assets/autoShop.jpg";

const Background = (props) => {
    const texture = useLoader(THREE.TextureLoader, Shop);
    const { gl } = useThree();
  
    const formatted = new THREE.WebGLCubeRenderTarget(
      texture.image.height
    ).fromEquirectangularTexture(gl, texture);
  
    return <primitive attach="background" object={formatted} />;
  };

export default Background