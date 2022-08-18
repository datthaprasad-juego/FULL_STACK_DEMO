import styled, { keyframes } from "styled-components";

const blue = "#00bcd4";
const skyBlue = "#03a9f4";
const lightBlue = "#e1f5fe";

export const BackgrounAnimation = keyframes`
  0% {
    color: ${lightBlue};
  }
  50% {
    color: ${skyBlue};
  }
  100% {
    color: ${blue};
  }
`;

export const CradContainer = styled.div`
  width: 60%;
  height: 90%;
  background-color: transparent;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  border: 0.1rem solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-image: ${({ image }) => `linear-gradient(
    360deg,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.8),
    rgba(0,0,0,0.1)
  ),
  url(${image})`};
  background-position: center;
  background-size: cover;
`;

export const CardTitle = styled.h1`
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.1em;
  color: #ffffff;
  width: 100%;

  &::after {
    content: "- - - - - - - - - -";
    display: block;
    font-size: 1rem;
    max-width: 90%;
    height: 1%;
    animation: ${BackgrounAnimation} 2s ease-in infinite;
    margin: 0 auto;
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  height: 40%;
  padding: 1%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1%;
`;

export const Attribute = styled.div`
  font-family: "Orbitron", sans-serif;
  line-height: 2.4rem;
  letter-spacing: 0.1em;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: ${({ active }) => (active ? "0.1rem solid #fff" : "none")};

  &::before {
    content: ${({ name }) => `"${name} : "`};
    font-family: "Popins", sans-serif;
    font-size: 0.8vmax;
    width: 50%;
    display: absolute;
    font-weight: bold;
    text-transform: uppercase;
  }

  &:hover {
    outline: 0.1rem solid #fff;
  }
`;

export const SubmitButton = styled.button`
  width: 200%;
  height: 90%;
  background-color: #ffffff;
  border: 0.1rem solid #ffffff;
  border-radius: 0.5rem;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.1em;
  color: #000000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${({ disabled }) => {
    if (!disabled)
      return `&:hover {
        background-color: #000000;
        color: #ffffff;
      }`;
    else
      return `
      filter: blur(0.7px);
      cursor: not-allowed;
      `;
  }}
`;
