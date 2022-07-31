import { ThemeCenterButton, ThemeIcon } from "./styles";

export const ThemeButton = ({ HandleThemeChange }) => {
  return (
    <ThemeCenterButton
      onClick={() => {
        HandleThemeChange();
      }}
    >
      <ThemeIcon>#</ThemeIcon>
    </ThemeCenterButton>
  );
};
