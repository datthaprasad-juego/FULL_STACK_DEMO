import useFetch from "../../Hooks/useFetch";
import Lottie from "react-lottie";
import {
  Attribute,
  Container,
  FoundCard,
  PlayerDetails,
  Text,
  Value,
} from "./styles";
import { CustomButton } from "../../Components/Button";
import useAuth from "../../Hooks/useAuth";
import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  useAuth();
  const { userData } = useContext(ThemeContext);

  const { data, loading, error } = useFetch(
    process.env.REACT_APP_BACKEND_ENDPOINT + "/getOpponentPlayer",
    "GET",
    {},
    userData.access_token
  );

  if (loading) {
    return (
      <Container>
        <Text absolute={true}>Searching opponent player</Text>
        <Lottie
          options={{
            animationData: require("../../Lottie/searchPleayer.json"),
          }}
        />
      </Container>
    );
  }

  if (error) return navigate("/");

  return (
    <Container>
      <Text> PLAYER FOUND </Text>
      <FoundCard>
        <PlayerDetails>
          <Attribute>Enemy :</Attribute>
          <Value>{data.playerDetail.name}</Value>
        </PlayerDetails>
        <PlayerDetails>
          <Attribute>Points :</Attribute>
          <Value>{data.playerDetail.points}</Value>
        </PlayerDetails>

        <Lottie
          options={{
            animationData: require("../../Lottie/success.json"),
          }}
        />
      </FoundCard>
      <CustomButton
        content={"Start Game"}
        onClick={() => navigate("/battle:" + data.playerDetail.user_id)}
        // onClick={initiateGame}
      />
    </Container>
  );
};

export default Search;
