import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Trump(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/lowpoly_trump_free_character.glb");
  console.log(materials.TrumpLPmat);
  const { actions } = useAnimations(animations, group);
  materials.TrumpLPmat.extensions = {
    KHR_materials_pbrSpecularGlossiness: {
      diffuseTexture: {
        index: 1, // Index of the diffuse texture in the GLTF file
      },
      glossinessFactor: 0.5, // Adjust the glossiness as desired
      specularFactor: [1, 1, 1], // Adjust the specular color or intensity as desired
    },
  };
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, -100, -15.35]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <group
            name="4c6925bfbfe64fc7a4208f71a9751516fbx"
            rotation={[-Math.PI, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="trump_rigCharRoot">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_33" />
                    <skinnedMesh
                      name="Object_34"
                      geometry={nodes.Object_34.geometry}
                      material={materials.TrumpLPmat}
                      skeleton={nodes.Object_34.skeleton}
                    />
                  </group>
                </group>
                <group name="trump_lp_model" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// Preload the GLTF file
useGLTF.preload("/lowpoly_trump_free_character.glb");
