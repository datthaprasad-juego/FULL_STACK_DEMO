import styled from "styled-components";

export const ThemeContainer = styled.div`
  width: 10vmin;
  height: 10vmin;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transistion: all 5s;
  z-index: 1000;
  background-color: ${({ theme }) => theme.background};
`;

export const ThemeCenterButton = styled.div`
  width: 10vmin;
  height: 10vmin;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transistion: all 5s;
  background-color: ${({ theme }) => theme.themeButton.background};
  border: ${({ theme }) => `1px solid ${theme.themeButton.color}`};

  &:after {
    content: "THEME";
    font-size: 1.2vmin;
    padding: 0.2vmin;
    color: ${({ theme }) => theme.themeButton.color};
    position: absolute;
    top: 6.5vmin;
    margin: auto;
    text-align: center;
    font-weight: bold;
    opacity: 1;
  }
`;

export const ThemeIcon = styled.h1`
  color: ${({ theme }) => theme.themeButton.color};
  font-size: 5vmin;
  user-select: none;
`;
