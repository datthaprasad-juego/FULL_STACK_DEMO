import Card from "../../Components/Card";
import { Container, FloatingButton, RemainingCount } from "./styles";

import Lottie from "react-lottie";
import * as remainingCardsJson from "../../Lottie/remainingCards.json";
import * as homeJson from "../../Lottie/home.json";
import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import { useState } from "react";
import Popup from "../../Popup";
import useFetch from "../../Hooks/useFetch";
import fetch from "../../Hooks/fetch";

const remainingCardsOption = {
  loop: true,
  autoplay: true,
  animationData: remainingCardsJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const homeOption = {
  loop: true,
  autoplay: true,
  animationData: homeJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const GamePlay = () => {
  const { setPopup } = useContext(ThemeContext);
  // const [activePlayer, setActivePlayer] = useState({});
  // const [remainingCards, setRemainingCards] = useState(0);

  //TODO : useEffect and fetch data from server only one time
  let {
    data,
    loading: isLoading,
    error,
  } = useFetch("http://localhost:5000/initiateGame", "get");

  const onBetClick = async (selectedAtrributeIndex) => {
    setPopup("", true);
    let response = await fetch("http://localhost:5000/betCard", "post", {
      selectedAtrributeIndex,
      remainingCards: data.remainingCards,
    });
    data.remainingCards = response.data.remainingCards;
    data.activePlayer = response.data.activePlayer;
    setPopup();
    console.log({ data });
  };

  if (data && data.remainingCards === 0) {
    return (
      <Container>
        <Popup popupContent={"Game Over"} isLoading={false} home={true} />
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <Popup />
      </Container>
    );
  }

  return (
    <Container>
      <FloatingButton floatingContent="Remaining cards">
        <Lottie options={remainingCardsOption} width={"100%"} />
        <RemainingCount>{data.remainingCards}</RemainingCount>
      </FloatingButton>
      <Card playerDetails={data.activePlayer} onBetClick={onBetClick} />
      <FloatingButton
        onClick={() => {
          window.location = "/";
        }}
      >
        <Lottie options={homeOption} width={"100%"} />
      </FloatingButton>
    </Container>
  );
};

export default GamePlay;
