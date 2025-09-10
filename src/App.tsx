import { Canvas, type ThreeElements, useFrame } from '@react-three/fiber';
import * as React from 'react';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import './App.css';
import { AppContext } from './AppContext/AppContext.tsx';
import { AppContextProvider } from './AppContext/AppContextProvider.tsx';
import { BlaBla } from './BlaBla.tsx';
import { ClickCounter } from './ClickCounter.tsx';
import { DevCheat } from './DevCheat.tsx';

function Box(props: ThreeElements['mesh']) {
  const { clickCount, increaseClickCount, disableStartMs, increaseVoidClickCount } = React.useContext(AppContext);
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  const isDisabled = disableStartMs + 2000 > Date.now();
  console.log(isDisabled)

  useFrame((_state, delta) => {
    if (hovered) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
    meshRef.current.rotation.x += delta;
  });
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={1}
      onClick={() => {
        if (isDisabled) {
          increaseVoidClickCount();
          return;
        }
        increaseClickCount();
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={clickCount > 0 ? 'hotpink' : '#2f74c0'} />
    </mesh>
  );
}

function AppInner() {
  return (
    <>
      <BlaBla />
      <DevCheat />
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight
          position={[-10, -10, -10]}
          decay={0}
          intensity={Math.PI}
        />
        <Box position={[0, 0, 0]} />
      </Canvas>
      <ClickCounter />
    </>
  );
}

function App() {
  return (
    <>
      <AppContextProvider>
        <AppInner />
      </AppContextProvider>
    </>
  );
}

export default App;
