import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import moon from '../../assets/images/moon.png'
import { motion } from 'framer-motion'

function MagicHouse() {
    const MagicHouse = useGLTF("/magic_house/scene.gltf");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [rotationY, setRotationY] = useState(0);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleRotation = () => setRotationY((prevRotation) => prevRotation - 0.01); // Adjust speed as needed
        const intervalId = setInterval(handleRotation, 20); // Adjust interval for animation speed

        return () => clearInterval(intervalId); // Cleanup function to stop animation on component unmount
    }, []);

    return (
        <mesh>
            <ambientLight intensity={0.95} />
            <directionalLight position={[2, 15, 1]} intensity={0.5} />
            <primitive
                object={MagicHouse.scene}
                scale={
                    screenWidth < 600
                        ? 0.35// Increased scale for smaller screens
                        : screenWidth < 900
                            ? 0.35 // Intermediate scale for medium screens
                            : 0.35 // Base scale for larger screens
                }
                position={[0, -2, 0]} // Adjust position dynamically
                rotation={[0, rotationY, 0]} // Apply animation to Y-axis rotation
            />
        </mesh>
    );
}

function MagicHouseCanvas() {
    return (
        <div
        className="magichouse w-full h-full flex justify-center items-center">
            <div className="absolute w-2/6 aspect-square rounded-full bg-tertiary" />
                <Canvas
                    frameloop="demand"
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [20, 4, 5], fov: 15 }}
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                    <MagicHouse />
                    <Preload all />
                </Canvas>
        </div>
    );
}

export default MagicHouseCanvas;
