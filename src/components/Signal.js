import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';

const TrafficSignal = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Cylinder args={[0.1, 0.1, 3, 32]}>
        <meshBasicMaterial attach="material" color="black" />
      </Cylinder>

      <Sphere position={[0, 1.5, 0]} args={[0.5, 32, 32]}>
        <meshBasicMaterial attach="material" color="red" />
      </Sphere>

      <Sphere position={[0, 0.5, 0]} args={[0.5, 32, 32]}>
        <meshBasicMaterial attach="material" color="yellow" />
      </Sphere>

      <Sphere position={[0, -0.5, 0]} args={[0.5, 32, 32]}>
        <meshBasicMaterial attach="material" color="green" />
      </Sphere>
    </Canvas>
  );
};

export default TrafficSignal;
