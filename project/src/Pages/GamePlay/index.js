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

  const [isLoading, setLoading] = useState(false);
  const [activePlayer, setActivePlayer] = useState({
    name: "MS Dhoni",
    centuries: 70,
    best: 183,
    rank: 4,
    six: 100,
    four: 78,
    trophie: 2,
  });
  const [remainingCards, setRemainingCards] = useState(52);

  //TODO : useEffect and fetch data from server only one time
  let { data, loading, error } = useFetch("http://localhost:3000/favicon.ico", {});
  console.log({ data, loading, error });

  const onBetClick = (selectedAtrributeIndex) => {
    //run for two seconds
    setTimeout(() => {
      setPopup();

      //TODO : request api and get response from server based on that update data and popup
      // setPopup(
      //   <h1>Will update in few days... - {selectedAtrributeIndex}</h1>,
      //   false
      // );
      setActivePlayer({
        name: "MS Dhoni 2",
        centuries: 70,
        best: 183,
        rank: 4,
        six: 100,
        four: 78,
        trophie: 2,
      });
    }, 2000);

    setPopup("", true);
  };

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
        <RemainingCount>{remainingCards}</RemainingCount>
      </FloatingButton>
      <Card playerDetails={activePlayer} onBetClick={onBetClick} />
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
