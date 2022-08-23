import Lottie from "react-lottie";
import Popup from "../Popup";

const LostScene = () => {
  return (
    <Popup
      popupContent={
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: require("../Lottie/lost.json"),
          }}
        />
      }
      isLoading={false}
      home={true}
    />
  );
};

export default LostScene;
