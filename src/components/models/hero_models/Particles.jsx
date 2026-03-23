import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
  const points = useRef();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;     // X
      pos[i * 3 + 1] = Math.random() * 15;          // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15; // Z
      spd[i] = 0.02 + Math.random() * 0.05;        
    }
    return [pos, spd];
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  const shaderArgs = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#ffffff") }
    },
    vertexShader: `
      uniform float uTime;
      attribute float speed;
      void main() {
        vec3 pos = position;
        pos.y = mod(pos.y - uTime * speed, 15.0) - 5.0;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 3.0 * (1.0 / -mvPosition.z); 
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      void main() {
        if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
        gl_FragColor = vec4(uColor, 0.6);
      }
    `
  }), []);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-speed" 
          count={count} 
          array={speeds} 
          itemSize={1} 
        />
      </bufferGeometry>
      <shaderMaterial 
        args={[shaderArgs]} 
        transparent 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
};

export default Particles;