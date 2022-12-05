import Card from "../../Components/Card";
import { Container, FloatingButton, RemainingCount } from "./styles";

import Lottie from "react-lottie";
import * as remainingCardsJson from "../../Lottie/remainingCards.json";
import * as homeJson from "../../Lottie/home.json";
import { useContext, useState } from "react";
import ThemeContext from "../../Context/themeContext";
import Popup from "../../Popup";
import useFetch from "../../Hooks/useFetch";
import fetch from "../../Hooks/fetch";
import LostScene from "../../Scenes/LostScene";
import WinScene from "../../Scenes/winScene";
import ResultScene from "../../Scenes/resultAfterBetScene";
import { useParams } from "react-router-dom";

const GamePlay = () => {
  const { setPopup, userData } = useContext(ThemeContext);
  const [showPopup, setShowPopup] = useState(false);
  const { id } = useParams();
  //TODO : useEffect and fetch data from server only one time
  let {
    data,
    loading: isLoading,
    error,
  } = useFetch(
    process.env.REACT_APP_BACKEND_ENDPOINT + "/initiateGame",
    "post",
    { opponent_user_id: Number(id.replace(":", "")) },
    userData.access_token
  );

  const onBetClick = async ({
    selectedAttributeIndex = null,
    selectedAttributeValue = null,
  }) => {
    setPopup("", true);
    await onBetClickFetchResponse(
      data,
      {
        selectedAttributeIndex: Number(selectedAttributeIndex),
        selectedAttributeValue: Number(selectedAttributeValue),
        roomId: data.room_id,
      },
      userData.access_token
    );
    setShowPopup(true);
    setPopup();
  };

  if (data && data.remainingCards === 0 && data.isGameWon) {
    return (
      <Container>
        <WinScene reward={data.reward} />
      </Container>
    );
  }
  if (data && data.remainingCards === 0 && !data.isGameWon) {
    return (
      <Container>
        <LostScene />
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

  if (error) {
    return (
      <Container>
        <Popup popupContent={error.toString()} isLoading={false} home={true} />
      </Container>
    );
  }

  return (
    <>
      {showPopup && (
        <ResultScene
          cardData={data.opponentCard}
          closeButtonHandler={setShowPopup}
          points={data.resultPoints}
        />
      )}
      <Container>
        <FloatingButton floatingContent="Remaining cards">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: remainingCardsJson,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            width={"100%"}
          />
          <RemainingCount>{data.remainingCards}</RemainingCount>
        </FloatingButton>

        <Card playerDetails={data.activePlayer} onBetClick={onBetClick} />

        <FloatingButton
          onClick={() => {
            window.location = "/";
          }}
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: homeJson,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            width={"100%"}
          />
        </FloatingButton>
      </Container>
    </>
  );
};

async function onBetClickFetchResponse(data, input, token) {
  let response = await fetch(
    process.env.REACT_APP_BACKEND_ENDPOINT + "/betCard",
    "post",
    input,
    token
  );
  data.remainingCards = response.data.remainingCards;
  data.activePlayer = response.data.activePlayer;
  data.isGameWon = response.data.isGameWon;
  data.reward = response.data.reward;
  data.opponentCard = response.data.opponentCard;
  data.resultPoints = response.data.resultPoints;
}

export default GamePlay;
