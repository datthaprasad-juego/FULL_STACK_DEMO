import styled from "styled-components";

export const ThemeContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transistion: all 5s ease-in-out;
  z-index: 1000;
  background-color: ${({ theme }) => theme.background};
`;

export const ThemeCenterButton = styled.div`
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transistion: all 5s;
  border: ${({ theme }) => `1px solid ${theme.themeButton.color}`};

  &:hover {
    &::after {
      content: "HELP";
      font-size: 1.2vmin;
      padding: 0.2vmin;
      color: ${({ theme }) => theme.themeButton.color};
      position: absolute;
      top: 3rem;
      margin: auto;
      text-align: center;
      font-weight: bold;
      opacity: 1;
      width: auto;
      background: ${({ theme }) => theme.themeButton.background};
    }
  }
`;

export const ThemeIcon = styled.h1`
  color: ${({ theme }) => theme.themeButton.color};
  font-size: 5vmin;
  user-select: none;
`;

/*<---------------- ANIMATED BUTTON ------------------->*/
export const AnimatedButton = styled.a`
  margin-top: ${({ marginTop }) => marginTop};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.color};
  border: 0.1rem solid ${({ theme }) => theme.color};
  padding: 0.5rem 1.5rem;
  position: relative;
  overflow: hidden;
  transition: color 1s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.themeButton.background};
    z-index: 2;

    &::before {
      width: 200%;
      z-index: -1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -5rem;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.color};
    transform: skewX(45deg);
    transition: width 1s;
  }
`;

/*<---------------- TOGGLE BUTTON ------------------->*/
export const ToggleButtonContainer = styled.div`
  width: 55%;
  height: 40%;
  background-color: ${({ theme }) => theme.color};
  border-radius: 5vmax;
  display: flex;
  align-items: center;
`;
export const ToggleInnerContent = styled.div`
  transition: all 0.3s ease-in-out;
  width: 40%;
  margin-left: 5%;
  background: ${({ theme }) => theme.background};
  height: 80%;
  border-radius: 50%;
  transform: ${({ theme }) =>
    theme.themeButton.color === "black"
      ? "translateX(130%)"
      : "translateX(0%)"};
`;
