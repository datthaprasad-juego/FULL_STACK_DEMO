import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const HeroContainer = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
`;
export const HeroText = styled.h1`
  color: ${({ theme }) => theme.color};
  margin-top: 20vh;
  margin-bottom: 1vh;
  margin-left: 3vh;
  font-size: 12vmax;
  user-select: none;
  font-family: 'Orbitron', sans-serif;
`;

export const HeroSubtitle = styled.p`
  color: ${({ theme }) => theme.color};
  margin-left: 3vh;
  margin-top: 1.6rem;
  font-size: 4vmin;
  user-select: all;
`;

export const Glow = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
`;

export const AutherName = styled.span`
  color: ${({ theme }) => theme.color};
  animation: ${Glow} 1s linear infinite;
  font-size: 4vmin;
  user-select: all;
`;

export const MainContainer = styled.div`
background: rgba(255, 102, 153,0.8);;
  backdrop-filter: blur(12px);
  margin-top: 2vh;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    backdrop-filter: blur(12px);
    transform: scale(1.2);
    border-radius: 10px;
    background: rgba(255, 102, 153,0.8);
    border: 1px solid ${({ theme }) => theme.color};
  }
`;
export const MainText = styled.h1`
  color: ${({ theme }) => theme.color};
  text-align: center;
  font-size: 1rem;
  user-select: none;
  padding: 0.5rem;
`;


//test
export const LoginContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center; 
`

export const LoginLottieContainer = styled.div`
  width: 50%;
  backdrop-filter: blur(12px);
`

export const LoginForm = styled.div`
  width: 50%;
  text-align: center;
  margin: auto;
  background-color: transparent;
`
export const Form = styled.form`
  background-color: red;
`