import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

function Chestnut() {
  const chestnut = useGLTF("/chestnut/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.95} />
      <directionalLight position={[2, 15, 1]} intensity={0.5} />
      <primitive
        object={chestnut.scene}
        scale={1.2}
        position={[0, 0, 0]} // Adjust position dynamically
        rotation={[-6.1, -24.3, -0]}
      />
    </mesh>
  );
}

function ChestnutCanvas() {
  return (
    <div className="absolute z-10 right-20 bottom-5 chestnut" style={{ width: "45%", height: "70%" }}>
      <Canvas
        className="w-full h-full"
        frameloop="demand"
        shadows
        dpr={[1,2]}
        camera={{ position: [30, 3, 5], fov: 15 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Chestnut />
        <Preload all />
      </Canvas>
    </div>
  );
}

export default ChestnutCanvas;
