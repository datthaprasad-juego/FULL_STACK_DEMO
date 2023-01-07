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

export const LoginContainer = styled.div`
  width: 80%;
  height: 60%;
  border: 2px solid black;

  display: flex;
`;

export const LottieContainer = styled.div`
  width: 90%;
  padding: 2%;
`;

export const InputContainer = styled.div`
  width: 100%;
  padding: 2%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 70%;
  height: 85%;
  background: ${({ theme }) => theme.background};
  border: 1px solid blue;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


