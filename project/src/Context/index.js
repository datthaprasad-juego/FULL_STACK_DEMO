import React, { useEffect, useState } from "react";
import constants from "../Constants";
import Popup from "../Popup";
import Theme from "../Theme";

import context from "./themeContext";

const ThemeContext = (props) => {
  // theme state
  const [selectedTheme, setSelectedTheme] = useState(constants.THEME_LIGHT);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const HandleThemeChange = () => {
    setSelectedTheme((oldTheme) => Number(!oldTheme));
    localStorage.setItem("current-theme", Number(!selectedTheme));
    console.log({ selectedTheme });
  };

  const setPopup = (content = "", isLoading = false) => {
    setShowPopup((isOpen) => !isOpen);
    setPopupContent(content);
    setIsLoading(isLoading);
  };

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = localStorage.getItem("current-theme");
    if (currentTheme) {
      setSelectedTheme((oldTheme) => Number(currentTheme));
    }
  }, []);

  const contextValues = {
    selectedTheme,
    HandleThemeChange,
    setPopup,
  };

  return (
    <Theme themeMode={selectedTheme}>
      <context.Provider value={contextValues}>
        {props.children}
      </context.Provider>
      {showPopup && (
        <Popup
          setPopup={setPopup}
          popupContent={popupContent}
          isLoading={isLoading}
        />
      )}
    </Theme>
  );
};
export default ThemeContext;
