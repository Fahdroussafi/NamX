import React from 'react'

const Floor = (props) => {
    return (
      <mesh {...props} receiveShadow>
        <boxBufferGeometry args={[20, 1, 10]} />
        <meshPhysicalMaterial />
      </mesh>
    );
  };

export default Floor