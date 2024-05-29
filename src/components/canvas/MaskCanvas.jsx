import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

function Mask() {
  const mask = useGLTF("/keyboard/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.95} />
      <directionalLight position={[2, 15, 1]} intensity={0.5} />
      <primitive
        object={mask.scene}
        scale={38.25}
        position={[0, 0, 0]} // Adjust position dynamically
        rotation={[-6.1, -24.3, -0.65]}
      />
    </mesh>
  );
}

function MaskCanvas() {
  return (
    <div className="absolute z-10" style={{ width: "40%", height: "70%" }}>
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
          enableRotate={true} // Enable rotation
          enablePan={false} // Disable panning
          enableDamping={true} // Smoothly animate the rotation
          dampingFactor={0.1} // Adjust damping factor for rotation smoothness
        />
        <Mask />
        <Preload all />
      </Canvas>
    </div>
  );
}

export default MaskCanvas;
