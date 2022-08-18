import styled, { keyframes } from "styled-components";

export const BlinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1%;
  justify-items: center;
  align-items: center;
`;

export const FloatingButton = styled.div`
  width: 7rem;
  height: 7rem;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: ${({floatingContent})=>floatingContent?`"${floatingContent}"`:""};
    font-size: 1.2vmin;
    padding: 0.2vmin;
    color: ${({ theme }) => theme.themeButton.color};
    position: absolute;
    text-align: center;
    font-weight: bold;
    opacity: 1;
    width: auto;
    background: ${({ theme }) => theme.themeButton.background};
    animation: ${BlinkAnimation} 1.5s ease-in-out infinite;
  }
`;

export const RemainingCount = styled.span`
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  color: #fff;
`;
