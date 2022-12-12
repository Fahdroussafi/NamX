import React from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend } from "react-three-fiber";
import { useRef, useEffect } from "react";
extend({ DragControls });

const Dragable = (props) => {
  const groupRef = useRef();
  const [children, setChildren,]= useState([])
  const { camera, gl } = useThree();
    useEffect(() => {
        setChildren(groupRef.current.children)
    }, []);
  return <group ref={groupRef}>
    {props.children}
    <dragControls />
    </group>;
};

export default Dragable;
