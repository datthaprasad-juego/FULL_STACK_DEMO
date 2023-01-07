import styled from "styled-components";
import Card from "../Components/Card";
import Popup from "../Popup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 70%;
`;

const Text = styled.p`
  margin-bottom: 2%;
  font-size: 100%;

  @media only screen and (max-width: 600px){
    font-size: 75%;
  }
`;

const WinScene = ({ reward }) => {
  if(typeof reward==="string") reward = JSON.parse(reward)
  return (
    <Popup
      popupContent={
        <>
          <Container>
            <Text>Congrats!... You won and recieved a new card</Text>
            <Card playerDetails={reward} showAttributes={false} />
          </Container>
        </>
      }
      isLoading={false}
      home={true}
    />
  );
};

export default WinScene;
