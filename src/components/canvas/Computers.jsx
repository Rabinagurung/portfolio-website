import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[3, 2, 2]} color='#FF6B6B' intensity={1.2} />
      <pointLight position={[-3, 1, 3]} color='#2DD4BF' intensity={1} />
      <primitive object={computer.scene} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <div className='absolute inset-0  w-full cursor-grab active:cursor-grabbing'>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.8}
            enableDamping
            dampingFactor={0.08}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.7}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          {/* Fits the camera to the model's actual bounding box on
              mount and on every resize, so it's always fully framed
              (no cropping, no shrinking) regardless of screen size. */}
          <Bounds fit clip observe margin={1.3}>
            <Computers />
          </Bounds>
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
