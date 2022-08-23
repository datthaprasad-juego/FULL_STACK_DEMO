import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 5vmin;
  color: ${({ theme }) => theme.color};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Orbitron", sans-serif;
  user-select: none;
  @media only screen and (max-width: 600px) {
    font-size: 4vmin;
  }
`;

export const Card = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color};
  box-shadow: 0 0 1rem 0.1rem ${({ theme }) => theme.color};
  user-select: none;
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 50%;
  }
`;

export const Label = styled.label`
    font-size: 2vmin;
    color: ${({ theme }) => theme.color};
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    justify-content: center;
    justify-self: flex-end;
    font-family: "Orbitron", sans-serif;
    user-select: none;
    @media only screen and (max-width: 600px) {
        font-size: 3vmin;
    }
`;

export const Input = styled.input`
    width: 80%;
    height: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.themeButton.color};
    box-shadow: 0 0 0.5rem 0.1rem ${({ theme }) => theme.background};
    user-select: none;
    margin-bottom: 1rem;
    @media only screen and (max-width: 600px) {
        width: 90%;
        height: 2rem;
    }
`;