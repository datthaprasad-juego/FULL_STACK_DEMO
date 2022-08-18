import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import {
  AnimatedButton,
  ThemeCenterButton,
  ThemeIcon,
  ToggleButtonContainer,
  ToggleInnerContent,
} from "./styles";

export const HelpButton = () => {
  const { setPopup } = useContext(ThemeContext);
  const openHelpPopup = () => {
    setPopup(<h1>Will update in few days...</h1>, false);
  };

  return (
    <ThemeCenterButton onClick={openHelpPopup}>
      <ThemeIcon>?</ThemeIcon>
    </ThemeCenterButton>
  );
};

export const JoinUsButton = ({ marginTop }) => {
  return <AnimatedButton marginTop={marginTop}>JOIN US</AnimatedButton>;
};

export const ToggleButton = () => {
  return (
    <ToggleButtonContainer>
      <ToggleInnerContent />
    </ToggleButtonContainer>
  );
};
