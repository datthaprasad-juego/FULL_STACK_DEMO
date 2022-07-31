import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

function Earth(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => (mesh.current.rotation.y += 0.009));
  const [colorMap] = useLoader(TextureLoader, ["colorEarth.jpg"]);

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={mesh} scale={2}>
      <sphereBufferGeometry args={[0.8, 50]} />
      <meshStandardMaterial color={"white"} map={colorMap} />
      <spotLight />
    </mesh>
  );
}

export default Earth;
