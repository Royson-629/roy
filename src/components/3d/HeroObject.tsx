import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const HeroObject = () => {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const coneRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const star1Ref = useRef<THREE.Mesh>(null);
  const star2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Smooth group interaction - amplified for more energy!
    const mouseX = (state.pointer.x * Math.PI) / 4;
    const mouseY = (state.pointer.y * Math.PI) / 4;

    // Mobile fallback for rotation if pointer is at (0,0) mostly
    const baseRotationY = state.pointer.x === 0 && state.pointer.y === 0 ? Math.sin(t*0.5)*0.5 : mouseX;
    const baseRotationX = state.pointer.x === 0 && state.pointer.y === 0 ? Math.sin(t*0.3)*0.5 : mouseY;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, baseRotationX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, baseRotationY, 0.05);
    
    // Playful individual rotations and floats
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 1.5;
      torusRef.current.rotation.y = t * 0.8;
      torusRef.current.position.y = Math.sin(t * 2) * 0.4 + 1;
    }
    
    if (coneRef.current) {
      coneRef.current.rotation.z = t * -1.2;
      coneRef.current.rotation.x = t * 1.6;
      coneRef.current.position.y = Math.cos(t * 2.5) * 0.3 - 1.2;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.8;
      boxRef.current.rotation.y = t * 1.8;
      boxRef.current.position.x = Math.sin(t * 1.5) * 0.6 + 2.5;
      boxRef.current.position.y = Math.cos(t * 2) * 0.5 - 0.5;
    }

    if (star1Ref.current) {
      star1Ref.current.rotation.z = t * 3;
      star1Ref.current.rotation.x = t * 2;
      star1Ref.current.position.x = Math.sin(t * 2) * 0.4 - 2.5;
      star1Ref.current.position.y = Math.cos(t * 2.5) * 0.4 - 0.5;
    }

    if (star2Ref.current) {
      star2Ref.current.rotation.y = t * -3;
      star2Ref.current.rotation.x = t * 2.5;
      star2Ref.current.position.x = Math.sin(t * 2) * 0.5 + 1.5;
      star2Ref.current.position.y = Math.cos(t * 1.5) * 0.5 + 2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Pink Torus */}
      <mesh ref={torusRef} position={[-2, 1, -1]} scale={0.9} castShadow receiveShadow>
        <torusGeometry args={[0.8, 0.35, 16, 100]} />
        <meshToonMaterial color="#f472b6" />
        <meshBasicMaterial color="#111827" wireframe opacity={0.15} transparent />
      </mesh>

      {/* Blue Cone */}
      <mesh ref={coneRef} position={[2, -1.2, 0.5]} scale={1.3} castShadow receiveShadow>
        <coneGeometry args={[0.6, 1.5, 32]} />
        <meshToonMaterial color="#60a5fa" />
      </mesh>

      {/* Yellow Box */}
      <mesh ref={boxRef} position={[2.5, -0.5, -1.5]} scale={1} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshToonMaterial color="#fde047" />
      </mesh>

      {/* Scattered Star 1 */}
      <mesh ref={star1Ref} position={[-2.5, -0.5, 1]} scale={0.4} castShadow receiveShadow>
        <octahedronGeometry args={[1, 0]} />
        <meshToonMaterial color="#4ade80" />
      </mesh>

      {/* Scattered Star 2 */}
      <mesh ref={star2Ref} position={[1.5, 2, -0.5]} scale={0.3} castShadow receiveShadow>
        <octahedronGeometry args={[1, 0]} />
        <meshToonMaterial color="#c084fc" />
      </mesh>
    </group>
  );
};
