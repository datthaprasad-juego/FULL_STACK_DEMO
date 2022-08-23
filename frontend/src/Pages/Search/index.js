import useFetch from "../../Hooks/useFetch";
import Lottie from "react-lottie";
import {
  Attribute,
  Container,
  FoundCard,
  PlayerDetails,
  PlayerName,
  Text,
  Value,
} from "./styles";
import { CustomButton } from "../../Components/Button";
import useAuth from "../../Hooks/useAuth";

const Search = () => {
  useAuth();
  const { data, loading, error } = useFetch(
    "http://localhost:5000/getOpponentPlayer",
    "POST",
    {
      userId: 1,
    }
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

  if (error) return <div>Error...</div>;

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
        onClick={() => (window.location = "/battle")}
      />
    </Container>
  );
};

export default Search;
