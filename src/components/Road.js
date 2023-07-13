import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PlaneGeometry, Mesh, MeshBasicMaterial, LineSegments, BufferGeometry, BufferAttribute, LineBasicMaterial } from 'three';

const Road = () => {
  const roadWidth = 3;
  const roadLength = 100;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={0.5} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.81, 0]}>
        <planeGeometry args={[roadWidth, roadLength]} />
        <meshBasicMaterial color={0x808080} />
      </mesh>
    </Canvas>
  );
};

export default Road;
