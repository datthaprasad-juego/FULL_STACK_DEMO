import { useEffect, useState } from "react";
import Theme from "./Theme";
import GlobalStyle from "./Global/styles.js";
import ModelContainer from "./Models";
import Home from "./Pages/Home";

const App = () => {
  // theme state
  const [selectedTheme, setSelectedTheme] = useState("dark");

  const HandleThemeChange = () => {
    let newTheme = "";
    if (selectedTheme === "dark") newTheme = "light";
    else newTheme = "dark";
    setSelectedTheme(newTheme);
    localStorage.setItem("current-theme", newTheme);
    console.log({ localStorage });
  };

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = localStorage.getItem("current-theme");
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  return (
    <Theme themeMode={selectedTheme}>
      <GlobalStyle />
      <Test HandleThemeChange={HandleThemeChange} />
      <ModelContainer />
      {/* <Home/> */}
    </Theme>
  );
};
export default App;

function Test({ HandleThemeChange }) {
  return (
    <>
      {" "}
      <h1>Hey</h1>
      <button onClick={HandleThemeChange}>theme test</button>
    </>
  );
}
