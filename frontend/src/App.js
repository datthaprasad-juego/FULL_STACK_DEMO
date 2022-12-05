import { Router } from "./Routes/index";
import React from "react";
import GlobalStyle from "./Global/styles.js";
import { HelpButton } from "./Components/Button";
import ThemeContext from "./Context";

const App = () => {
  return (
    <ThemeContext>
      <GlobalStyle />
      <Router />
      <HelpButton />
    </ThemeContext>
  );
};
export default App;
