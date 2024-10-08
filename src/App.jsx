import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./models/Trump.jsx";
import {Van} from "./models/Van"
import {
  Environment,
  OrbitControls,
  useGLTF,
  Center,
  useTexture,
  Decal,
  useAnimations,
  Stage,
} from "@react-three/drei";
import "./App.css";
import CameraRig from "../CameraRig";
import { easing } from "maath";

const App = () => {
  const group = useRef();
  const ref = useRef()

  const Box = () => {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="lightblue" />
      </mesh>
    );
  };

  const Shirt = () => {
    const { nodes, materials } = useGLTF("../public/shirt_baked.glb");
    const logoTexture = useTexture("../public/threejs.png");
    console.log(materials.lambert1);
    useFrame((state, delta) =>
      easing.dampC(materials.lambert1.color, "#EFBD48", 0.25, delta)
    );
    return (
      <group>
        <mesh
          castShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
        >
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        </mesh>
      </group>
    );
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="font-bold text-white text-6xl">Vite + React</h1>
      </div>
      <Canvas
        shadows dpr={[1, 2]}
        camera={{ position: [.5,0,.75], fov: 100 }}
        // camera={{ position: [0, 0, 0], fov: 20 }}
        gl={{ preserveDrawingBuffer: true }}
        className="transition-all ease-in"
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        {/* <CameraRig> */}
        {/* <Shirt /> */}

        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment="city"
        >
          false
          {/* <Model /> */}
          <Van/>
          false
        </Stage>

        {/* <Box /> */}

        {/* </CameraRig> */}
      </Canvas>
    </div>
  );
};

export default App;
