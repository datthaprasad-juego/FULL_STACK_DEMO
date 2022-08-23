import Lottie from "react-lottie";
import { LoadingBarContainer } from "./styles";

const LoadingBar = () => {
  return (
    <LoadingBarContainer>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: require("../../Lottie/rotatingTimer.json"),
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={100}
        width={100}
      />

      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: require("../../Lottie/waiting.json"),
        }}
      />
    </LoadingBarContainer>
  );
};
export default LoadingBar;
