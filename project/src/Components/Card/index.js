import { useRef, useState } from "react";
import {
  Attribute,
  CardDetails,
  CardTitle,
  CradContainer,
  SubmitButton,
} from "./styles";

const Card = ({ playerDetails, onBetClick }) => {
  const [isAtrributeSelected, setIsAtrributeSelected] = useState(false);
  const selectedAtrribute = useRef("");

  const ClickHandler = (event) => {
    event.preventDefault();
    //remove border if siblings are active
    const siblings = event.target.parentNode.children;
    for (let i = 0; i < siblings.length; i++) {
      siblings[i].style.border = "none";
    }
    //add border color to dom
    const target = event.target;
    target.style.borderBottom = "0.1rem solid #fff";

    selectedAtrribute.current = target.id;
    setIsAtrributeSelected(true);
  };

  return (
    <CradContainer image={`/images/${playerDetails.rank}.jpg`}>
      <CardTitle>{playerDetails.name}</CardTitle>
      <CardDetails>
        <Attribute id="1" name="Rank" onClick={ClickHandler}>
          {playerDetails.rank}
        </Attribute>
        <Attribute id="2" name="Best" onClick={ClickHandler}>
          {playerDetails.best}
        </Attribute>
        <Attribute id="3" name="100's" onClick={ClickHandler}>
          {playerDetails.centuries}
        </Attribute>
        <Attribute id="4" name="Six's" onClick={ClickHandler}>
          {playerDetails.six}
        </Attribute>
        <Attribute id="5" name="Four's" onClick={ClickHandler}>
          {playerDetails.four}
        </Attribute>
        <Attribute id="6" name="Cup's" onClick={ClickHandler}>
          {playerDetails.trophie}
        </Attribute>
        <SubmitButton
          onClick={() => {
            onBetClick(selectedAtrribute.current);
          }}
          disabled={!isAtrributeSelected}
        >
          BET
        </SubmitButton>
      </CardDetails>
    </CradContainer>
  );
};
export default Card;
