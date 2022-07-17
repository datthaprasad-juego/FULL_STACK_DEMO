import { memo } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  dark: {
    background: "linear-gradient(120deg,#000,#0d2350, #000)",
    color: "#fff",
  },
  light: {
    background: "linear-gradient(120deg,#f2f3f4,#fff, #f7f9f0)",
    color: "#282c34",
  },
};

const Theme = ({ themeMode, children }) => {
  console.log("Theme");
  return <ThemeProvider theme={theme[themeMode]}>{children}</ThemeProvider>;
};

export default memo(Theme);
