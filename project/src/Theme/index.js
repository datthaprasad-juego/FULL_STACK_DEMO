import { memo } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  1: {
    themeButton:{
      background: "black",
      color: "white",
    },
    mobileMenu:{
      background:"rgba(0,0,0,0.8)"
    },
    background: "linear-gradient(120deg,#000,#0d2350, #000)",
    color: "#fff",
    primary: { blue: "#302399", black: "#0e0f26" },
  },
  0: {
    themeButton:{
      background: "white",
      color: "black",
    },
    mobileMenu:{
      background:"rgba(255,255,255,0.8)"
    },
    background: "linear-gradient(120deg,#00f3f4,#fff, #00ffff)",
    color: "#181818",
    primary: { blue: "#302399", black: "#0e0f26" },
  },
};

const Theme = ({ themeMode, children }) => {
  return <ThemeProvider theme={theme[themeMode]}>{children}</ThemeProvider>;
};

export default memo(Theme);
