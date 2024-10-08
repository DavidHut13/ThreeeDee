/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Karol Miklas (https://sketchfab.com/karolmiklas)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/free-gmc-motorhome-reimagined-low-poly-6hiH0iyDqXqtdD9wbqSbyLLhKmz
title: FREE GMC Motorhome reimagined low poly
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Van(props) {
  const { nodes, materials } = useGLTF(
    "/free_gmc_motorhome_reimagined_low_poly.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0.76, 0.24, 3.4]}
            rotation={[-0.14, 0, 0.01]}
            scale={1.06}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.interior}
            />
          </group>
          <group position={[0.84, 0.29, 3.48]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.interior}
            />
          </group>
          <group position={[0.75, 0.13, 2.73]} scale={[0.25, 0.29, 0.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.interior}
            />
          </group>
          <group scale={1.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.interior}
            />
          </group>
          <group position={[-0.66, 0.29, 3.48]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.interior}
            />
          </group>
          <group
            position={[-0.75, 0.1, 2.85]}
            rotation={[-Math.PI, 0.46, -Math.PI]}
            scale={[0.25, 0.29, 0.25]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.interior}
            />
          </group>
          <group scale={1.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.clay}
            />
          </group>
          <group
            position={[0, -0.96, 3.06]}
            rotation={[-0.48, 0, 0]}
            scale={1.17}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials["clay.001"]}
            />
          </group>
          <group
            position={[0, -0.96, -1.14]}
            rotation={[0.25, 0, 0]}
            scale={1.17}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials["clay.001"]}
            />
          </group>
          <group
            position={[0, -0.96, -2.19]}
            rotation={[-1.2, 0, 0]}
            scale={1.17}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials["clay.001"]}
            />
          </group>
          <group scale={1.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.windows}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/free_gmc_motorhome_reimagined_low_poly.glb");

