import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room({ lampActive, setLampActive, ...props }) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const [screensActive, setScreensActive] = useState(true);

  const onPointerOver = () => (document.body.style.cursor = "pointer");
  const onPointerOut = () => (document.body.style.cursor = "default");

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={screensActive ? 1.5 : 0} 
          luminanceThreshold={0.2}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      {/* Screens */}
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        onClick={(e) => {
          e.stopPropagation();
          setScreensActive(!screensActive);
        }}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <meshStandardMaterial 
          color={screensActive ? "#ffffff" : "#000000"} 
          emissive={new THREE.Color(screensActive ? "#ffffff" : "#000000")} 
          emissiveIntensity={screensActive ? 0.7 : 0} 
        />
      </mesh>

      {/* Lamp */}
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        onClick={(e) => {
          e.stopPropagation();
          setLampActive(!lampActive);
        }}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <meshStandardMaterial 
          color={"#ffffff"} 
          emissiveIntensity={1}
        />
      </mesh>

      {/* Rest of model */}
      <mesh geometry={nodes._________6_blinn1_0.geometry} material={new THREE.MeshPhongMaterial({color: "#4a4646"})} />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={new THREE.MeshPhongMaterial({color: "#473f51"})} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={new THREE.MeshPhongMaterial({color: "#582f0e"})} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={new THREE.MeshPhongMaterial({color: "#000"})} />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={new THREE.MeshStandardMaterial({color: "#fff"})} />
      <mesh geometry={nodes.handls_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.kovrik_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.lamp_bl_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.miuse_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.pCylinder5_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={new THREE.MeshPhongMaterial({color: "#8971aa"})} />
      <mesh geometry={nodes.polySurface53_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.radiator_blinn1_0.geometry} material={new THREE.MeshPhongMaterial({color: "#fff"})} />
      <mesh geometry={nodes.radiator_blinn1_0001.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.railing_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.red_bttns_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.red_vac_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.stylus_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={new THREE.MeshPhongMaterial({color: "#582f0e"})} />
      <mesh geometry={nodes.tablet_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.triangle_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vac_black_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vacuum1_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vacuumgrey_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vires_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.window_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");