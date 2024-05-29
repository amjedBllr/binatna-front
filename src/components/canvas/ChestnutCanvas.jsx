import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

function Chestnut() {
  const chestnut = useGLTF("/chestnut/scene.gltf");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleRotation = () => setRotationY((prevRotation) => prevRotation + 0.01); // Adjust speed as needed
    const intervalId = setInterval(handleRotation, 20); // Adjust interval for animation speed

    return () => clearInterval(intervalId); // Cleanup function to stop animation on component unmount
  }, []);

  return (
    <mesh>
      <ambientLight intensity={0.95} />
      <directionalLight position={[2, 15, 1]} intensity={0.5} />
      <primitive
        object={chestnut.scene}
        scale={
          screenWidth < 600
            ? 1.1 // Increased scale for smaller screens
            : screenWidth < 900
              ? 1.2 // Intermediate scale for medium screens
              : 1.1 // Base scale for larger screens
        }
        position={[0, 0, 0]} // Adjust position dynamically
        rotation={[0, rotationY, 0]} // Apply animation to Y-axis rotation
      />
    </mesh>
  );
}

function ChestnutCanvas() {
  return (
    <div className="absolute z-10 bottom-0 right-0 sm:left-64 sm:bottom-10 sm:left-0 chestnut w-full h-1/2 flex justify-center ">
      <Canvas
        className="w-full h-full"
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [30, 3, 5], fov: 15 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Chestnut />
        <Preload all />
      </Canvas>
    </div>
  );
}

export default ChestnutCanvas;
