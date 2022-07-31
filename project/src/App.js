import { Router } from "./Routes/index";
import { useEffect, useState } from "react";

import Theme from "./Theme";
import GlobalStyle from "./Global/styles.js";
import { ThemeButton } from "./Components/Button";
import constants from "./Constants";
const App = () => {
  // theme state
  const [selectedTheme, setSelectedTheme] = useState(constants.THEME_LIGHT);

  const HandleThemeChange = () => {
    setSelectedTheme((oldTheme) => Number(!oldTheme));
    localStorage.setItem("current-theme", Number(!selectedTheme));
  };

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = localStorage.getItem("current-theme");
    if (currentTheme) {
      setSelectedTheme((oldTheme) => Number(currentTheme));
    }
  }, []);

  return (
    <Theme themeMode={selectedTheme}>
      <GlobalStyle />
      <Router />
      <ThemeButton HandleThemeChange={HandleThemeChange} />
    </Theme>
  );
};
export default App;
