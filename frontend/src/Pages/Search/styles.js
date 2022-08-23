import styled from "styled-components";
import { BlinkAnimation } from "../GamePlay/styles";

export const Container = styled.div`
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Text = styled.h1`
  ${({ absolute }) => absolute && `position: absolute;`}
  top: 3rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  text-align: center;
  margin-top: 1rem;
  animation: ${BlinkAnimation} 2s ease-in infinite;
`;

export const FoundCard = styled.div`
  width: 60%;
  height: 60%;
  background-color: transparent;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  border: 0.1rem solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${({ image,theme }) => `linear-gradient(
        360deg,
        ${theme.background},
        rgba(0, 0, 0, 0.8),
        rgba(0,0,0,0.1)
        ),
        url(${image})`};
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const PlayerDetails = styled.div`
  width: 100%;
  padding: 3%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const Attribute = styled.h1`
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.color};
  width: 40%;
  background-color: pink;
  text-align: center;
  margin-top: 1rem;
  padding: 1%;
`;

export const Value = styled.h1`
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.color};
  width: 50%;
  text-align: center;
  margin: 0 auto;
  padding: 1%;
`;
