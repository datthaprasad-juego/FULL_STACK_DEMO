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

const StyledText = styled.p`
  font-size: 100%;
  margin-bottom: 2%;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  color: pink;
  `;


const ResultScene = ({ cardData, closeButtonHandler, points }) => {
  return (
    <Popup
      popupContent={
        <>
          <Container>
            <Text>You got <StyledText>{points}</StyledText> points</Text>
            <Text>Opponent Card</Text>
            <Card playerDetails={cardData} showAttributes={false} />
          </Container>
        </>
      }
      isLoading={false}
      setPopup={closeButtonHandler}
    />
  );
};

export default ResultScene;
