import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ball from "./Ball";
import Earth from "./Earth";

const ModelContainer = () => {
  const cricketBallsArray = Array.from(
    { length: 400 },
    () => Math.random() * 10
  );
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Earth position={[0, 0, 0]} />
      <Ball position={[-2.1, 0, 0]} rotation={0.05} y={0.02} scale={0.005} />
      <Ball position={[-2, 1, 0]} rotation={0.02} y={0.009} scale={0.001} />
      <Ball position={[-0, -2, 1]} rotation={0.02} y={0.003} scale={0.003} />
      <Ball position={[-2.9, 3, 0]} rotation={0.05} y={0.02} scale={0.001} />
      <Ball position={[-3.9, 0, 0]} rotation={0.05} y={0.001} scale={0.001} />
      <Ball position={[-4.9, 0.5, 3]} rotation={0.05} y={0.008} scale={0.00356} />
      <Ball position={[-7.9, 1, 1]} rotation={0.001} y={0.003} scale={0.002} />
      <Ball position={[-5.9, 0, 0.3]} rotation={0.04} y={0.009} scale={0.003} />
      <Ball position={[-3.9, 3, 0]} rotation={0.02} y={0.005} scale={0.00256} />
      <Ball position={[-3.9, -2.9, 0]} rotation={0.03} y={0.01} scale={0.002} />

      <Ball position={[-5.9, -3, 0]} rotation={0.007} y={0.02} scale={0.008} />
      <Ball position={[-8.9, 6, 0]} rotation={0.01} y={0.02} scale={0.005} />

      {cricketBallsArray.map((element, key) => {
        let side = Math.random() * 100 < 50 ? 1 : -1;

        return (
          <Ball
            key={key}
            position={[
              side * (1 + element + Math.random() * 2),
              element - Math.random() * 3,
              0,
            ]}
            rotation={Math.random() }
            y={Math.random() / 80}
            scale={Math.random() / 1000}
          />
        );
      })}
    </Canvas>
  );
};

export default ModelContainer;
