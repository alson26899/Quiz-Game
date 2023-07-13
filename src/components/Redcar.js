import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Redcar() {
  const carRef = React.useRef();

  useFrame(() => {
    carRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={carRef}>
      <mesh position={[0, 6, 0]}>
        <cylinderGeometry args={[6, 6, 12, 32]} />
        <meshStandardMaterial color={0x333333} />
      </mesh>
      <mesh position={[-18, 6, 0]}>
        <cylinderGeometry args={[6, 6, 12, 32]} />
        <meshStandardMaterial color={0x333333} />
      </mesh>
      <mesh position={[18, 6, 0]}>
        <cylinderGeometry args={[6, 6, 12, 32]} />
        <meshStandardMaterial color={0x333333} />
      </mesh>
      <mesh position={[0, 12, 0]}>
        <boxGeometry args={[60, 15, 30]} />
        <meshStandardMaterial color={0xa52523} />
      </mesh>
    </group>
  );
}

export default Redcar;
