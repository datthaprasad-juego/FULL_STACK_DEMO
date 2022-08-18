import styled, { createGlobalStyle } from "styled-components";

export const PopupStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
} 
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.popup.background};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 100000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.span`
  color: ${({ theme }) => theme.popup.color};
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  border: ${({ theme }) => `1px solid ${theme.popup.color}`};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  cursor: pointer;
`;
